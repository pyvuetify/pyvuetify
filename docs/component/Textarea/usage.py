import ipyvuetify as v

text = "The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."

v.Container(
    fluid=True,
    children=[
        v.Row(
            children=[
                v.Col(
                    cols="12",
                    md="6",
                    children=[
                        v.Textarea(
                            name="input-7-1",
                            label="Default style",
                            value=text,
                            hint="Hint text",
                        )
                    ],
                ),
                v.Col(
                    cols="12",
                    md="6",
                    children=[
                        v.Textarea(
                            solo=True,
                            name="input-7-4",
                            label="Solo textarea",
                            value=text,
                        )
                    ],
                ),
                v.Col(
                    cols="12",
                    md="6",
                    children=[
                        v.Textarea(
                            filled=True,
                            name="input-7-4",
                            label="Filled textarea",
                            value=text,
                        )
                    ],
                ),
                v.Col(
                    cols="12",
                    md="6",
                    children=[
                        v.Textarea(
                            outlined=True,
                            name="input-7-4",
                            label="Outlined textarea",
                            value=text,
                        )
                    ],
                ),
            ],
        )
    ],
)
