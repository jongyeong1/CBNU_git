# -*- encoding: utf-8 -*-
# stub: asciidoctor-include-ext 0.3.1 ruby lib

Gem::Specification.new do |s|
  s.name = "asciidoctor-include-ext".freeze
  s.version = "0.3.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Jakub Jirutka".freeze]
  s.date = "2019-04-14"
  s.description = "This is a reimplementation of the Asciidoctor's built-in (pre)processor for the\ninclude::[] directive in extensible and more clean way. It provides the same\nfeatures, but you can easily adjust it or extend for your needs. For example,\nyou can change how it loads included files or add another ways how to select\nportions of the document to include.\n".freeze
  s.email = "jakub@jirutka.cz".freeze
  s.homepage = "https://github.com/jirutka/asciidoctor-include-ext".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.1".freeze)
  s.rubygems_version = "2.7.10".freeze
  s.summary = "Asciidoctor's standard include::[] processor reimplemented as an extension".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<asciidoctor>.freeze, [">= 1.5.6", "< 3.0.0"])
      s.add_development_dependency(%q<corefines>.freeze, ["~> 1.11"])
      s.add_development_dependency(%q<kramdown>.freeze, ["~> 1.16"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 12.0"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 3.7"])
      s.add_development_dependency(%q<rubocop>.freeze, ["~> 0.51.0"])
      s.add_development_dependency(%q<simplecov>.freeze, ["~> 0.15"])
      s.add_development_dependency(%q<yard>.freeze, ["~> 0.9"])
    else
      s.add_dependency(%q<asciidoctor>.freeze, [">= 1.5.6", "< 3.0.0"])
      s.add_dependency(%q<corefines>.freeze, ["~> 1.11"])
      s.add_dependency(%q<kramdown>.freeze, ["~> 1.16"])
      s.add_dependency(%q<rake>.freeze, ["~> 12.0"])
      s.add_dependency(%q<rspec>.freeze, ["~> 3.7"])
      s.add_dependency(%q<rubocop>.freeze, ["~> 0.51.0"])
      s.add_dependency(%q<simplecov>.freeze, ["~> 0.15"])
      s.add_dependency(%q<yard>.freeze, ["~> 0.9"])
    end
  else
    s.add_dependency(%q<asciidoctor>.freeze, [">= 1.5.6", "< 3.0.0"])
    s.add_dependency(%q<corefines>.freeze, ["~> 1.11"])
    s.add_dependency(%q<kramdown>.freeze, ["~> 1.16"])
    s.add_dependency(%q<rake>.freeze, ["~> 12.0"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.7"])
    s.add_dependency(%q<rubocop>.freeze, ["~> 0.51.0"])
    s.add_dependency(%q<simplecov>.freeze, ["~> 0.15"])
    s.add_dependency(%q<yard>.freeze, ["~> 0.9"])
  end
end
