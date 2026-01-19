import ipyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Textarea(
            counter=True,
            label="Text",
            # rules=[lambda v: len(v) <= 50 or "Max 50 characters"],
            value="This is some text.",
        )
    ],
)
