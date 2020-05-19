# frozen_string_literal: true

module Labkit
  module Tracing
    module Rails
      module ActionView
        # For more information on the payloads: https://guides.rubyonrails.org/active_support_instrumentation.html
        class RenderPartialInstrumenter < AbstractInstrumenter
          def span_name(payload)
            "render_partial"
          end

          def tags(payload)
            { "component" => COMPONENT_TAG, "template.id" => payload[:identifier] }
          end
        end
      end
    end
  end
end
