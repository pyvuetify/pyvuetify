import pyvuetify as v

v.DataIterator(
    # JS expression, needs manual conversion
    items="desserts",
    item_value="name",
    children=[
        v.Html(
            tag="template",
            children=[
                v.Row(
                    children=[
                        v.Col(
                            # JS expression, needs manual conversion
                            key="item.raw.name",
                            cols="12",
                            md="6",
                            sm="12",
                            children=[
                                v.Card(
                                    children=[
                                        v.CardTitle(
                                            class_="d-flex align-center",
                                            children=[
                                                v.Icon(
                                                    # JS expression, needs manual conversion
                                                    color="item.raw.color",
                                                    # JS expression, needs manual conversion
                                                    icon="item.raw.icon",
                                                    size="18",
                                                    start=True,
                                                ),
                                                v.Html(
                                                    tag="h4",
                                                    class_="my-0 text-title-large font-weight-medium",
                                                    children=["{{ item.raw.name }}"],
                                                ),
                                            ],
                                        ),
                                        v.CardText(children=["{{ item.raw.description }}"]),
                                        v.Html(
                                            tag="div",
                                            class_="px-4",
                                            children=[
                                                v.Switch(
                                                    label=(
                                                        "`${isExpanded(item) ? 'Hide' : 'Show'} details`"
                                                        # JS expression, needs manual conversion
                                                    ),
                                                    # JS expression, needs manual conversion
                                                    model_value="isExpanded(item)",
                                                    density="compact",
                                                    inset=True,
                                                ),
                                            ],
                                        ),
                                        v.Divider(),
                                        v.ExpandTransition(
                                            children=[
                                                v.Html(
                                                    tag="div",
                                                    children=[
                                                        v.List(
                                                            lines=False,
                                                            density="compact",
                                                            children=[
                                                                v.ListItem(
                                                                    # JS expression, needs manual conversion
                                                                    title="`🔥 Calories: ${item.raw.calories}`",
                                                                    active=True,
                                                                ),
                                                                v.ListItem(
                                                                    # JS expression, needs manual conversion
                                                                    title="`🍔 Fat: ${item.raw.fat}`",
                                                                ),
                                                                v.ListItem(
                                                                    # JS expression, needs manual conversion
                                                                    title="`🍞 Carbs: ${item.raw.carbs}`",
                                                                ),
                                                                v.ListItem(
                                                                    # JS expression, needs manual conversion
                                                                    title="`🍗 Protein: ${item.raw.protein}`",
                                                                ),
                                                                v.ListItem(
                                                                    # JS expression, needs manual conversion
                                                                    title="`🧂 Sodium: ${item.raw.sodium}`",
                                                                ),
                                                                v.ListItem(
                                                                    # JS expression, needs manual conversion
                                                                    title="`🦴 Calcium: ${item.raw.calcium}`",
                                                                ),
                                                                v.ListItem(
                                                                    # JS expression, needs manual conversion
                                                                    title="`🧲 Iron: ${item.raw.iron}`",
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
        ),
    ],
)
