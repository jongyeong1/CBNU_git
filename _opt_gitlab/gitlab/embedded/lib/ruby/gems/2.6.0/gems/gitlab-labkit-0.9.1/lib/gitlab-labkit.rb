# rubocop:disable Naming/FileName
# frozen_string_literal: true

require "active_support/all"

# LabKit is a module for handling cross-project
# infrastructural concerns, partcularly related to
# observability.
module Labkit
  autoload :Correlation, "labkit/correlation"
  autoload :Context, "labkit/context"
  autoload :Tracing, "labkit/tracing"
  autoload :Logging, "labkit/logging"
  autoload :Middleware, "labkit/middleware"
end

# rubocop:enable Naming/FileName
