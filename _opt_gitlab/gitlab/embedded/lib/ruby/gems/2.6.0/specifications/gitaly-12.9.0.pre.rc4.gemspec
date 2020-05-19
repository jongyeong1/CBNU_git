# -*- encoding: utf-8 -*-
# stub: gitaly 12.9.0.pre.rc4 ruby ruby/proto

Gem::Specification.new do |s|
  s.name = "gitaly".freeze
  s.version = "12.9.0.pre.rc4"

  s.required_rubygems_version = Gem::Requirement.new("> 1.3.1".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["ruby/proto".freeze]
  s.authors = ["Jacob Vosmaer".freeze]
  s.date = "2020-03-13"
  s.description = "Auto-generated gRPC client for gitaly.".freeze
  s.email = ["jacob@gitlab.com".freeze]
  s.homepage = "https://gitlab.com/gitlab-org/gitaly".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.7.10".freeze
  s.summary = "Auto-generated gRPC client for gitaly".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<grpc>.freeze, ["~> 1.0"])
    else
      s.add_dependency(%q<grpc>.freeze, ["~> 1.0"])
    end
  else
    s.add_dependency(%q<grpc>.freeze, ["~> 1.0"])
  end
end
