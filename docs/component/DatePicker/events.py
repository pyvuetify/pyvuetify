import pyvuetify as v

v.Container(
    children=[
        v.Row(
            class_="justify-space-between",
            children=[
                v.Html(
                    tag="div",
                    children=[
                        v.Html(
                            tag="div",
                            class_="subheading mb-5 font-weight-medium",
                            children=["Defined by array"],
                        ),
                        v.DatePicker(
                            v_model="date1",
                            # JS expression, needs manual conversion
                            events="arrayEvents",
                            event_color="green lighten-1",
                        ),
                    ],
                ),
                v.Html(
                    tag="div",
                    children=[
                        v.Html(
                            tag="div",
                            class_="subheading mb-5 font-weight-medium",
                            children=["Defined by function"],
                        ),
                        v.DatePicker(
                            v_model="date2",
                            # JS expression, needs manual conversion
                            event_color="date => date[9] % 2 ? 'red' : 'yellow'",
                            # JS expression, needs manual conversion
                            events="functionEvents",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
