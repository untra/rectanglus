defmodule Mix.RectangleServer do
  alias TodoApp.Rectangle
  use Agent
  @MAX_RECTS 200

  def start_link(_) do
    Agent.start_link(fn -> [] end, name: __MODULE__)
  end


  @doc "adds a rect to the list"
  def put_rect(rect) do
    Agent.update(__MODULE__, fn rects ->
      [rect|rects] |> Enum.take(@MAX_RECTS)
    end)
  end

  @doc "gets all rectangles"
  def all_rect() do
    Agent.get(__MODULE__, fn rects ->
      rects
    end)
  end
end
