# frozen_string_literal: true

module Labkit
  module Tracing
    module Rails
      module ActionView
        # For more information on the payloads: https://guides.rubyonrails.org/active_support_instrumentation.html
        class RenderTemplateInstrumenter < AbstractInstrumenter
          def span_name(payload)
            "render_template"
          end

          def tags(payload)
            { "component" => COMPONENT_TAG, "template.id" => payload[:identifier], "template.layout" => payload[:layout] }
          end
        end
      end
    end
  end
end
