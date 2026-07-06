import pyvuetify as v

v.Container(
    children=[
        v.TextField(
            v_model="msg",
            focused=True,
        ),
    ],
)
