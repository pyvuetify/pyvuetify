import ipyvuetify as v

states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California"]

v.Card(
    children=[
        v.CardTitle(
            class_="text-h5 font-weight-regular blue-grey white--text", children=["Profile"]
        ),
        v.CardText(
            children=[
                v.Subheader(class_="pa-0", children=["Where do you live?"]),
                v.Autocomplete(
                    items=states,
                    readonly=True,
                    label="State — Readonly",
                    persistent_hint=True,
                    hint="Click the icon to edit",
                    prepend_icon="mdi-city",
                ),
            ]
        ),
    ]
)
