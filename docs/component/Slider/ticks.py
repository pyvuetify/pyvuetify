from ipywidgets import jslink

import ipyvuetify as v

slider = v.Slider(
    v_model=50,
    label="Show ticks when using slider",
    class_="mt-4 mx-2",
    step=10,
    ticks=True,
)

slider1 = v.Slider(
    v_model=50,
    label="Always show ticks",
    class_="mt-4 mx-2",
    step=10,
    ticks="always",
)

slider2 = v.Slider(
    v_model=50,
    label="Tick size",
    class_="mt-4 mx-2",
    step=10,
    ticks="always",
    tick_size=4,
)

slider3 = v.Slider(
    label="Tick labels",
    class_="mt-4 mx-2",
    v_model=1,
    max=3,
    step=1,
    ticks="always",
    tick_size=4,
    tick_labels=["Apple", "Banana", "Cherry", "Date"],
)

jslink((slider, "v_model"), (slider1, "v_model"))
jslink((slider, "v_model"), (slider2, "v_model"))

v.Col(class_="mx-1 my-2", children=[slider, slider1, slider2, slider3])
