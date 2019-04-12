# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :yet,
  ecto_repos: [Yet.Repo]

# Configures the endpoint
config :yet, Yet.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "FbiXc/xS9q/1Yqa51UI6r3eqZuZQYgNuU4HaT8ovLhzeNvqOHf0MGP5VJD5/Ocl6",
  render_errors: [view: Yet.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Yet.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
