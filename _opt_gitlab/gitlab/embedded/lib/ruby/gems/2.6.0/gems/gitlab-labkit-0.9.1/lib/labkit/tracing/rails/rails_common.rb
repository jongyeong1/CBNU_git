# frozen_string_literal: true

require "active_support/all"

module Labkit
  module Tracing
    module Rails
      # RailsCommon is a mixin for providing instrumentation
      # functionality for the rails instrumentation classes
      module RailsCommon
        extend ActiveSupport::Concern

        class_methods do
          def create_unsubscriber(subscriptions)
            -> { subscriptions.each { |subscriber| ActiveSupport::Notifications.unsubscribe(subscriber) } }
          end
        end

        def generate_span_for_notification(operation_name, start, finish, payload, tags)
          exception = payload[:exception]

          TracingUtils.postnotify_span(operation_name, start, finish, tags: tags, exception: exception)
        end
      end
    end
  end
end
