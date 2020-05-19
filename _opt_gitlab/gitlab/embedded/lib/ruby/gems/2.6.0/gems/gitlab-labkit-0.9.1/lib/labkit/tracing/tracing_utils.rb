# frozen_string_literal: true

require "opentracing"

module Labkit
  module Tracing
    # Internal methods for tracing. This is not part of the LabKit public API.
    # For internal usage only
    class TracingUtils
      # Convience method for running a block with a span
      def self.with_tracing(operation_name:, tags:, child_of: nil)
        scope = tracer.start_active_span(operation_name, child_of: child_of, tags: tags)
        span = scope.span

        # Add correlation details to the span if we have them
        correlation_id = Labkit::Correlation::CorrelationId.current_id
        span.set_tag("correlation_id", correlation_id) if correlation_id

        begin
          yield span
        rescue StandardError => e
          log_exception_on_span(span, e)
          raise e
        ensure
          scope.close
        end
      end

      # Obtain a tracer instance
      def self.tracer
        OpenTracing.global_tracer
      end

      # Generate a span retrospectively
      def self.postnotify_span(operation_name, start_time, end_time, tags: nil, child_of: nil, exception: nil)
        span = OpenTracing.start_span(operation_name, start_time: start_time, tags: tags, child_of: child_of)

        log_exception_on_span(span, exception) if exception

        span.finish(end_time: end_time)
      end

      # Add exception logging to a span
      def self.log_exception_on_span(span, exception)
        span.set_tag("error", true)
        span.log_kv(kv_tags_for_exception(exception))
      end

      # Generate key-value tags for an exception
      def self.kv_tags_for_exception(exception)
        case exception
        when Exception
          {
            :"event" => "error",
            :"error.kind" => exception.class.to_s,
            :"message" => Labkit::Logging::Sanitizer.sanitize_field(exception.message),
            :"stack" => exception.backtrace&.join('\n'),
          }
        else
          { :"event" => "error", :"error.kind" => exception.class.to_s, :"error.object" => Labkit::Logging::Sanitizer.sanitize_field(exception.to_s) }
        end
      end
    end
  end
end
