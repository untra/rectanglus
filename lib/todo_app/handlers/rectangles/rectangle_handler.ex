defmodule TodoApp.CommentHandler do
  alias TodoApp.{Rectangle}

  use Entity.BaseHandler
  use Authorization.BaseHandler

  import TodoApp.CommentView, only: [render: 2]

  recs = []

  # REST Handlers

  def index(req, user, params) do
    rectangles = recs
    req
    |> set_body(render(:show, rectangles: rectangles))
    |> reply(200)
    end
  end

  def update(req, user, params) do
    rectangle = %Rectangle{x0: params[:x0], y0: params[:y0], x1: params[:x1], y1: params[:y1]}
    query =
      user
      |> assoc(:todos)
      |> Repo.get(params[:todo_id])
      |> assoc(:comments)

    case Repo.get(query, params[:comment_id]) do
      %Comment{} = comment ->
        changeset = Comment.changeset(comment, params[:body])
        case Repo.update(changeset) do
          {:ok, comment} ->
            req
            |> set_body(render(:show, comment: comment))
            |> reply(200)
          {:error, cs} ->
            req
            |> set_body(render(:errors, changeset: cs))
            |> reply(422, false)
        end
      nil ->
        req
        |> set_body(render(:not_found, []))
        |> reply(404, false)
    end
  end

  def delete(req, user, %{todo_id: todo_id, comment_id: comment_id}) do
    user
    |> assoc(:todos)
    |> Repo.get(todo_id)
    |> assoc(:comments)
    |> Repo.get(comment_id)
    |> Repo.delete!

    req
    |> set_body(%{ok: true})
    |> reply(200)
  end
end
