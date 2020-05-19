# frozen_string_literal: true

require "opentracing"

module Labkit
  module Tracing
    module Sidekiq
      # ClientMiddleware provides a sidekiq client middleware for
      # instrumenting distributed tracing calls made from the client
      # application
      class ClientMiddleware
        include SidekiqCommon

        SPAN_KIND = "client"

        def call(_worker_class, job, _queue, _redis_pool)
          TracingUtils.with_tracing(operation_name: "sidekiq:#{job["class"]}", tags: tags_from_job(job, SPAN_KIND)) do |span|
            # Inject the details directly into the job
            TracingUtils.tracer.inject(span.context, OpenTracing::FORMAT_TEXT_MAP, job)

            yield
          end
        end
      end
    end
  end
end
