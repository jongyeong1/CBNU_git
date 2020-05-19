# frozen_string_literal: true

module Labkit
  module Tracing
    module Rails
      module ActionView
        autoload :RenderCollectionInstrumenter, "labkit/tracing/rails/action_view/render_collection_instrumenter"
        autoload :RenderPartialInstrumenter, "labkit/tracing/rails/action_view/render_partial_instrumenter"
        autoload :RenderTemplateInstrumenter, "labkit/tracing/rails/action_view/render_template_instrumenter"
        autoload :Subscriber, "labkit/tracing/rails/action_view/subscriber"

        COMPONENT_TAG = "ActionView"
      end
    end
  end
end
