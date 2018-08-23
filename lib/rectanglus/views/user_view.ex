defmodule Rectanglus.UserView do
  use Rectanglus.BaseView

  def render(:show, %{user: user}) do
    %{
      data: %{
        user: render(:user, %{user: user})
      }
    }
  end

  def render(:user, %{user: user}) do
    %{
      id: user.id
    }
  end
end
