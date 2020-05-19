# -*- encoding: utf-8 -*-
# stub: gitlab-gollum-rugged_adapter 0.4.4.2 ruby lib

Gem::Specification.new do |s|
  s.name = "gitlab-gollum-rugged_adapter".freeze
  s.version = "0.4.4.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Bart Kamphorst, Dawa Ometto".freeze]
  s.date = "2019-03-06"
  s.description = "Adapter for Gollum to use Rugged (libgit2) at the backend.".freeze
  s.email = ["fjlopez@gitlab.com".freeze]
  s.homepage = "https://gitlab.com/gitlab-org/gitlab-gollum-rugged_adapter".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.7.10".freeze
  s.summary = "Adapter for Gollum to use Rugged (libgit2) at the backend.".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rugged>.freeze, ["~> 0.25"])
      s.add_runtime_dependency(%q<mime-types>.freeze, [">= 1.15"])
      s.add_development_dependency(%q<rspec>.freeze, ["= 3.4.0"])
    else
      s.add_dependency(%q<rugged>.freeze, ["~> 0.25"])
      s.add_dependency(%q<mime-types>.freeze, [">= 1.15"])
      s.add_dependency(%q<rspec>.freeze, ["= 3.4.0"])
    end
  else
    s.add_dependency(%q<rugged>.freeze, ["~> 0.25"])
    s.add_dependency(%q<mime-types>.freeze, [">= 1.15"])
    s.add_dependency(%q<rspec>.freeze, ["= 3.4.0"])
  end
end
