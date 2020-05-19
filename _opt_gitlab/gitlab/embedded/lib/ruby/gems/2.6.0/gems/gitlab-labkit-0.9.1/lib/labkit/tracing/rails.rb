# frozen_string_literal: true

module Labkit
  module Tracing
    # Rails provides classes for instrumenting Rails events
    module Rails
      autoload :ActionViewSubscriber, "labkit/tracing/rails/action_view_subscriber"
      autoload :ActiveRecordSubscriber, "labkit/tracing/rails/active_record_subscriber"
      autoload :ActiveSupportSubscriber, "labkit/tracing/rails/active_support_subscriber"
      autoload :RailsCommon, "labkit/tracing/rails/rails_common"
    end
  end
end
