import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-center",
    children=[
        v.Menu(
            v_model="showMenu",
            style_="max-width: 600px",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Card(
                            class_="portrait",
                            height="300",
                            image="https://cdn.vuetifyjs.com/images/cards/girl.jpg",
                            width="600",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
