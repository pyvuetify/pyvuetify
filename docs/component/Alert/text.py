import ipyvuetify as v

v.Container(
    children=[
        v.Alert(
            text=True,
            color="info",
            children=[
                v.Html(tag="h5", class_="mt-1", children=["Lorem Ipsum"]),
                v.Html(
                    tag="div",
                    children=[
                        "Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices "
                        "tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. "
                        "Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique "
                        "sapien, a accumsan nisi mauris ac eros. Curabitur turpis."
                    ],
                ),
                v.Divider(class_="my-4 info", style_="opacity: 0.22"),
                v.Row(
                    align="center",
                    no_gutters=True,
                    children=[
                        v.Col(
                            class_="grow",
                            children=[
                                "Proin magna. Vivamus in erat ut urna cursus vestibulum. Etiam "
                                "imperdiet imperdiet orci."
                            ],
                        ),
                        v.Spacer(),
                        v.Col(
                            class_="shrink",
                            children=[v.Btn(color="info", outlined=True, children=["Okay"])],
                        ),
                    ],
                ),
            ],
        ),
        v.Alert(
            text=True,
            outlined=True,
            color="deep-orange",
            icon="mdi-fire",
            children=[
                "Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit. "
                "Maecenas egestas arcu quis ligula mattis placerat. Praesent metus tellus, "
                "elementum eu, semper a, adipiscing nec, purus."
            ],
        ),
        v.Alert(
            text=True,
            dense=True,
            color="teal",
            icon="mdi-clock-fast",
            border="left",
            children=[
                "Vestibulum ullamcorper mauris at ligula. Nulla porta dolor. Vestibulum facilisis, "
                "purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna "
                "in dolor. Curabitur at lacus ac velit ornare lobortis."
            ],
        ),
        v.Alert(
            text=True,
            prominent=True,
            type="error",
            icon="mdi-cloud-alert",
            children=[
                "Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus. "
                "Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Duis leo."
            ],
        ),
    ]
)
