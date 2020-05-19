# -*- encoding: utf-8 -*-
# stub: unleash 0.1.5 ruby lib

Gem::Specification.new do |s|
  s.name = "unleash".freeze
  s.version = "0.1.5"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Renato Arruda".freeze]
  s.bindir = "exe".freeze
  s.date = "2019-01-04"
  s.description = "This is the ruby client for Unleash, a powerful feature toggle system\n    that gives you a great overview over all feature toggles across all your applications and services.".freeze
  s.email = ["rarruda@rarruda.org".freeze]
  s.homepage = "https://github.com/unleash/unleash-client-ruby".freeze
  s.licenses = ["Apache-2.0".freeze]
  s.required_ruby_version = Gem::Requirement.new("~> 2.2".freeze)
  s.rubygems_version = "2.7.10".freeze
  s.summary = "Unleash feature toggle client.".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<murmurhash3>.freeze, ["~> 0.1.6"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 2.0"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 3.0"])
      s.add_development_dependency(%q<webmock>.freeze, ["~> 3.0"])
      s.add_development_dependency(%q<coveralls>.freeze, [">= 0"])
    else
      s.add_dependency(%q<murmurhash3>.freeze, ["~> 0.1.6"])
      s.add_dependency(%q<bundler>.freeze, ["~> 2.0"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
      s.add_dependency(%q<webmock>.freeze, ["~> 3.0"])
      s.add_dependency(%q<coveralls>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<murmurhash3>.freeze, ["~> 0.1.6"])
    s.add_dependency(%q<bundler>.freeze, ["~> 2.0"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
    s.add_dependency(%q<webmock>.freeze, ["~> 3.0"])
    s.add_dependency(%q<coveralls>.freeze, [">= 0"])
  end
end
