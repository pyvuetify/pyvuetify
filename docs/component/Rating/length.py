from ipywidgets import jslink

import ipyvuetify as v

slider = v.Slider(
    class_="mt-4",
    v_model=5,
    min=1,
    max=15,
    label="Custom length",
)

rating = v.Rating(
    class_="my-2",
    v_model=4,
    length=slider.v_model,
    color="red lighten-3",
    background_color="grey lighten-1",
    large=True,
)

value = v.TextField(
    label="Rating value",
    v_model=4,
    readonly=True,
)

jslink((slider, "v_model"), (rating, "length"))
jslink((rating, "v_model"), (value, "v_model"))

v.Col(
    class_="text-center",
    children=[slider, value, rating],
)
