import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Html(
            tag="div",
            class_="text-body-small",
            children=["Media volume"],
        ),
        v.Slider(
            v_model="media",
            prepend_icon="mdi-volume-high",
        ),
        v.Html(
            tag="div",
            class_="text-body-small",
            children=["Alarm volume"],
        ),
        v.Slider(
            v_model="alarm",
            append_icon="mdi-alarm",
        ),
        v.Html(
            tag="div",
            class_="text-body-small",
            children=["Icon click callback"],
        ),
        v.Slider(
            v_model="zoom",
            append_icon="mdi-magnify-plus-outline",
            prepend_icon="mdi-magnify-minus-outline",
        ),
    ],
)
