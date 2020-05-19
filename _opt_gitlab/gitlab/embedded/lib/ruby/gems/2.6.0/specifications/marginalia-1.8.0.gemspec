# -*- encoding: utf-8 -*-
# stub: marginalia 1.8.0 ruby lib

Gem::Specification.new do |s|
  s.name = "marginalia".freeze
  s.version = "1.8.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Noah Lorang".freeze, "Nick Quaranto".freeze, "Taylor Weibley".freeze]
  s.date = "2019-03-25"
  s.description = "Attach comments to your ActiveRecord queries.".freeze
  s.email = ["noah@37signals.com".freeze, "arthurnn@github.com".freeze]
  s.homepage = "https://github.com/basecamp/marginalia".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.7.10".freeze
  s.summary = "Attach comments to your ActiveRecord queries.".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<actionpack>.freeze, [">= 2.3"])
      s.add_runtime_dependency(%q<activerecord>.freeze, [">= 2.3"])
      s.add_development_dependency(%q<rake>.freeze, [">= 0"])
      s.add_development_dependency(%q<mysql2>.freeze, [">= 0"])
      s.add_development_dependency(%q<pg>.freeze, [">= 0"])
      s.add_development_dependency(%q<sqlite3>.freeze, [">= 0"])
      s.add_development_dependency(%q<minitest>.freeze, [">= 0"])
      s.add_development_dependency(%q<mocha>.freeze, [">= 0"])
      s.add_development_dependency(%q<sidekiq>.freeze, [">= 0"])
    else
      s.add_dependency(%q<actionpack>.freeze, [">= 2.3"])
      s.add_dependency(%q<activerecord>.freeze, [">= 2.3"])
      s.add_dependency(%q<rake>.freeze, [">= 0"])
      s.add_dependency(%q<mysql2>.freeze, [">= 0"])
      s.add_dependency(%q<pg>.freeze, [">= 0"])
      s.add_dependency(%q<sqlite3>.freeze, [">= 0"])
      s.add_dependency(%q<minitest>.freeze, [">= 0"])
      s.add_dependency(%q<mocha>.freeze, [">= 0"])
      s.add_dependency(%q<sidekiq>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<actionpack>.freeze, [">= 2.3"])
    s.add_dependency(%q<activerecord>.freeze, [">= 2.3"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<mysql2>.freeze, [">= 0"])
    s.add_dependency(%q<pg>.freeze, [">= 0"])
    s.add_dependency(%q<sqlite3>.freeze, [">= 0"])
    s.add_dependency(%q<minitest>.freeze, [">= 0"])
    s.add_dependency(%q<mocha>.freeze, [">= 0"])
    s.add_dependency(%q<sidekiq>.freeze, [">= 0"])
  end
end
