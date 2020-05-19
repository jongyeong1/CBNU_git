# frozen_string_literal: true

module Labkit
  module Tracing
    module Rails
      # ActiveSupport bridges action active support notifications to
      # the distributed tracing subsystem
      class ActiveSupportSubscriber
        include RailsCommon

        COMPONENT_TAG = "ActiveSupport"

        CACHE_READ_TOPIC = "cache_read.active_support"
        CACHE_GENERATE_TOPIC = "cache_generate.active_support"
        CACHE_FETCH_HIT_TOPIC = "cache_fetch_hit.active_support"
        CACHE_WRITE_TOPIC = "cache_write.active_support"
        CACHE_DELETE_TOPIC = "cache_delete.active_support"

        # Instruments Rails ActiveSupport events for opentracing.
        # Returns a lambda, which, when called will unsubscribe from the notifications
        def self.instrument
          subscriber = new

          subscriptions = [
            ActiveSupport::Notifications.subscribe(CACHE_READ_TOPIC) do |_, start, finish, _, payload|
              subscriber.notify_cache_read(start, finish, payload)
            end,
            ActiveSupport::Notifications.subscribe(CACHE_GENERATE_TOPIC) do |_, start, finish, _, payload|
              subscriber.notify_cache_generate(start, finish, payload)
            end,
            ActiveSupport::Notifications.subscribe(CACHE_FETCH_HIT_TOPIC) do |_, start, finish, _, payload|
              subscriber.notify_cache_fetch_hit(start, finish, payload)
            end,
            ActiveSupport::Notifications.subscribe(CACHE_WRITE_TOPIC) do |_, start, finish, _, payload|
              subscriber.notify_cache_write(start, finish, payload)
            end,
            ActiveSupport::Notifications.subscribe(CACHE_DELETE_TOPIC) do |_, start, finish, _, payload|
              subscriber.notify_cache_delete(start, finish, payload)
            end,
          ]

          create_unsubscriber subscriptions
        end

        # For more information on the payloads: https://guides.rubyonrails.org/active_support_instrumentation.html#active-support
        def notify_cache_read(start, finish, payload)
          generate_span_for_notification("cache_read", start, finish, payload, tags_for_cache_read(payload))
        end

        def notify_cache_generate(start, finish, payload)
          generate_span_for_notification("cache_generate", start, finish, payload, tags_for_key(payload))
        end

        def notify_cache_fetch_hit(start, finish, payload)
          generate_span_for_notification("cache_fetch_hit", start, finish, payload, tags_for_key(payload))
        end

        def notify_cache_write(start, finish, payload)
          generate_span_for_notification("cache_write", start, finish, payload, tags_for_key(payload))
        end

        def notify_cache_delete(start, finish, payload)
          generate_span_for_notification("cache_delete", start, finish, payload, tags_for_key(payload))
        end

        private

        def tags_for_cache_read(payload)
          {
            "component" => COMPONENT_TAG,
            "cache.key" => payload[:key],
            "cache.hit" => payload[:hit],
            "cache.super_operation" => payload[:super_operation],
          }
        end

        def tags_for_key(payload)
          {
            "component" => COMPONENT_TAG,
            "cache.key" => payload[:key],
          }
        end
      end
    end
  end
end
