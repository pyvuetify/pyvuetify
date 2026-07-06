import pyvuetify as v

v.ExpansionPanels(
    children=[
        v.ExpansionPanel(
            children=[
                v.ExpansionPanelTitle(
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Row(
                                    density="comfortable",
                                    children=[
                                        v.Col(
                                            class_="d-flex justify-start",
                                            cols="4",
                                            children=["Trip name"],
                                        ),
                                        v.Col(
                                            class_="text-grey",
                                            cols="8",
                                            children=[
                                                v.FadeTransition(
                                                    leave_absolute=True,
                                                    children=[
                                                        v.Html(
                                                            tag="span",
                                                            key="0",
                                                            children=["Enter a name for the trip"],
                                                        ),
                                                        v.Html(
                                                            tag="span",
                                                            key="1",
                                                            children=["{{ trip.name }}"],
                                                        ),
                                                    ],
                                                ),
                                            ],
                                        ),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
