# -*- encoding: utf-8 -*-
# stub: omniauth-ultraauth 0.0.2 ruby lib

Gem::Specification.new do |s|
  s.name = "omniauth-ultraauth".freeze
  s.version = "0.0.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Kartikey Tanna".freeze]
  s.bindir = "exe".freeze
  s.date = "2019-05-02"
  s.description = "Eliminate customer phishing / hijacking and increase user satisfaction with password-less authentication.".freeze
  s.email = ["tannakartikey@gmail.com".freeze]
  s.homepage = "https://ultraauth.com".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.7.10".freeze
  s.summary = "Omniauth strategy for UltraAuth.".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<omniauth_openid_connect>.freeze, ["~> 0.3.0"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.17"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 3.0"])
    else
      s.add_dependency(%q<omniauth_openid_connect>.freeze, ["~> 0.3.0"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.17"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
    end
  else
    s.add_dependency(%q<omniauth_openid_connect>.freeze, ["~> 0.3.0"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.17"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
  end
end
