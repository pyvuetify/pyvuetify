import ipyvuetify as v

v.Col(
    class_="mx-1 mt-2",
    children=[
        v.Slider(
            class_="mt-5",
            v_model=-10,
            thumb_label="always",
            max=200,
            min=-100,
        ),
    ],
)
