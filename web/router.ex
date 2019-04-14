defmodule Yet.Router do
  use Yet.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Yet do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/blogs", PageController, :index
    post "/blogs", PageController, :create
    get "/blogs/:id", PageController, :show
  end

  # Other scopes may use custom stacks.
  # scope "/api", Yet do
  #   pipe_through :api
  # end
end
