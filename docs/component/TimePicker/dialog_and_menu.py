import pyvuetify as v

v.Container(
    children=[
        v.Row(
            class_="justify-space-around",
            children=[
                v.Col(
                    cols="11",
                    sm="5",
                    children=[
                        v.TextField(
                            # JS expression, needs manual conversion
                            model_value="time",
                            label="Picker in menu",
                            prepend_icon="mdi-clock-time-four-outline",
                            readonly=True,
                            children=[
                                v.Menu(
                                    v_model="showMenu",
                                    close_on_content_click=False,
                                    activator="parent",
                                    min_width="0",
                                    children=[
                                        v.TimePicker(v_model="time"),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
                v.Col(
                    cols="11",
                    sm="5",
                    children=[
                        v.TextField(
                            # JS expression, needs manual conversion
                            model_value="time",
                            label="Picker in dialog",
                            prepend_icon="mdi-clock-time-four-outline",
                            readonly=True,
                            children=[
                                v.Dialog(
                                    v_model="showDialog",
                                    activator="parent",
                                    width="auto",
                                    children=[
                                        v.TimePicker(v_model="time"),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
