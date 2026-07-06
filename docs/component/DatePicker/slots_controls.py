import pyvuetify as v

v.Container(
    class_="d-flex align-start ga-12 justify-center flex-wrap",
    children=[
        v.DatePicker(
            # JS expression, needs manual conversion
            max="new Date()",
            class_="weekdays-primary",
            elevation="5",
            weekday_format="short",
            hide_header=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(
                            # JS expression, needs manual conversion
                            disabled="disabled.includes('prev-month')",
                            color="primary",
                            icon="$prev",
                        ),
                        v.Spacer(),
                        v.Html(
                            tag="div",
                            class_="text-center",
                            children=[
                                v.Html(
                                    tag="div",
                                    class_="text-body-small my-n1 text-primary",
                                    children=[
                                        "{{ monthYearText.split(' ')[1] }}",
                                    ],
                                ),
                                v.Html(
                                    tag="div",
                                    class_="text-body-large",
                                    children=[
                                        "{{ monthYearText.split(' ')[0] }}",
                                    ],
                                ),
                            ],
                        ),
                        v.Spacer(),
                        v.Btn(
                            # JS expression, needs manual conversion
                            disabled="disabled.includes('next-month')",
                            color="primary",
                            icon="$next",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
