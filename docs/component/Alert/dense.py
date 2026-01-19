import ipyvuetify as v

v.Container(
    children=[
        v.Alert(dense=True, type="info", children=["I'm a dense alert with a type of info"]),
        v.Alert(
            dense=True,
            text=True,
            type="success",
            children=["I'm a dense alert with the text prop and a type of success"],
        ),
        v.Alert(
            dense=True,
            border="left",
            type="warning",
            children=["I'm a dense alert with the border prop and a type of warning"],
        ),
        v.Alert(
            dense=True,
            outlined=True,
            type="error",
            children=["I'm a dense alert with the outlined prop and a type of error"],
        ),
    ]
)
