# -*- encoding: utf-8 -*-
# stub: gitlab-gollum-lib 4.2.7.8 ruby lib

Gem::Specification.new do |s|
  s.name = "gitlab-gollum-lib".freeze
  s.version = "4.2.7.8"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Tom Preston-Werner".freeze, "Rick Olson".freeze]
  s.date = "2020-02-26"
  s.description = "A simple, Git-powered wiki with a sweet API and local frontend.".freeze
  s.email = "dmitriy.zaporozhets@gmail.com".freeze
  s.extra_rdoc_files = ["README.md".freeze, "LICENSE".freeze]
  s.files = ["LICENSE".freeze, "README.md".freeze]
  s.homepage = "https://gitlab.com/gitlab-org/gollum-lib".freeze
  s.licenses = ["MIT".freeze]
  s.rdoc_options = ["--charset=UTF-8".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 1.9".freeze)
  s.rubygems_version = "2.7.10".freeze
  s.summary = "A simple, Git-powered wiki.".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 2

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<gitlab-gollum-rugged_adapter>.freeze, ["~> 0.4.4.2"])
      s.add_runtime_dependency(%q<rouge>.freeze, ["~> 3.1"])
      s.add_runtime_dependency(%q<nokogiri>.freeze, [">= 1.6.1", "< 2.0"])
      s.add_runtime_dependency(%q<stringex>.freeze, ["~> 2.6"])
      s.add_runtime_dependency(%q<sanitize>.freeze, ["~> 4.6.4"])
      s.add_runtime_dependency(%q<github-markup>.freeze, ["~> 1.6"])
      s.add_runtime_dependency(%q<gemojione>.freeze, ["~> 3.2"])
      s.add_development_dependency(%q<org-ruby>.freeze, ["~> 0.9.9"])
      s.add_development_dependency(%q<kramdown>.freeze, ["~> 1.6.0"])
      s.add_development_dependency(%q<RedCloth>.freeze, ["~> 4.2.9"])
      s.add_development_dependency(%q<mocha>.freeze, ["~> 1.1.0"])
      s.add_development_dependency(%q<shoulda>.freeze, ["~> 3.5.0"])
      s.add_development_dependency(%q<wikicloth>.freeze, ["= 0.8.1"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.4.0"])
      s.add_development_dependency(%q<pry>.freeze, ["~> 0.10.1"])
      s.add_development_dependency(%q<rb-readline>.freeze, ["~> 0.5.1"])
      s.add_development_dependency(%q<test-unit>.freeze, ["~> 3.1.5"])
      s.add_development_dependency(%q<minitest-reporters>.freeze, ["~> 0.14.16"])
      s.add_development_dependency(%q<nokogiri-diff>.freeze, ["~> 0.2.0"])
      s.add_development_dependency(%q<guard>.freeze, ["~> 2.8.2"])
      s.add_development_dependency(%q<guard-minitest>.freeze, ["~> 2.3.2"])
      s.add_development_dependency(%q<rb-inotify>.freeze, ["~> 0.9.3"])
      s.add_development_dependency(%q<rb-fsevent>.freeze, ["~> 0.9.4"])
      s.add_development_dependency(%q<rb-fchange>.freeze, ["~> 0.0.6"])
      s.add_development_dependency(%q<twitter_cldr>.freeze, ["~> 3.1.0"])
    else
      s.add_dependency(%q<gitlab-gollum-rugged_adapter>.freeze, ["~> 0.4.4.2"])
      s.add_dependency(%q<rouge>.freeze, ["~> 3.1"])
      s.add_dependency(%q<nokogiri>.freeze, [">= 1.6.1", "< 2.0"])
      s.add_dependency(%q<stringex>.freeze, ["~> 2.6"])
      s.add_dependency(%q<sanitize>.freeze, ["~> 4.6.4"])
      s.add_dependency(%q<github-markup>.freeze, ["~> 1.6"])
      s.add_dependency(%q<gemojione>.freeze, ["~> 3.2"])
      s.add_dependency(%q<org-ruby>.freeze, ["~> 0.9.9"])
      s.add_dependency(%q<kramdown>.freeze, ["~> 1.6.0"])
      s.add_dependency(%q<RedCloth>.freeze, ["~> 4.2.9"])
      s.add_dependency(%q<mocha>.freeze, ["~> 1.1.0"])
      s.add_dependency(%q<shoulda>.freeze, ["~> 3.5.0"])
      s.add_dependency(%q<wikicloth>.freeze, ["= 0.8.1"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.4.0"])
      s.add_dependency(%q<pry>.freeze, ["~> 0.10.1"])
      s.add_dependency(%q<rb-readline>.freeze, ["~> 0.5.1"])
      s.add_dependency(%q<test-unit>.freeze, ["~> 3.1.5"])
      s.add_dependency(%q<minitest-reporters>.freeze, ["~> 0.14.16"])
      s.add_dependency(%q<nokogiri-diff>.freeze, ["~> 0.2.0"])
      s.add_dependency(%q<guard>.freeze, ["~> 2.8.2"])
      s.add_dependency(%q<guard-minitest>.freeze, ["~> 2.3.2"])
      s.add_dependency(%q<rb-inotify>.freeze, ["~> 0.9.3"])
      s.add_dependency(%q<rb-fsevent>.freeze, ["~> 0.9.4"])
      s.add_dependency(%q<rb-fchange>.freeze, ["~> 0.0.6"])
      s.add_dependency(%q<twitter_cldr>.freeze, ["~> 3.1.0"])
    end
  else
    s.add_dependency(%q<gitlab-gollum-rugged_adapter>.freeze, ["~> 0.4.4.2"])
    s.add_dependency(%q<rouge>.freeze, ["~> 3.1"])
    s.add_dependency(%q<nokogiri>.freeze, [">= 1.6.1", "< 2.0"])
    s.add_dependency(%q<stringex>.freeze, ["~> 2.6"])
    s.add_dependency(%q<sanitize>.freeze, ["~> 4.6.4"])
    s.add_dependency(%q<github-markup>.freeze, ["~> 1.6"])
    s.add_dependency(%q<gemojione>.freeze, ["~> 3.2"])
    s.add_dependency(%q<org-ruby>.freeze, ["~> 0.9.9"])
    s.add_dependency(%q<kramdown>.freeze, ["~> 1.6.0"])
    s.add_dependency(%q<RedCloth>.freeze, ["~> 4.2.9"])
    s.add_dependency(%q<mocha>.freeze, ["~> 1.1.0"])
    s.add_dependency(%q<shoulda>.freeze, ["~> 3.5.0"])
    s.add_dependency(%q<wikicloth>.freeze, ["= 0.8.1"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.4.0"])
    s.add_dependency(%q<pry>.freeze, ["~> 0.10.1"])
    s.add_dependency(%q<rb-readline>.freeze, ["~> 0.5.1"])
    s.add_dependency(%q<test-unit>.freeze, ["~> 3.1.5"])
    s.add_dependency(%q<minitest-reporters>.freeze, ["~> 0.14.16"])
    s.add_dependency(%q<nokogiri-diff>.freeze, ["~> 0.2.0"])
    s.add_dependency(%q<guard>.freeze, ["~> 2.8.2"])
    s.add_dependency(%q<guard-minitest>.freeze, ["~> 2.3.2"])
    s.add_dependency(%q<rb-inotify>.freeze, ["~> 0.9.3"])
    s.add_dependency(%q<rb-fsevent>.freeze, ["~> 0.9.4"])
    s.add_dependency(%q<rb-fchange>.freeze, ["~> 0.0.6"])
    s.add_dependency(%q<twitter_cldr>.freeze, ["~> 3.1.0"])
  end
end
