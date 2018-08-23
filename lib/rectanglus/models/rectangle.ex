defmodule Rectanglus.Rectangle do
  use Rectanglus.BaseModel
  @enforce_keys [:x0, :y0, :x1, :y1]
  defstruct [:x0, :y0, :x1, :y1, r: :rand.uniform, g: :rand.uniform, b: :rand.uniform]
end
