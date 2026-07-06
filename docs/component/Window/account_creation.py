import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="500",
    children=[
        v.CardTitle(
            class_="text-title-large font-weight-regular justify-space-between",
            children=[
                v.Html(
                    tag="span",
                    children=["{{ currentTitle }}"],
                ),
                v.Avatar(
                    color="primary",
                    size="24",
                ),
            ],
        ),
        v.Window(
            v_model="step",
            children=[
                v.WindowItem(
                    value=1,
                    children=[
                        v.CardText(
                            children=[
                                v.TextField(
                                    label="Email",
                                    placeholder="john@google.com",
                                ),
                                v.Html(
                                    tag="span",
                                    class_="text-body-small text-grey-darken-1",
                                    children=[("This is the email you will use to login to your Vuetify account")],
                                ),
                            ],
                        ),
                    ],
                ),
                v.WindowItem(
                    value=2,
                    children=[
                        v.CardText(
                            children=[
                                v.TextField(
                                    label="Password",
                                    type="password",
                                ),
                                v.TextField(
                                    label="Confirm Password",
                                    type="password",
                                ),
                                v.Html(
                                    tag="span",
                                    class_="text-body-small text-grey-darken-1",
                                    children=["Please enter a password for your account"],
                                ),
                            ],
                        ),
                    ],
                ),
                v.WindowItem(
                    value=3,
                    children=[
                        v.Html(
                            tag="div",
                            class_="pa-4 text-center",
                            children=[
                                v.Img(
                                    class_="mb-4",
                                    height="128",
                                    src="https://cdn.vuetifyjs.com/images/logos/v.svg",
                                ),
                                v.Html(
                                    tag="h3",
                                    class_="text-title-large font-weight-light mt-0 mb-2",
                                    children=["Welcome to Vuetify"],
                                ),
                                v.Html(
                                    tag="span",
                                    class_="text-body-small text-grey",
                                    children=["Thanks for signing up!"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.Divider(),
        v.CardActions(
            children=[
                v.Btn(
                    variant="text",
                    children=["Back"],
                ),
                v.Spacer(),
                v.Btn(
                    color="primary",
                    variant="flat",
                    children=["Next"],
                ),
            ],
        ),
    ],
)
