import pyvuetify as v

v.Container(
    children=[
        v.Alert(
            klass="ma-1",
            dense=True,
            type="info",
            children=["I'm a dense alert with a type of info"],
        ),
        v.Alert(
            klass="ma-1",
            dense=True,
            type="success",
            children=["I'm a dense alert with the text prop and a type of success"],
        ),
        v.Alert(
            klass="ma-1",
            dense=True,
            border="start",
            type="warning",
            children=["I'm a dense alert with the border prop and a type of warning"],
        ),
        v.Alert(
            klass="ma-1",
            dense=True,
            outlined=True,
            type="error",
            children=["I'm a dense alert with the outlined prop and a type of error"],
        ),
    ]
)
