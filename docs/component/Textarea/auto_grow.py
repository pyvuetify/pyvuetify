import ipyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Textarea(
            name="input-7-1",
            filled=True,
            label="Label",
            auto_grow=True,
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.",
        )
    ],
)
