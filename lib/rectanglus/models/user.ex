defmodule Rectanglus.User do
  use Rectanglus.BaseModel

  schema "users" do
    # has_many :todos, Rectanglus.Todo
    # has_many :comments, Rectanglus.Comment

    timestamps()
  end
end
