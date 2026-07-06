import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Html(
            tag="div",
            class_="text-center d-flex pb-4",
            children=[
                v.Btn(
                    class_="ma-2",
                    children=["All"],
                ),
                v.Btn(
                    class_="ma-2",
                    children=["None"],
                ),
            ],
        ),
        v.Html(
            tag="div",
            class_="pb-4",
            children=["v-model {{ panel }}"],
        ),
        v.ExpansionPanels(
            v_model="panel",
            multiple=True,
            children=[
                v.ExpansionPanel(
                    text=(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
                        "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                        "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea "
                        "commodo consequat."
                    ),
                    title="Foo",
                    value="foo",
                ),
                v.ExpansionPanel(
                    text=(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
                        "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                        "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea "
                        "commodo consequat."
                    ),
                    title="Bar",
                    value="bar",
                ),
                v.ExpansionPanel(
                    text=(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
                        "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                        "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea "
                        "commodo consequat."
                    ),
                    title="Baz",
                    value="baz",
                ),
            ],
        ),
    ],
)
