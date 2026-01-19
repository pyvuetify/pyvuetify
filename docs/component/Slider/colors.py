import ipyvuetify as v

v.Col(
    class_="mx-1 my-2",
    children=[
        v.Slider(v_model=25, color="orange darken-3", label="color"),
        v.Slider(v_model=50, label="track color", track_color="light-green lighten-4"),
        v.Slider(
            class_="mt-4",
            thumb_label="always",
            v_model=75,
            color="blue",
            label="thumb color",
            thumb_color="red",
        ),
    ],
)
