# frozen_string_literal: true

module Labkit
  module Middleware
    module Sidekiq
      module Context
        # This middleware for Sidekiq-client wraps scheduling jobs in a context
        # The context will also be added to the sidekiq job in redis so it can
        # be reinstantiated by Sidekiq-server when running the job.
        class Client
          def call(_worker_class, job, _queue, _redis_pool)
            Labkit::Context.with_context do |context|
              job.merge!(context.to_h)

              yield
            end
          end
        end
      end
    end
  end
end
