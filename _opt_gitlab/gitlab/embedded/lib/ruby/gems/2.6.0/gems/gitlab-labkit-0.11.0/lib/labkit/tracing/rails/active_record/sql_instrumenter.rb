# frozen_string_literal: true

module Labkit
  module Tracing
    module Rails
      module ActiveRecord
        # For more information on the payloads: https://guides.rubyonrails.org/active_support_instrumentation.html
        class SqlInstrumenter < AbstractInstrumenter
          OPERATION_NAME_PREFIX = "active_record:"
          DEFAULT_OPERATION_NAME = "sqlquery"

          def span_name(payload)
            OPERATION_NAME_PREFIX + (payload[:name].presence || DEFAULT_OPERATION_NAME)
          end

          def tags(payload)
            {
              "component" => COMPONENT_TAG,
              "span.kind" => "client",
              "db.type" => "sql",
              "db.connection_id" => payload[:connection_id],
              "db.cached" => payload[:cached] || false,
              "db.statement" => payload[:sql],
            }
          end
        end
      end
    end
  end
end
