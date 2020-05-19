# frozen_string_literal: true

module Labkit
  module Tracing
    module Rails
      module ActionView
        # For more information on the payloads: https://guides.rubyonrails.org/active_support_instrumentation.html
        class RenderCollectionInstrumenter < AbstractInstrumenter
          def span_name(payload)
            "render_collection"
          end

          def tags(payload)
            {
              "component" => COMPONENT_TAG,
              "template.id" => payload[:identifier],
              "template.count" => payload[:count] || 0,
              "template.cache.hits" => payload[:cache_hits] || 0,
            }
          end
        end
      end
    end
  end
end
