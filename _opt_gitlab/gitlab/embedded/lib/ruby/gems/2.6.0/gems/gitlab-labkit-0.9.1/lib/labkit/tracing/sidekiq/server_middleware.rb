# frozen_string_literal: true

require "opentracing"

module Labkit
  module Tracing
    module Sidekiq
      # ServerMiddleware provides a sidekiq server middleware for
      # instrumenting distributed tracing calls when they are
      # executed by the Sidekiq server
      class ServerMiddleware
        include SidekiqCommon

        SPAN_KIND = "server"

        def call(_worker, job, _queue)
          context = TracingUtils.tracer.extract(OpenTracing::FORMAT_TEXT_MAP, job)

          TracingUtils.with_tracing(operation_name: "sidekiq:#{job["class"]}", child_of: context, tags: tags_from_job(job, SPAN_KIND)) { |_span| yield }
        end
      end
    end
  end
end
