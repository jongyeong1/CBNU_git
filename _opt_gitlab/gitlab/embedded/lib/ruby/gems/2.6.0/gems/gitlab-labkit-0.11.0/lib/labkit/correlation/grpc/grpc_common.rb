# frozen_string_literal: true

module Labkit
  module Correlation
    module GRPC
      # This module is shared between the client and server interceptor middlewares.
      # It is not part of the public API
      module GRPCCommon
        CORRELATION_METADATA_KEY = "x-gitlab-correlation-id"
      end
    end
  end
end
