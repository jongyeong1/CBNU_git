# -*- encoding: utf-8 -*-
# stub: gitlab-chronic 0.10.5 ruby lib

Gem::Specification.new do |s|
  s.name = "gitlab-chronic".freeze
  s.version = "0.10.5"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Tom Preston-Werner".freeze, "Lee Jarvis".freeze]
  s.date = "2019-11-25"
  s.description = "Chronic is a natural language date/time parser written in pure Ruby.".freeze
  s.email = ["tom@mojombo.com".freeze, "ljjarvis@gmail.com".freeze]
  s.extra_rdoc_files = ["README.md".freeze, "HISTORY.md".freeze, "LICENSE".freeze]
  s.files = ["HISTORY.md".freeze, "LICENSE".freeze, "README.md".freeze]
  s.homepage = "https://gitlab.com/gitlab-org/gitlab-chronic".freeze
  s.licenses = ["MIT".freeze]
  s.rdoc_options = ["--charset=UTF-8".freeze]
  s.rubygems_version = "2.7.10".freeze
  s.summary = "Natural language date/time parsing.".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<numerizer>.freeze, ["~> 0.2"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10"])
      s.add_development_dependency(%q<simplecov>.freeze, ["~> 0"])
      s.add_development_dependency(%q<minitest>.freeze, ["~> 5.0"])
      s.add_development_dependency(%q<activesupport>.freeze, ["~> 4"])
    else
      s.add_dependency(%q<numerizer>.freeze, ["~> 0.2"])
      s.add_dependency(%q<rake>.freeze, ["~> 10"])
      s.add_dependency(%q<simplecov>.freeze, ["~> 0"])
      s.add_dependency(%q<minitest>.freeze, ["~> 5.0"])
      s.add_dependency(%q<activesupport>.freeze, ["~> 4"])
    end
  else
    s.add_dependency(%q<numerizer>.freeze, ["~> 0.2"])
    s.add_dependency(%q<rake>.freeze, ["~> 10"])
    s.add_dependency(%q<simplecov>.freeze, ["~> 0"])
    s.add_dependency(%q<minitest>.freeze, ["~> 5.0"])
    s.add_dependency(%q<activesupport>.freeze, ["~> 4"])
  end
end
