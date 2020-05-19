# frozen_string_literal: true

module Labkit
  module Middleware
    module Sidekiq
      # This middleware for Sidekiq-client uses the values stored on a job to
      # reinstantiate a context in which the job will run.
      class Server
        def call(_worker_class, job, _queue)
          data = job.merge(Labkit::Context.log_key(:caller_id) => job["class"])

          Labkit::Context.with_context(data) do |_context|
            yield
          end
        end
      end
    end
  end
end
