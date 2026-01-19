import ipyvuetify as v

v.Container(
    children=[
        v.Btn(children=["Loading"], loading=True, color="primary", disabled=True, class_="mx-2"),
        v.Btn(
            children=["Loading..."],
            loading=True,
            color="success",
            disabled=True,
            class_="mx-2",
            v_slots=[
                {"name": "loader", "children": [v.Html(tag="span", children=["Uploading..."])]}
            ],
        ),
        v.Btn(
            children=["Loading Icon"],
            loading=True,
            color="info",
            disabled=True,
            class_="mx-2",
            v_slots=[
                {
                    "name": "loader",
                    "children": [
                        v.Html(
                            tag="span",
                            children=[
                                v.Icon(light=True, class_="custom-loader", children=["mdi-cached"])
                            ],
                        )
                    ],
                }
            ],
        ),
        v.Btn(fab=True, loading=True, disabled=True, class_="mx-2"),
    ]
)
