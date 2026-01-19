import ipyvuetify as v

v.Card(
    class_="mx-auto my-2",
    width=400,
    children=[
        v.Responsive(style="background: rgb(128, 128, 128);", height=300),
        v.Slider(
            v_model=128,
            class_="mx-2",
            color="red",
            track_color="red lighten-4",
            label="R",
            min=0,
            max=255,
            v_slots=[
                {
                    "name": "append",
                    "children": v.TextField(
                        style={"width": "60px"},
                        v_model=128,
                        type="number",
                        hide_details=True,
                        dense=True,
                    ),
                }
            ],
        ),
        v.Slider(
            v_model=128,
            class_="mx-2",
            color="green",
            track_color="green lighten-4",
            label="G",
            min=0,
            max=255,
            v_slots=[
                {
                    "name": "append",
                    "children": v.TextField(
                        style={"width": "60px"},
                        v_model=128,
                        type="number",
                        hide_details=True,
                        dense=True,
                    ),
                }
            ],
        ),
        v.Slider(
            v_model=128,
            class_="mx-2",
            color="blue",
            track_color="blue lighten-4",
            label="B",
            min=0,
            max=255,
            v_slots=[
                {
                    "name": "append",
                    "children": v.TextField(
                        style={"width": "60px"},
                        v_model=128,
                        type="number",
                        hide_details=True,
                        dense=True,
                    ),
                }
            ],
        ),
    ],
)
