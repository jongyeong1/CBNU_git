# -*- encoding: utf-8 -*-
# stub: snowplow-tracker 0.6.1 ruby lib

Gem::Specification.new do |s|
  s.name = "snowplow-tracker".freeze
  s.version = "0.6.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Alexander Dean".freeze, "Fred Blundun".freeze]
  s.date = "2016-12-26"
  s.description = "With this tracker you can collect event data from your Ruby applications, Ruby on Rails web applications and Ruby gems.".freeze
  s.email = "support@snowplowanalytics.com".freeze
  s.homepage = "http://github.com/snowplow/snowplow-ruby-tracker".freeze
  s.licenses = ["Apache License 2.0".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.0.0".freeze)
  s.rubygems_version = "2.7.10".freeze
  s.summary = "Ruby Analytics for Snowplow".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<contracts>.freeze, ["~> 0.7", "<= 0.11"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 2.14.1"])
      s.add_development_dependency(%q<webmock>.freeze, ["~> 1.17.4"])
    else
      s.add_dependency(%q<contracts>.freeze, ["~> 0.7", "<= 0.11"])
      s.add_dependency(%q<rspec>.freeze, ["~> 2.14.1"])
      s.add_dependency(%q<webmock>.freeze, ["~> 1.17.4"])
    end
  else
    s.add_dependency(%q<contracts>.freeze, ["~> 0.7", "<= 0.11"])
    s.add_dependency(%q<rspec>.freeze, ["~> 2.14.1"])
    s.add_dependency(%q<webmock>.freeze, ["~> 1.17.4"])
  end
end
