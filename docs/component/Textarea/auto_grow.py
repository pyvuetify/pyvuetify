import pyvuetify as v

v.Container(
    class_="d-flex ga-3 align-start",
    fluid=True,
    children=[
        v.Textarea(
            v_model="text",
            hint="Growing without limit",
            auto_grow=True,
            persistent_hint=True,
        ),
        v.Textarea(
            v_model="text",
            hint="Growing up to 7 rows",
            max_rows="7",
            auto_grow=True,
            persistent_hint=True,
        ),
        v.Textarea(
            v_model="text",
            hint="Growing up to 300px",
            max_height="300",
            auto_grow=True,
            persistent_hint=True,
        ),
    ],
)
