import pyvuetify as v

v.Footer(
    class_="d-flex align-center justify-center ga-2 flex-wrap flex-grow-1 py-3",
    color="surface-light",
    children=[
        v.Btn(
            # JS expression, needs manual conversion
            key="link",
            # JS expression, needs manual conversion
            text="link",
            variant="text",
            rounded=True,
        ),
        v.Html(
            tag="div",
            class_="flex-1-0-100 text-center mt-2",
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
