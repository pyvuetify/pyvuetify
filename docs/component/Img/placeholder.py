import ipyvuetify as v

v.Row(
    justify="center",
    children=[
        v.Img(
            src="https://bad.src/not/valid",
            lazy_src="https://picsum.photos/id/11/100/60",
            max_width="500",
            max_height="300",
            children=[
                v.Row(
                    class_="fill-height ma-0",
                    align="center",
                    justify="center",
                    children=[v.ProgressCircular(indeterminate=True, color="grey lighten-5")],
                )
            ],
            slots={"placeholder": "placeholder"},
        )
    ],
)
