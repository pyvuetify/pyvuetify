import pyvuetify as v

v.Footer(
    class_="text-center d-flex flex-column ga-2 py-4",
    color="indigo-lighten-1",
    children=[
        v.Html(
            tag="div",
            class_="d-flex ga-3",
            children=[
                v.Btn(
                    # JS expression, needs manual conversion
                    key="icon",
                    # JS expression, needs manual conversion
                    icon="icon",
                    density="comfortable",
                    variant="text",
                ),
            ],
        ),
        v.Divider(
            class_="my-2",
            thickness="2",
            width="50",
        ),
        v.Html(
            tag="div",
            class_="text-body-small font-weight-regular opacity-60",
            children=[
                (
                    "Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo"
                    " interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed"
                    " massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi "
                    "vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui "
                    "sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius "
                    "natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                ),
            ],
        ),
        v.Divider(),
        v.Html(
            tag="div",
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
