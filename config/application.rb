require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module Autofocus
  class Application < Rails::Application
    config.load_defaults 8.0

    config.autoload_lib(ignore: %w[assets tasks])

    config.time_zone = 'UTC'

    config.filter_parameters += [
      :passw, :email, :secret, :token, :_key, :crypt, :salt, :certificate, :otp, :ssn
    ]
  end
end
