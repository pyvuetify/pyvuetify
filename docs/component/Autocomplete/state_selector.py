import pyvuetify as v

v.Card(
    children=[
        v.CardTitle(
            class_="font-weight-regular bg-blue-grey py-3",
            children=["Profile"],
        ),
        v.CardText(
            children=[
                v.Html(
                    tag="div",
                    class_="text-body-small pa-3",
                    children=["Where do you live?"],
                ),
                v.Autocomplete(
                    v_model="model",
                    # JS expression, needs manual conversion
                    hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'",
                    # JS expression, needs manual conversion
                    items="states",
                    # JS expression, needs manual conversion
                    label="`State — ${isEditing ? 'Editable' : 'Readonly'}`",
                    # JS expression, needs manual conversion
                    readonly="!isEditing",
                    prepend_icon="mdi-city",
                    persistent_hint=True,
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.SlideXReverseTransition(
                                    mode="out-in",
                                    children=[
                                        v.Icon(
                                            # JS expression, needs manual conversion
                                            key="`icon-${isEditing}`",
                                            # JS expression, needs manual conversion
                                            color="isEditing ? 'success' : 'info'",
                                            icon=(
                                                "isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
                                                # JS expression, needs manual conversion
                                            ),
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
