defmodule TodoApp.RectangleHandler do
  alias TodoApp.{Entity, Rectangle, RectangleServer}

  use Entity.BaseHandler

  import TodoApp.RectangleView, only: [render: 2]


  # REST Handlers

  def index(req, _user, _params) do
    IO.inspect fn ->  "NOISE!" end
    rectangles = RectangleServer.all_rect()
    req
    |> set_body(render(:show, rectangles: rectangles))
    |> reply(200)
  end

  def update(req, _user, params) do
    rectangle = %Rectangle{x0: params[:x0], y0: params[:y0], x1: params[:x1], y1: params[:y1]}
    rectangles = RectangleServer.put_rect(rectangle)
    req
    |> set_body(render(:show, rectangles: rectangles))
    |> reply(200)
  end
end
