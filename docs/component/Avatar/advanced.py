import pyvuetify as v

v.ExpansionPanels(
    class_="pa-4",
    variant="popout",
    children=[
        v.ExpansionPanel(
            # JS expression, needs manual conversion
            key="i",
            hide_actions=True,
            children=[
                v.ExpansionPanelTitle(
                    children=[
                        v.Row(
                            class_="spacer align-center",
                            density="compact",
                            children=[
                                v.Col(
                                    cols="4",
                                    md="1",
                                    sm="2",
                                    children=[
                                        v.Avatar(
                                            size="36px",
                                            children=[
                                                v.Img(
                                                    alt="Avatar",
                                                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
                                                ),
                                                v.Icon(
                                                    # JS expression, needs manual conversion
                                                    color="message.color",
                                                    # JS expression, needs manual conversion
                                                    icon="message.icon",
                                                ),
                                            ],
                                        ),
                                    ],
                                ),
                                v.Col(
                                    class_="hidden-xs text-left ms-2",
                                    md="3",
                                    sm="5",
                                    children=[
                                        v.Html(tag="strong"),
                                        v.Html(
                                            tag="span",
                                            class_="text-grey",
                                            children=["({{ message.total }})"],
                                        ),
                                    ],
                                ),
                                v.Col(
                                    class_="text-no-wrap text-left",
                                    cols="5",
                                    sm="3",
                                    children=[
                                        v.Chip(
                                            # JS expression, needs manual conversion
                                            color="`${message.color}-lighten-1`",
                                            class_="ms-0 me-2",
                                            size="small",
                                            label=True,
                                            children=["{{ message.new }} new"],
                                        ),
                                        v.Html(tag="strong"),
                                    ],
                                ),
                                v.Col(
                                    class_="text-medium-emphasis text-truncate hidden-sm-and-down",
                                    children=["— {{ message.excerpt }}"],
                                ),
                            ],
                        ),
                    ],
                ),
                v.ExpansionPanelText(
                    children=[
                        v.CardText(),
                    ],
                ),
            ],
        ),
    ],
)
