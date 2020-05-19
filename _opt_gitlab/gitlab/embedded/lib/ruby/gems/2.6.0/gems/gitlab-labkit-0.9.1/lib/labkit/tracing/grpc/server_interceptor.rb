# frozen_string_literal: true

# Disable the UnusedMethodArgument linter, since we need to declare the kwargs
# in the methods, but we don't actually use them.
# rubocop:disable Lint/UnusedMethodArgument

require "opentracing"
require "grpc"

module Labkit
  module Tracing
    module GRPC
      # GRPCServerInterceptor is a server-side GRPC interceptor
      # for instrumenting GRPC calls with distributed tracing
      # in a GRPC Ruby server
      class ServerInterceptor < ::GRPC::ServerInterceptor
        def request_response(request: nil, call: nil, method: nil)
          wrap_with_tracing(call, method, "unary") do
            yield
          end
        end

        def client_streamer(call: nil, method: nil)
          wrap_with_tracing(call, method, "client_stream") do
            yield
          end
        end

        def server_streamer(request: nil, call: nil, method: nil)
          wrap_with_tracing(call, method, "server_stream") do
            yield
          end
        end

        def bidi_streamer(requests: nil, call: nil, method: nil)
          wrap_with_tracing(call, method, "bidi_stream") do
            yield
          end
        end

        private

        def route_from_method(method)
          service_class = method.owner
          rpc_method = method.name.to_s.split("_").map(&:capitalize).join("")

          "/#{service_class.service_name}/#{rpc_method}"
        end

        def wrap_with_tracing(call, method, grpc_type)
          context = TracingUtils.tracer.extract(OpenTracing::FORMAT_TEXT_MAP, call.metadata)
          method_name = route_from_method(method)
          tags = {
            "component" => "grpc",
            "span.kind" => "server",
            "grpc.method" => method_name,
            "grpc.type" => grpc_type,
          }

          TracingUtils.with_tracing(operation_name: "grpc:#{method_name}", child_of: context, tags: tags) do |_span|
            yield
          end
        end
      end
    end
  end
end

# rubocop:enable Lint/UnusedMethodArgument
