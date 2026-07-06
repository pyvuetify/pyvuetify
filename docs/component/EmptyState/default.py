import pyvuetify as v

v.EmptyState(
    headline="Welcome,",
    icon="$vuetify",
    title="What would you like to do today?",
    children=[
        v.Container(
            children=[
                v.Row(
                    children=[
                        v.Col(
                            cols="12",
                            md="6",
                            children=[
                                v.Card(
                                    href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides",
                                    prepend_icon="$vuetify",
                                    target="_blank",
                                    text="Start with our dedicated feature guides",
                                    title="Learn Vuetify",
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            md="6",
                            children=[
                                v.Card(
                                    href="https://play.vuetifyjs.com",
                                    prepend_icon="$vuetify-play",
                                    target="_blank",
                                    text="Test Vuetify out in our playground",
                                    title="Create a Playground",
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            md="6",
                            children=[
                                v.Card(
                                    href="https://bin.vuetifyjs.com",
                                    prepend_icon="mdi-delete",
                                    target="_blank",
                                    text="Create a new bin to store your code",
                                    title="Create a Bin",
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            md="6",
                            children=[
                                v.Card(
                                    href="https://issues.vuetifyjs.com",
                                    prepend_icon="$warning",
                                    target="_blank",
                                    text="File a bug report for Vuetify",
                                    title="Report a Bug",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
