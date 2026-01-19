import ipyvuetify as v

v.Col(
    class_="mx-1 my-2",
    children=[
        v.Slider(v_model=30, prepend_icon="mdi-volume-high", label="Media volume"),
        v.Slider(v_model=70, append_icon="mdi-alarm", label="Alarm volume"),
        v.Slider(
            v_model=100,
            append_icon="mdi-magnify-plus-outline",
            prepend_icon="mdi-magnify-minus-outline",
            label="Icon click callback",
        ),
    ],
)
