# frozen_string_literal: true

module Labkit
  module Tracing
    # Sidekiq provides classes for instrumenting Sidekiq client and server
    # functionality
    module Sidekiq
      autoload :ClientMiddleware, "labkit/tracing/sidekiq/client_middleware"
      autoload :ServerMiddleware, "labkit/tracing/sidekiq/server_middleware"
      autoload :SidekiqCommon, "labkit/tracing/sidekiq/sidekiq_common"
    end
  end
end
