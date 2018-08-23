defmodule TodoApp.RectangleView do
  use TodoApp.BaseView

  def render(:index, %{rectangles: rectangles}) do
    %{
      data: Enum.map(rectangles, & render(:rectangle, %{rectangle: &1}))
    }
  end
  def render(:show, %{rectangles: rectangles}) do
    %{
      data: render(:rectangle, %{rectangles: rectangles})
    }
  end
  def render(:rectangle, %{rectangle: rectangle}) do
    %{
      x0: rectangle.x0,
      y0: rectangle.y0,
      x1: rectangle.x1,
      y1: rectangle.y1,
      r: rectangle.r,
      g: rectangle.g,
      b: rectangle.b
    }
  end
end
