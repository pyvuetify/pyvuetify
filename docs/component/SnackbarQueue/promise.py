import pyvuetify as v

v.Layout(
    height="200",
    children=[
        v.Container(
            class_="d-flex justify-center ga-3",
            children=[
                v.Btn(
                    color="success",
                    children=["Succeeding Task"],
                ),
                v.Btn(
                    color="error",
                    children=["Failing Task"],
                ),
            ],
        ),
        v.SnackbarQueue(
            v_model="messages",
            total_visible=3,
            contained=True,
        ),
    ],
)
