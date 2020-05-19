# -*- encoding: utf-8 -*-
# stub: flipper-active_record 0.17.1 ruby lib

Gem::Specification.new do |s|
  s.name = "flipper-active_record".freeze
  s.version = "0.17.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "changelog_uri" => "https://github.com/jnunemaker/flipper/blob/master/Changelog.md" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["John Nunemaker".freeze]
  s.date = "2019-09-14"
  s.description = "ActiveRecord adapter for Flipper".freeze
  s.email = ["nunemaker@gmail.com".freeze]
  s.homepage = "https://github.com/jnunemaker/flipper".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.7.10".freeze
  s.summary = "ActiveRecord adapter for Flipper".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<flipper>.freeze, ["~> 0.17.1"])
      s.add_runtime_dependency(%q<activerecord>.freeze, [">= 4.2", "< 7"])
    else
      s.add_dependency(%q<flipper>.freeze, ["~> 0.17.1"])
      s.add_dependency(%q<activerecord>.freeze, [">= 4.2", "< 7"])
    end
  else
    s.add_dependency(%q<flipper>.freeze, ["~> 0.17.1"])
    s.add_dependency(%q<activerecord>.freeze, [">= 4.2", "< 7"])
  end
end
