import ipyvuetify as v

v.Container(
    children=[
        v.Chip(class_="ma-2", close_=True, v_model=True, children=["Closable"]),
        v.Chip(
            class_="ma-2",
            close_=True,
            color="red",
            text_color="white",
            v_model=True,
            children=["Remove"],
        ),
        v.Chip(
            class_="ma-2",
            close_=True,
            color="green",
            outlined=True,
            v_model=True,
            children=["Success"],
        ),
        v.Chip(
            class_="ma-2",
            close_=True,
            color="orange",
            label=True,
            outlined=True,
            v_model=True,
            children=["Complete"],
        ),
    ]
)
