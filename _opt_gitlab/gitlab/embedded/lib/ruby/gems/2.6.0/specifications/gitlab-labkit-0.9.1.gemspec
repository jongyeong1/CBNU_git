# -*- encoding: utf-8 -*-
# stub: gitlab-labkit 0.9.1 ruby lib

Gem::Specification.new do |s|
  s.name = "gitlab-labkit".freeze
  s.version = "0.9.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "source_code_uri" => "https://gitlab.com/gitlab-org/labkit-ruby" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Andrew Newdigate".freeze]
  s.date = "2020-01-20"
  s.email = ["andrew@gitlab.com".freeze]
  s.homepage = "https://gitlab.com/gitlab-org/labkit-ruby".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.4.0".freeze)
  s.rubygems_version = "2.7.10".freeze
  s.summary = "Instrumentation for GitLab".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<actionpack>.freeze, [">= 5.0.0", "< 6.1.0"])
      s.add_runtime_dependency(%q<activesupport>.freeze, [">= 5.0.0", "< 6.1.0"])
      s.add_runtime_dependency(%q<grpc>.freeze, ["~> 1.19"])
      s.add_runtime_dependency(%q<jaeger-client>.freeze, ["~> 0.10"])
      s.add_runtime_dependency(%q<opentracing>.freeze, ["~> 0.4"])
      s.add_runtime_dependency(%q<redis>.freeze, ["> 3.0.0", "< 5.0.0"])
      s.add_development_dependency(%q<grpc-tools>.freeze, ["~> 1.19"])
      s.add_development_dependency(%q<pry>.freeze, ["~> 0.12"])
      s.add_development_dependency(%q<rack>.freeze, ["~> 2.0"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 12.3"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 3.8.0"])
      s.add_development_dependency(%q<rspec-parameterized>.freeze, ["~> 0.4"])
      s.add_development_dependency(%q<rubocop>.freeze, ["~> 0.65.0"])
      s.add_development_dependency(%q<rubocop-rspec>.freeze, ["~> 1.22.1"])
      s.add_development_dependency(%q<rufo>.freeze, ["= 0.9.0"])
      s.add_development_dependency(%q<sidekiq>.freeze, ["~> 5.2.7"])
    else
      s.add_dependency(%q<actionpack>.freeze, [">= 5.0.0", "< 6.1.0"])
      s.add_dependency(%q<activesupport>.freeze, [">= 5.0.0", "< 6.1.0"])
      s.add_dependency(%q<grpc>.freeze, ["~> 1.19"])
      s.add_dependency(%q<jaeger-client>.freeze, ["~> 0.10"])
      s.add_dependency(%q<opentracing>.freeze, ["~> 0.4"])
      s.add_dependency(%q<redis>.freeze, ["> 3.0.0", "< 5.0.0"])
      s.add_dependency(%q<grpc-tools>.freeze, ["~> 1.19"])
      s.add_dependency(%q<pry>.freeze, ["~> 0.12"])
      s.add_dependency(%q<rack>.freeze, ["~> 2.0"])
      s.add_dependency(%q<rake>.freeze, ["~> 12.3"])
      s.add_dependency(%q<rspec>.freeze, ["~> 3.8.0"])
      s.add_dependency(%q<rspec-parameterized>.freeze, ["~> 0.4"])
      s.add_dependency(%q<rubocop>.freeze, ["~> 0.65.0"])
      s.add_dependency(%q<rubocop-rspec>.freeze, ["~> 1.22.1"])
      s.add_dependency(%q<rufo>.freeze, ["= 0.9.0"])
      s.add_dependency(%q<sidekiq>.freeze, ["~> 5.2.7"])
    end
  else
    s.add_dependency(%q<actionpack>.freeze, [">= 5.0.0", "< 6.1.0"])
    s.add_dependency(%q<activesupport>.freeze, [">= 5.0.0", "< 6.1.0"])
    s.add_dependency(%q<grpc>.freeze, ["~> 1.19"])
    s.add_dependency(%q<jaeger-client>.freeze, ["~> 0.10"])
    s.add_dependency(%q<opentracing>.freeze, ["~> 0.4"])
    s.add_dependency(%q<redis>.freeze, ["> 3.0.0", "< 5.0.0"])
    s.add_dependency(%q<grpc-tools>.freeze, ["~> 1.19"])
    s.add_dependency(%q<pry>.freeze, ["~> 0.12"])
    s.add_dependency(%q<rack>.freeze, ["~> 2.0"])
    s.add_dependency(%q<rake>.freeze, ["~> 12.3"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.8.0"])
    s.add_dependency(%q<rspec-parameterized>.freeze, ["~> 0.4"])
    s.add_dependency(%q<rubocop>.freeze, ["~> 0.65.0"])
    s.add_dependency(%q<rubocop-rspec>.freeze, ["~> 1.22.1"])
    s.add_dependency(%q<rufo>.freeze, ["= 0.9.0"])
    s.add_dependency(%q<sidekiq>.freeze, ["~> 5.2.7"])
  end
end
