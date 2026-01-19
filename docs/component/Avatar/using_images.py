import ipyvuetify as v

v.Row(
    justify="space-around",
    children=[
        v.Avatar(color="indigo", children=[v.Icon(dark=True, children=["mdi-account-circle"])]),
        v.Avatar(
            children=[
                v.Img(
                    src="https://avatars.githubusercontent.com/u/12596392??v=4&s=460",
                    alt="John",
                )
            ]
        ),
        v.Avatar(
            color="red",
            children=[v.Html(tag="span", class_="white--text text-h5", children=["CJ"])],
        ),
    ],
)
