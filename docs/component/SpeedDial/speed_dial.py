from ipywidgets import jslink

import ipyvuetify as v

btns = [
    ("mdi-pencil", "green"),
    ("mdi-plus", "indigo"),
    ("mdi-delete", "red"),
]

speed_dial = v.SpeedDial(
    absolute=True,
    v_model=False,
    top=True,
    right=True,
    left=False,
    bottom=False,
    direction="bottom",
    open_on_hover=True,
    transition="slide-y-transition",
    v_slots=[
        {
            "name": "activator",
            "children": v.Btn(
                id="activator_btn",
                color="blue darken-2",
                dark=True,
                fab=True,
                children=[v.Icon(children=["mdi-account-circle"])],
            ),
        }
    ],
    children=[
        v.Btn(fab=True, dark=True, small=True, color=color, children=[v.Icon(children=[icon])])
        for icon, color in btns
    ],
)

hover_cb = v.Checkbox(v_model=True, label="Open on hover", hide_details=True, id="hover_cb")

top_location = v.Checkbox(v_model=True, label="Top", class_="ma-0")
bottom_location = v.Checkbox(v_model=False, label="Bottom", class_="ma-0")
right_location = v.Checkbox(v_model=True, label="Right", class_="ma-0")
left_location = v.Checkbox(v_model=False, label="Left", class_="ma-0")

direction_rg = v.RadioGroup(
    v_model="bottom",
    hide_details=True,
    id="direction_rg",
    children=[
        v.Radio(value="top", label="Top"),
        v.Radio(value="right", label="Right"),
        v.Radio(value="bottom", label="Bottom"),
        v.Radio(value="left", label="Left"),
    ],
)

transition_rg = v.RadioGroup(
    v_model="slide-y-transition",
    hide_details=True,
    id="transition_rg",
    children=[
        v.Radio(value="slide-y-transition", label="Slide y"),
        v.Radio(value="slide-y-reverse-transition", label="Slide y reverse"),
        v.Radio(value="slide-x-transition", label="Slide x"),
        v.Radio(value="slide-x-reverse-transition", label="Slide x reverse"),
        v.Radio(value="scale-transition", label="Scale"),
    ],
)

jslink((hover_cb, "v_model"), (speed_dial, "open_on_hover"))
jslink((top_location, "v_model"), (speed_dial, "top"))
jslink((bottom_location, "v_model"), (speed_dial, "bottom"))
jslink((right_location, "v_model"), (speed_dial, "right"))
jslink((left_location, "v_model"), (speed_dial, "left"))
jslink((direction_rg, "v_model"), (speed_dial, "direction"))
jslink((transition_rg, "v_model"), (speed_dial, "transition"))


v.Card(
    class_="mx-auto my-2 pa-2",
    width=600,
    children=[
        v.Row(
            children=[
                v.Col(cols=12, sm=6, md=4, children=[v.Subheader(children=["Options"]), hover_cb]),
                v.Col(
                    cols=12,
                    sm=6,
                    md=4,
                    children=[
                        v.Subheader(children=["FAB location"]),
                        top_location,
                        bottom_location,
                        right_location,
                        left_location,
                    ],
                ),
            ]
        ),
        v.Row(
            children=[
                v.Col(
                    cols=12,
                    sm=6,
                    md=4,
                    children=[v.Subheader(children=["Speed dial direction"]), direction_rg],
                ),
                v.Col(
                    cols=12,
                    sm=6,
                    md=4,
                    children=[v.Subheader(children=["Transition"]), transition_rg],
                ),
            ]
        ),
        speed_dial,
    ],
)
