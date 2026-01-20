import ipyvuetify as v

v.Container(
    children=[
        v.Toolbar(
            dense=True,
            children=[
                v.OverflowBtn(
                    items=["10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30"],
                    editable=True,
                    label="Select size",
                    hide_details=True,
                    class_="pa-0",
                    overflow=True,
                ),
                v.Divider(vertical=True),
                v.Spacer(),
                v.BtnToggle(
                    v_model=[1, 3],
                    color="primary",
                    dense=True,
                    group=True,
                    multiple=True,
                    children=[
                        v.Btn(value=1, text=True, children=[v.Icon(children=["mdi-format-bold"])]),
                        v.Btn(
                            value=2, text=True, children=[v.Icon(children=["mdi-format-italic"])]
                        ),
                        v.Btn(
                            value=3, text=True, children=[v.Icon(children=["mdi-format-underline"])]
                        ),
                        v.Btn(
                            value=4,
                            text=True,
                            children=[v.Icon(children=["mdi-format-color-fill"])],
                        ),
                    ],
                ),
                v.Html(tag="div", class_="mx-4"),
                v.BtnToggle(
                    v_model=2,
                    color="primary",
                    dense=True,
                    group=True,
                    children=[
                        v.Btn(
                            value=1,
                            text=True,
                            children=[v.Icon(children=["mdi-format-align-left"])],
                        ),
                        v.Btn(
                            value=2,
                            text=True,
                            children=[v.Icon(children=["mdi-format-align-center"])],
                        ),
                        v.Btn(
                            value=3,
                            text=True,
                            children=[v.Icon(children=["mdi-format-align-right"])],
                        ),
                        v.Btn(
                            value=4,
                            text=True,
                            children=[v.Icon(children=["mdi-format-align-justify"])],
                        ),
                    ],
                ),
            ],
        )
    ]
)
