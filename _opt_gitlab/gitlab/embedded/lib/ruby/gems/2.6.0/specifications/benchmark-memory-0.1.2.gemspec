# -*- encoding: utf-8 -*-
# stub: benchmark-memory 0.1.2 ruby lib

Gem::Specification.new do |s|
  s.name = "benchmark-memory".freeze
  s.version = "0.1.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Michael Herold".freeze]
  s.date = "2017-01-31"
  s.description = "Benchmark-style memory profiling for Ruby 2.1+".freeze
  s.email = ["michael.j.herold@gmail.com".freeze]
  s.homepage = "https://github.com/michaelherold/benchmark-memory".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.7.10".freeze
  s.summary = "Benchmark-style memory profiling for Ruby 2.1+".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<memory_profiler>.freeze, ["~> 0.9"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.12"])
    else
      s.add_dependency(%q<memory_profiler>.freeze, ["~> 0.9"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.12"])
    end
  else
    s.add_dependency(%q<memory_profiler>.freeze, ["~> 0.9"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.12"])
  end
end
