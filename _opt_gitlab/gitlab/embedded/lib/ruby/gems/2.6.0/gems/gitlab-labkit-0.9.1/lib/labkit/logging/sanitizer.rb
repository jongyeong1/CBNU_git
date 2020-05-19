# frozen_string_literal: true

module Labkit
  module Logging
    # Sanitizer provides log message sanitization, removing
    # confidential information from log messages
    class Sanitizer
      SCP_URL_REGEXP = %r{
        (?:((?:[\-_.!~*()a-zA-Z\d;&=+$,]|%[a-fA-F\d]{2})+)(:(?:(?:[\-_.!~*()a-zA-Z\d;:&=+$,]|%[a-fA-F\d]{2})*))?@)        (?# 1: username, 2: password)
        (?:((?:(?:[a-zA-Z0-9\-._])+|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[(?:(?:[a-fA-F\d]{1,4}:)*(?:[a-fA-F\d]{1,4}|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(?:(?:[a-fA-F\d]{1,4}:)*[a-fA-F\d]{1,4})?::(?:(?:[a-fA-F\d]{1,4}:)*(?:[a-fA-F\d]{1,4}|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}))?)\]))) (?# 3: host)
        :
        ((?:[\-_.!~*'()a-zA-Z\d:@&=+$,]|%[a-fA-F\d]{2})*(?:;(?:[\-_.!~*'()a-zA-Z\d:@&=+$,]|%[a-fA-F\d]{2})*)*(?:\/(?:[\-_.!~*'()a-zA-Z\d:@&=+$,]|%[a-fA-F\d]{2})*(?:;(?:[\-_.!~*'()a-zA-Z\d:@&=+$,]|%[a-fA-F\d]{2})*)*)*)? (?# 4: path)
        }x.freeze
      SCP_ANCHORED_URL_REGEXP = /^#{SCP_URL_REGEXP}$/x.freeze
      ALLOWED_SCHEMES = %w[http https ssh git].freeze
      URL_REGEXP = URI::DEFAULT_PARSER.make_regexp(ALLOWED_SCHEMES).freeze

      def self.sanitize_field(content)
        content = content.gsub(URL_REGEXP) { |url| mask_url(url) }
        content = content.gsub(SCP_URL_REGEXP) { |scp_url| mask_scp_url(scp_url) }

        content
      end

      # Ensures that URLS are sanitized to hide credentials
      def self.mask_url(url)
        url = url.to_s.strip
        p = URI::DEFAULT_PARSER.parse(url)

        p.password = "*****" if p.password.present?
        p.user = "*****" if p.user.present?
        p.to_s
      rescue URI::InvalidURIError
        ""
      end

      # Ensures that URLs of the form user:password@hostname:project.git are
      # sanitized to hide credentials
      def self.mask_scp_url(scp_url)
        scp_url = scp_url.to_s.strip
        m = SCP_ANCHORED_URL_REGEXP.match(scp_url)
        return "" unless m

        password = m[2]
        host = m[3]
        path = m[4]

        return "*****@#{host}:#{path}" unless password.present?

        "*****:*****@#{host}:#{path}"
      end
    end
  end
end
