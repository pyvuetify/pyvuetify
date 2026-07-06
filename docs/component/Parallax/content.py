import pyvuetify as v

v.Parallax(
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
    children=[
        v.Html(
            tag="div",
            class_="d-flex flex-column fill-height justify-center align-center text-white",
            children=[
                v.Html(
                    tag="h1",
                    class_="text-headline-large font-weight-thin mt-0 mb-4",
                    children=["Vuetify"],
                ),
                v.Html(
                    tag="h4",
                    class_="subheading my-0",
                    children=["Build your application today!"],
                ),
            ],
        ),
    ],
)
