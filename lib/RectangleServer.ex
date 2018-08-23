defmodule Rectanglus.RectangleServer do
  use Agent

  def start_link() do
    Agent.start_link(fn -> [] end, name: __MODULE__)
  end


  @doc "adds a rect to the list"
  def put_rect(rect) do
    Agent.get_and_update(__MODULE__, fn rects ->
      updated_rects = [rect|rects] |> Enum.take(200)
      {updated_rects, updated_rects}
    end)
  end

  @doc "gets all rectangles"
  def all_rect() do
    Agent.get(__MODULE__, fn rects ->
      rects
    end)
  end
end
