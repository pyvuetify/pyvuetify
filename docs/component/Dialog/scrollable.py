import ipyvuetify as v

v.Container(
    class_="text-center",
    children=[
        v.Dialog(
            v_model=False,
            scrollable=True,
            max_width=300,
            children=[
                v.Card(
                    children=[
                        v.CardTitle(
                            class_="text-h5",
                            children=["Select Country"],
                        ),
                        v.Divider(),
                        v.CardText(
                            style_="height: 300px;",
                            children=[
                                v.RadioGroup(
                                    v_model=None,
                                    column=True,
                                    children=[
                                        v.Radio(label="Bahamas, The", value="bahamas"),
                                        v.Radio(label="Bahrain", value="bahrain"),
                                        v.Radio(label="Bangladesh", value="bangladesh"),
                                        v.Radio(label="Barbados", value="barbados"),
                                        v.Radio(label="Belarus", value="belarus"),
                                        v.Radio(label="Belgium", value="belgium"),
                                        v.Radio(label="Belize", value="belize"),
                                        v.Radio(label="Benin", value="benin"),
                                        v.Radio(label="Bhutan", value="bhutan"),
                                        v.Radio(label="Bolivia", value="bolivia"),
                                        v.Radio(label="Bosnia and Herzegovina", value="bosnia"),
                                        v.Radio(label="Botswana", value="botswana"),
                                        v.Radio(label="Brazil", value="brazil"),
                                        v.Radio(label="Brunei", value="brunei"),
                                        v.Radio(label="Bulgaria", value="bulgaria"),
                                        v.Radio(label="Burkina Faso", value="burkina"),
                                        v.Radio(label="Burma", value="burma"),
                                        v.Radio(label="Burundi", value="burundi"),
                                    ],
                                )
                            ],
                        ),
                        v.Divider(),
                        v.CardActions(
                            children=[
                                v.Btn(
                                    text=True,
                                    color="blue darken-1",
                                    children=["Close"],
                                ),
                                v.Btn(
                                    text=True,
                                    color="blue darken-1",
                                    children=["Save"],
                                ),
                            ]
                        ),
                    ]
                )
            ],
            v_slots=[
                {
                    "name": "activator",
                    "variable": "dialog",
                    "children": v.Btn(
                        children=["Open Dialog"],
                        color="primary",
                        v_bind="dialog.attrs",
                        v_on="dialog.on",
                    ),
                }
            ],
        )
    ],
)
