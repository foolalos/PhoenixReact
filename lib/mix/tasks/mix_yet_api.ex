defmodule Mix.Tasks.MixYetApi do

  use Mix.Task

  def run(_) do
    Yet.bitcoin
  end

end
