# -*- encoding: utf-8 -*-
# stub: em-resolv-replace 1.1.3 ruby lib

Gem::Specification.new do |s|
  s.name = "em-resolv-replace".freeze
  s.version = "1.1.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Mike Perham".freeze]
  s.date = "2012-07-17"
  s.email = "mperham@gmail.com".freeze
  s.extra_rdoc_files = ["LICENSE".freeze, "History.rdoc".freeze, "README.rdoc".freeze]
  s.files = ["History.rdoc".freeze, "LICENSE".freeze, "README.rdoc".freeze]
  s.homepage = "http://github.com/mperham/em-resolv-replace".freeze
  s.rdoc_options = ["--charset=UTF-8".freeze]
  s.rubygems_version = "2.7.10".freeze
  s.summary = "EventMachine-aware DNS lookup for Ruby".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<shoulda>.freeze, [">= 0"])
      s.add_development_dependency(%q<mocha>.freeze, [">= 0"])
    else
      s.add_dependency(%q<shoulda>.freeze, [">= 0"])
      s.add_dependency(%q<mocha>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<shoulda>.freeze, [">= 0"])
    s.add_dependency(%q<mocha>.freeze, [">= 0"])
  end
end
