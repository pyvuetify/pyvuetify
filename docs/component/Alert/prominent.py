import pyvuetify as v

v.Container(
    children=[
        v.Alert(
            klass="ma-1",
            prominent=True,
            type="error",
            children=[
                v.Row(
                    align="center",
                    children=[
                        v.Col(
                            class_="grow",
                            children=[
                                "Nunc nonummy metus. Nunc interdum lacus sit amet orci. Nullam dictum felis "
                                "eu pede mollis pretium. Cras id dui."
                            ],
                        ),
                        v.Col(class_="shrink", children=[v.Btn(children=["Take action"])]),
                    ],
                )
            ],
        ),
        v.Alert(
            klass="ma-1",
            color="blue-grey",
            dark=True,
            dense=True,
            icon="mdi-school",
            prominent=True,
            children=["Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui."],
        ),
        v.Alert(
            klass="ma-1",
            icon="mdi-shield-lock-outline",
            prominent=True,
            type="info",
            children=["Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."],
        ),
    ]
)
