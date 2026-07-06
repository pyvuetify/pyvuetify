import pyvuetify as v

v.Html(
    tag="div",
    class_="pa-4 text-center",
    children=[
        v.BtnGroup(
            color="#b2d7ef",
            density="comfortable",
            rounded="pill",
            divided=True,
            children=[
                v.Btn(
                    class_="pe-2",
                    prepend_icon="mdi-account-multiple-outline",
                    variant="flat",
                    children=[
                        v.Html(
                            tag="div",
                            class_="text-none font-weight-regular",
                            children=["Share"],
                        ),
                        v.Dialog(
                            activator="parent",
                            max_width="500",
                            children=[
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.Card(
                                            rounded="lg",
                                            children=[
                                                v.CardTitle(
                                                    class_="d-flex justify-space-between align-center",
                                                    children=[
                                                        v.Html(
                                                            tag="div",
                                                            class_=("text-headline-small text-medium-emphasis ps-2"),
                                                            children=["Invite John to connect"],
                                                        ),
                                                        v.Btn(
                                                            icon="mdi-close",
                                                            variant="text",
                                                        ),
                                                    ],
                                                ),
                                                v.Divider(class_="mb-4"),
                                                v.CardText(
                                                    children=[
                                                        v.Html(
                                                            tag="div",
                                                            class_="text-medium-emphasis mb-4",
                                                            children=[
                                                                (
                                                                    "Invite collaborators to your "
                                                                    "network and grow your "
                                                                    "connections."
                                                                )
                                                            ],
                                                        ),
                                                        v.Html(
                                                            tag="div",
                                                            class_="mb-2",
                                                            children=["Message (optional)"],
                                                        ),
                                                        v.Textarea(
                                                            counter=300,
                                                            class_="mb-2",
                                                            rows="2",
                                                            variant="outlined",
                                                            persistent_counter=True,
                                                        ),
                                                        v.Html(
                                                            tag="div",
                                                            class_="text-label-medium mb-2",
                                                            children=["💎 PREMIUM"],
                                                        ),
                                                        v.Html(
                                                            tag="div",
                                                            class_="text-medium-emphasis mb-1",
                                                            children=[
                                                                (
                                                                    "Share with unlimited people and get more "
                                                                    "insights about your network. Try Premium "
                                                                    "Free for 30 days."
                                                                )
                                                            ],
                                                        ),
                                                        v.Btn(
                                                            class_="text-none font-weight-bold ms-n4",
                                                            color="primary",
                                                            text="Retry Premium Free",
                                                            variant="text",
                                                        ),
                                                    ],
                                                ),
                                                v.Divider(class_="mt-2"),
                                                v.CardActions(
                                                    class_="my-2 d-flex justify-end",
                                                    children=[
                                                        v.Btn(
                                                            class_="text-none",
                                                            rounded="xl",
                                                            text="Cancel",
                                                        ),
                                                        v.Btn(
                                                            class_="text-none",
                                                            color="primary",
                                                            rounded="xl",
                                                            text="Send",
                                                            variant="flat",
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
