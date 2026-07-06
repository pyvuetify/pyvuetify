import pyvuetify as v

v.Layout(
    children=[
        v.Container(
            children=[
                v.Fab(
                    icon="mdi-refresh",
                    location="top end",
                    app=True,
                ),
                v.Html(
                    tag="div",
                    class_="d-flex flex-wrap justify-space-around ga-6",
                    children=[
                        v.DatePicker(
                            v_model="value",
                            color="primary",
                            landscape=True,
                        ),
                        v.DatePicker(
                            v_model="value",
                            color="purple",
                            header_date_format="monthAndDate",
                            landscape_header_width="250",
                            landscape=True,
                        ),
                    ],
                ),
            ],
        ),
    ],
)
