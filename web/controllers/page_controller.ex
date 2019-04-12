defmodule Yet.PageController do
  use Yet.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
