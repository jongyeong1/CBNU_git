# frozen_string_literal: true

module Labkit
  # A context can be used to provide structured information on what resources
  # GitLab is working on within a service.
  # The currently supported keys are defined in the `KNOWN_KEYS` constant.
  #
  # Values can be provided by passing a hash. If one of the values is a Proc
  # the proc will only be called when the value is actually needed.
  #
  # Multiple contexts can be nested, the nested context will inherit the values
  # from the closest outer one.
  # All contexts will have the same correlation id.
  #
  # Usage:
  #   Labkit::Context.with_context(user: 'username', root_namespace: -> { get_root_namespace } do |context|
  #     logger.info(context.to_h)
  #   end
  #
  class Context
    LOG_KEY = "meta"
    CORRELATION_ID_KEY = "correlation_id"
    RAW_KEYS = [CORRELATION_ID_KEY].freeze
    KNOWN_KEYS = %w[user project root_namespace subscription_plan caller_id].freeze

    class << self
      def with_context(attributes = {})
        context = push(attributes)

        begin
          yield(context)
        ensure
          pop(context)
        end
      end

      def push(new_attributes = {})
        new_context = current&.merge(new_attributes) || new(new_attributes)

        contexts.push(new_context)

        new_context
      end

      def pop(context)
        contexts.pop while contexts.include?(context)
      end

      def correlation_id
        contexts.last&.correlation_id
      end

      def current
        contexts.last
      end

      def log_key(key)
        key = key.to_s
        return key if RAW_KEYS.include?(key)
        return key if key.starts_with?("#{LOG_KEY}.")

        "#{LOG_KEY}.#{key}"
      end

      def known_log_keys
        @known_log_keys ||= (KNOWN_KEYS.map(&method(:log_key)) + RAW_KEYS).freeze
      end

      private

      def contexts
        Thread.current[:labkit_contexts] ||= []
      end
    end

    def initialize(values = {})
      @data = {}

      assign_attributes(values)
    end

    def merge(new_attributes)
      new_context = self.class.new(data.dup)
      new_context.assign_attributes(new_attributes)

      new_context
    end

    def to_h
      expand_data
    end

    def correlation_id
      data[CORRELATION_ID_KEY]
    end

    protected

    def assign_attributes(attributes)
      attributes = attributes.transform_keys(&method(:log_key))
      attributes = attributes.slice(*known_log_keys)

      data.merge!(attributes)

      # Remove keys that had their values set to `nil` in the new attributes
      data.keep_if { |_, value| value.present? }

      # Assign a correlation if it was missing in the first context or when
      # explicitly removed
      data[CORRELATION_ID_KEY] ||= new_id

      data
    end

    private

    delegate :log_key, :known_log_keys, to: :class

    attr_reader :data

    def expand_data
      data.transform_values do |value|
        value = value.respond_to?(:call) ? value.call : value

        value.presence
      end.compact
    end

    def new_id
      SecureRandom.hex
    end
  end
end
