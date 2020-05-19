# -*- encoding: utf-8 -*-
# stub: servolux 0.10.0 ruby lib

Gem::Specification.new do |s|
  s.name = "servolux".freeze
  s.version = "0.10.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Tim Pease".freeze]
  s.date = "2012-02-18"
  s.description = "Serv-O-Lux is a collection of Ruby classes that are useful for daemon and\nprocess management, and for writing your own Ruby services. The code is well\ndocumented and tested. It works with Ruby and JRuby supporting both 1.8 and 1.9\ninterpreters.".freeze
  s.email = "tim.pease@gmail.com".freeze
  s.extra_rdoc_files = ["History.txt".freeze, "README.rdoc".freeze]
  s.files = ["History.txt".freeze, "README.rdoc".freeze]
  s.homepage = "http://gemcutter.org/gems/servolux".freeze
  s.rdoc_options = ["--main".freeze, "README.rdoc".freeze]
  s.rubyforge_project = "servolux".freeze
  s.rubygems_version = "2.7.10".freeze
  s.summary = "* {Homepage}[http://rubygems.".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<bones-rspec>.freeze, [">= 2.0.1"])
      s.add_development_dependency(%q<bones-git>.freeze, [">= 1.2.5"])
      s.add_development_dependency(%q<logging>.freeze, [">= 1.6.2"])
      s.add_development_dependency(%q<bones>.freeze, [">= 3.7.2"])
    else
      s.add_dependency(%q<bones-rspec>.freeze, [">= 2.0.1"])
      s.add_dependency(%q<bones-git>.freeze, [">= 1.2.5"])
      s.add_dependency(%q<logging>.freeze, [">= 1.6.2"])
      s.add_dependency(%q<bones>.freeze, [">= 3.7.2"])
    end
  else
    s.add_dependency(%q<bones-rspec>.freeze, [">= 2.0.1"])
    s.add_dependency(%q<bones-git>.freeze, [">= 1.2.5"])
    s.add_dependency(%q<logging>.freeze, [">= 1.6.2"])
    s.add_dependency(%q<bones>.freeze, [">= 3.7.2"])
  end
end
