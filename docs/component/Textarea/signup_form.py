import pyvuetify as v

v.Card(
    class_="mx-auto",
    style_="max-width: 500px;",
    children=[
        v.Toolbar(
            color="deep-purple-accent-4",
            cards=True,
            dark=True,
            flat=True,
            children=[
                v.Btn(
                    icon=True,
                    children=[
                        v.Icon(children=["mdi-arrow-left"]),
                    ],
                ),
                v.CardTitle(
                    class_="text-title-large font-weight-regular",
                    children=["Sign up"],
                ),
                v.Spacer(),
                v.Btn(
                    icon=True,
                    children=[
                        v.Icon(children=["mdi-magnify"]),
                    ],
                ),
                v.Btn(
                    icon=True,
                    children=[
                        v.Icon(children=["mdi-dots-vertical"]),
                    ],
                ),
            ],
        ),
        v.Form(
            ref="form",
            v_model="isValid",
            class_="pa-4 pt-6",
            children=[
                v.TextField(
                    v_model="password",
                    # JS expression, needs manual conversion
                    rules="[rules.password, rules.length(6)]",
                    color="deep-purple",
                    counter="6",
                    label="Password",
                    style_="min-height: 96px",
                    type="password",
                    variant="filled",
                ),
                v.TextField(
                    v_model="phone",
                    color="deep-purple",
                    label="Phone number",
                    variant="filled",
                ),
                v.TextField(
                    v_model="email",
                    # JS expression, needs manual conversion
                    rules="[rules.email]",
                    color="deep-purple",
                    label="Email address",
                    type="email",
                    variant="filled",
                ),
                v.Textarea(
                    v_model="bio",
                    color="deep-purple",
                    label="Bio",
                    rows="1",
                    variant="filled",
                    auto_grow=True,
                ),
                v.Checkbox(
                    v_model="agreement",
                    # JS expression, needs manual conversion
                    rules="[rules.required]",
                    color="deep-purple",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                "I agree to the",
                                v.Html(
                                    tag="a",
                                    href="#",
                                    children=["Terms of Service"],
                                ),
                                "and",
                                v.Html(
                                    tag="a",
                                    href="#",
                                    children=["Privacy Policy"],
                                ),
                                "*",
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
