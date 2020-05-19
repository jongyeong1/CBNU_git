# -*- encoding: utf-8 -*-
# stub: gitlab-exporter 6.1.0 ruby lib

Gem::Specification.new do |s|
  s.name = "gitlab-exporter".freeze
  s.version = "6.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Pablo Carranza".freeze]
  s.date = "2016-07-27"
  s.description = "GitLab metrics exporter to use with prometheus".freeze
  s.email = "pablo@gitlab.com".freeze
  s.executables = ["gitlab-exporter".freeze]
  s.files = ["bin/gitlab-exporter".freeze]
  s.homepage = "http://gitlab.com".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.7.10".freeze
  s.summary = "GitLab metrics exporter".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<pg>.freeze, ["~> 1.1"])
      s.add_runtime_dependency(%q<sinatra>.freeze, ["~> 2.0.4"])
      s.add_runtime_dependency(%q<quantile>.freeze, ["~> 0.2.0"])
      s.add_runtime_dependency(%q<sidekiq>.freeze, ["~> 5.2.1"])
      s.add_runtime_dependency(%q<redis>.freeze, ["~> 4.1.2"])
      s.add_runtime_dependency(%q<redis-namespace>.freeze, ["~> 1.6.0"])
      s.add_runtime_dependency(%q<connection_pool>.freeze, ["~> 2.2.1"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 3.7.0"])
      s.add_development_dependency(%q<rspec-expectations>.freeze, ["~> 3.7.0"])
    else
      s.add_dependency(%q<pg>.freeze, ["~> 1.1"])
      s.add_dependency(%q<sinatra>.freeze, ["~> 2.0.4"])
      s.add_dependency(%q<quantile>.freeze, ["~> 0.2.0"])
      s.add_dependency(%q<sidekiq>.freeze, ["~> 5.2.1"])
      s.add_dependency(%q<redis>.freeze, ["~> 4.1.2"])
      s.add_dependency(%q<redis-namespace>.freeze, ["~> 1.6.0"])
      s.add_dependency(%q<connection_pool>.freeze, ["~> 2.2.1"])
      s.add_dependency(%q<rspec>.freeze, ["~> 3.7.0"])
      s.add_dependency(%q<rspec-expectations>.freeze, ["~> 3.7.0"])
    end
  else
    s.add_dependency(%q<pg>.freeze, ["~> 1.1"])
    s.add_dependency(%q<sinatra>.freeze, ["~> 2.0.4"])
    s.add_dependency(%q<quantile>.freeze, ["~> 0.2.0"])
    s.add_dependency(%q<sidekiq>.freeze, ["~> 5.2.1"])
    s.add_dependency(%q<redis>.freeze, ["~> 4.1.2"])
    s.add_dependency(%q<redis-namespace>.freeze, ["~> 1.6.0"])
    s.add_dependency(%q<connection_pool>.freeze, ["~> 2.2.1"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.7.0"])
    s.add_dependency(%q<rspec-expectations>.freeze, ["~> 3.7.0"])
  end
end
