import pyvuetify as v

v.Card(
    class_="mx-auto",
    prepend_icon="$vuetify",
    subtitle="The #1 Vue UI Library",
    width="400",
    children=[
        v.Html(
            tag="template",
            children=[
                v.Html(
                    tag="span",
                    class_="font-weight-black",
                    children=["Welcome to Vuetify"],
                ),
            ],
        ),
    ],
)
