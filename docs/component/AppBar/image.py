import pyvuetify as v

v.Card(
    class_="mx-auto",
    color="grey-lighten-3",
    max_width="448",
    children=[
        v.Layout(
            children=[
                v.AppBar(
                    color="teal-darken-4",
                    image="https://picsum.photos/1920/1080?random",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Img(
                                    gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
