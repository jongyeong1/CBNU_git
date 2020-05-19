# frozen_string_literal: true

require "active_support/all"

module Labkit
  module Tracing
    module Rails
      # https://edgeapi.rubyonrails.org/classes/ActiveSupport/Notifications/Instrumenter.html#method-c-new
      class AbstractInstrumenter
        def start(name, id, payload)
          scope = OpenTracing.start_active_span(span_name(payload))

          scope_stack.push scope
        end

        def finish(name, id, payload)
          scope = scope_stack.pop
          span = scope.span

          Labkit::Tracing::TracingUtils.log_common_fields_on_span(span, span_name(payload))

          exception = payload[:exception]
          Labkit::Tracing::TracingUtils.log_exception_on_span(span, exception) if exception

          tags(payload).each do |k, v|
            span.set_tag(k, v)
          end

          scope.close
        end

        def scope_stack
          Thread.current[:_labkit_trace_scope_stack] ||= []
        end

        def span_name(payload)
          raise "span_name not implemented"
        end

        def tags(payload)
          {}
        end
      end
    end
  end
end
