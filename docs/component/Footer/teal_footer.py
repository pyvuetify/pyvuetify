import pyvuetify as v

v.Footer(
    class_="d-flex flex-column",
    color="teal",
    rounded="lg",
    children=[
        v.Html(
            tag="div",
            class_="d-flex w-100 align-center px-4 py-2",
            children=[
                v.Html(
                    tag="strong",
                    children=["Get connected with us on social networks!"],
                ),
                v.Html(
                    tag="div",
                    class_="d-flex ga-2 ms-auto",
                    children=[
                        v.Btn(
                            # JS expression, needs manual conversion
                            key="icon",
                            # JS expression, needs manual conversion
                            icon="icon",
                            size="small",
                            variant="plain",
                        ),
                    ],
                ),
            ],
        ),
        v.Html(
            tag="div",
            class_="px-4 py-2 bg-surface-variant text-center w-100 rounded-lg",
            children=[
                "{{ new Date().getFullYear() }} —",
                v.Html(
                    tag="strong",
                    children=["Vuetify"],
                ),
            ],
        ),
    ],
)
