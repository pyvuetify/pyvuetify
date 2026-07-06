import pyvuetify as v

v.Row(
    class_="justify-center",
    children=[
        v.Col(
            cols="12",
            lg="6",
            md="8",
            sm="10",
            children=[
                v.Card(
                    ref="form",
                    children=[
                        v.CardText(
                            children=[
                                v.TextField(
                                    ref="name",
                                    v_model="name",
                                    # JS expression, needs manual conversion
                                    error_messages="errorMessages",
                                    # JS expression, needs manual conversion
                                    rules='[() => !!name || "This field is required"]',
                                    label="Full Name",
                                    placeholder="John Doe",
                                    required=True,
                                ),
                                v.TextField(
                                    ref="address",
                                    v_model="address",
                                    # JS expression, needs manual conversion
                                    rules="""[
                                        () => !!address || "This field is required",
                                        () => !!address && address.length <= 25 || "Address must be less than 25 characters",
                                        addressCheck
                                    ]""",  # noqa: E501
                                    counter="25",
                                    label="Address Line",
                                    placeholder="Snowy Rock Pl",
                                    required=True,
                                ),
                                v.TextField(
                                    ref="city",
                                    v_model="city",
                                    # JS expression, needs manual conversion
                                    rules="[() => !!city || 'This field is required', addressCheck]",
                                    label="City",
                                    placeholder="El Paso",
                                    required=True,
                                ),
                                v.TextField(
                                    ref="state",
                                    v_model="state",
                                    # JS expression, needs manual conversion
                                    rules="[() => !!state || 'This field is required']",
                                    label="State/Province/Region",
                                    placeholder="TX",
                                    required=True,
                                ),
                                v.TextField(
                                    ref="zip",
                                    v_model="zip",
                                    # JS expression, needs manual conversion
                                    rules='[() => !!zip || "This field is required"]',
                                    label="ZIP / Postal Code",
                                    placeholder="79938",
                                    required=True,
                                ),
                                v.Autocomplete(
                                    ref="country",
                                    v_model="country",
                                    # JS expression, needs manual conversion
                                    items="countries",
                                    # JS expression, needs manual conversion
                                    rules='[() => !!country || "This field is required"]',
                                    label="Country",
                                    placeholder="Select...",
                                    required=True,
                                ),
                            ],
                        ),
                        v.Divider(class_="mt-12"),
                        v.CardActions(
                            children=[
                                v.Btn(
                                    variant="text",
                                    children=["Cancel"],
                                ),
                                v.Spacer(),
                                v.SlideXReverseTransition(
                                    children=[
                                        v.Tooltip(
                                            location="left",
                                            children=[
                                                v.Html(
                                                    tag="template",
                                                    children=[
                                                        v.Btn(
                                                            icon=True,
                                                            children=[
                                                                v.Icon(children=["mdi-refresh"]),
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
        ),
    ],
)
