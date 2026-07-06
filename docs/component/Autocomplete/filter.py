import pyvuetify as v

v.Card(
    class_="mx-auto",
    color="purple-lighten-1",
    max_width="500",
    children=[
        v.Toolbar(
            color="purple",
            flat=True,
            children=[
                v.Btn(icon="mdi-account"),
                v.ToolbarTitle(
                    class_="font-weight-light",
                    children=["User Profile"],
                ),
                v.Btn(
                    icon=True,
                    children=[
                        v.FadeTransition(
                            leave_absolute=True,
                            children=[
                                v.Icon(children=["mdi-close"]),
                                v.Icon(children=["mdi-pencil"]),
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.CardText(
            children=[
                v.TextField(
                    # JS expression, needs manual conversion
                    disabled="!isEditing",
                    base_color="white",
                    label="Name",
                ),
                v.Autocomplete(
                    # JS expression, needs manual conversion
                    custom_filter="customFilter",
                    # JS expression, needs manual conversion
                    disabled="!isEditing",
                    # JS expression, needs manual conversion
                    items="states",
                    base_color="white",
                    item_title="name",
                    item_value="abbr",
                    label="State",
                ),
            ],
        ),
        v.Divider(),
        v.CardActions(
            children=[
                v.Spacer(),
                v.Btn(
                    # JS expression, needs manual conversion
                    disabled="!isEditing",
                    children=["Save"],
                ),
            ],
        ),
        v.Snackbar(
            v_model="hasSaved",
            timeout=2000,
            location="bottom left",
            position="absolute",
            attach=True,
            children=["Your profile has been updated"],
        ),
    ],
)
