import ipyvuetify as v

bio = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"

v.Card(
    class_="mx-auto",
    width=600,
    children=[
        v.SystemBar(
            color="deep-purple darken-4",
            dark=True,
            children=[
                v.Spacer(),
                v.Icon(
                    small=True,
                    children=["mdi-square"],
                ),
                v.Icon(
                    small=True,
                    class_="ml-1",
                    children=["mdi-circle"],
                ),
                v.Icon(
                    small=True,
                    class_="ml-1",
                    children=["mdi-triangle"],
                ),
            ],
        ),
        v.Toolbar(
            color="deep-purple accent-4",
            cards=True,
            dark=True,
            flat=True,
            children=[
                v.Btn(
                    icon=True,
                    children=[v.Icon(children=["mdi-arrow-left"])],
                ),
                v.CardTitle(
                    class_="text-h6 font-weight-regular",
                    children=["Sign up"],
                ),
                v.Spacer(),
                v.Btn(
                    icon=True,
                    children=[v.Icon(children=["mdi-magnify"])],
                ),
                v.Btn(
                    icon=True,
                    children=[v.Icon(children=["mdi-dots-vertical"])],
                ),
            ],
        ),
        v.Form(
            ref="form",
            class_="pa-4 pt-6",
            children=[
                v.TextField(
                    model_value="",
                    rules=[
                        # rules would go here
                    ],
                    filled=True,
                    color="deep-purple",
                    counter="6",
                    label="Password",
                    style_="min-height: 96px",
                    type_="password",
                ),
                v.TextField(
                    model_value="",
                    filled=True,
                    color="deep-purple",
                    label="Phone number",
                ),
                v.TextField(
                    model_value="",
                    rules=[
                        # rules would go here
                    ],
                    filled=True,
                    color="deep-purple",
                    label="Email address",
                    type_="email",
                ),
                v.Textarea(
                    model_value=bio,
                    auto_grow=True,
                    filled=True,
                    color="deep-purple",
                    label="Bio",
                    rows="1",
                ),
                v.Checkbox(
                    model_value=False,
                    rules=[
                        # rules would go here
                    ],
                    color="deep-purple",
                    v_slots=[
                        {
                            "name": "label",
                            "children": [
                                "I agree to the ",
                                v.Html(
                                    tag="a", attributes={"href": "#"}, children=["Terms of Service"]
                                ),
                                " and ",
                                v.Html(
                                    tag="a", attributes={"href": "#"}, children=["Privacy Policy"]
                                ),
                                "*",
                            ],
                        }
                    ],
                ),
            ],
        ),
        v.Divider(),
        v.CardActions(
            children=[
                v.Btn(
                    text=True,
                    children=["Clear"],
                    # on_click would go here
                ),
                v.Spacer(),
                v.Btn(
                    disabled=True,
                    loading=False,
                    class_="white--text",
                    color="deep-purple accent-4",
                    depressed=True,
                    children=["Submit"],
                ),
            ],
        ),
    ],
)
