defmodule Rectanglus.RectangleHandler do
  alias Rectanglus.{Entity, Rectangle, RectangleServer}

  use Entity.BaseHandler

  import Rectanglus.RectangleView, only: [render: 2]


  # REST Handlers

  def index(req, _user, _params) do
    rectangles = RectangleServer.all_rect()
    req
    |> set_body(render(:index, rectangles: rectangles))
    |> reply(200)
  end

  def update(req, _user, params) do
    body = params.body
    rectangle = %Rectangle{x0: body["x0"], y0: body["y0"], x1: body["x1"], y1: body["y1"]}
    rectangles = RectangleServer.put_rect(rectangle)
    req
    |> set_body(render(:index, rectangles: rectangles))
    |> reply(200)
  end
end
