import pyvuetify as v

v.Layout(
    height="150",
    children=[
        v.Container(
            class_="d-flex flex-wrap ga-3 justify-center",
            children=[
                v.Btn(text="Timer Top"),
                v.Btn(text="Timer bottom"),
                v.Btn(text="Top Reversed"),
                v.Btn(text="Bottom Reversed"),
            ],
        ),
        v.Snackbar(
            # JS expression, needs manual conversion
            model_value="current === 1",
            text="Timer at the top",
            timer="top",
            timer_color="green",
            contained=True,
        ),
        v.Snackbar(
            # JS expression, needs manual conversion
            model_value="current === 2",
            text="Timer at the bottom",
            timer="bottom",
            timer_color="info",
            contained=True,
        ),
        v.Snackbar(
            # JS expression, needs manual conversion
            model_value="current === 3",
            text="Reversed timer",
            timer_color="warning",
            contained=True,
            reverse_timer=True,
            timer=True,
        ),
        v.Snackbar(
            # JS expression, needs manual conversion
            model_value="current === 4",
            text="Reversed bottom timer",
            timer="bottom",
            timer_color="error",
            contained=True,
            reverse_timer=True,
        ),
    ],
)
