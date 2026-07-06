import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Slider(
            v_model="slider1",
            color="orange",
            label="color",
        ),
        v.Slider(
            v_model="slider2",
            label="track-color",
            track_color="green",
        ),
        v.Slider(
            v_model="slider3",
            label="thumb-color",
            thumb_color="purple",
        ),
    ],
)
