defmodule Rectanglus.RegistrationView do
  use Rectanglus.BaseView

  def render(:show, %{jwt: jwt, user: user}) do
    %{
      data: %{
        jwt: jwt,
        user: Rectanglus.UserView.render(:user, user: user)
      }
    }
  end
end
