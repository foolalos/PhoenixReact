defmodule Yet do

  def bitcoin do
    HTTPotion.start

    request("https://api.coinmarketcap.com/v1/ticker/bitcoin/")
    |> body
    |> parse_body_to_tuple
    |> get_list_per_tuple
    |> get_map_to_list
    |> create_message
    |> show_message
  end

  def request(url) do
    HTTPotion.get url
  end

  def body(response) do
    response.body
  end

  def parse_body_to_tuple(body) do
    Poison.Parser.parse body
  end

  def get_list_per_tuple(tuple) do
    elem(tuple, 1)
  end

  def get_map_to_list(list) do
    list |> Enum.at 0
  end

  def create_message(map) do
    "> #{map["name"]} #{map["symbol"]} tiene un precio actual de #{map["price_usd"]}"
  end

  def show_message(message) do
    IO.puts message
  end

end
