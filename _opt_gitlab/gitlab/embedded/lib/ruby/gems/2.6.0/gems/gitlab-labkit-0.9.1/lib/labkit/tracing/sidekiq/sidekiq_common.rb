# frozen_string_literal: true

module Labkit
  module Tracing
    module Sidekiq
      # SidekiqCommon is a mixin for the sidekiq middleware components
      module SidekiqCommon
        def tags_from_job(job, kind)
          {
            "component" => "sidekiq",
            "span.kind" => kind,
            "sidekiq.queue" => job["queue"],
            "sidekiq.jid" => job["jid"],
            "sidekiq.retry" => job["retry"].to_s,
            "sidekiq.args" => job["args"]&.join(", "),
          }
        end
      end
    end
  end
end
