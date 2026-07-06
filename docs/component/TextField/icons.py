import pyvuetify as v

v.Form(
    children=[
        v.Container(
            children=[
                v.Row(
                    children=[
                        v.Col(
                            cols="12",
                            children=[
                                v.TextField(
                                    v_model="message",
                                    # JS expression, needs manual conversion
                                    append_icon="message ? 'mdi-send' : 'mdi-microphone'",
                                    # JS expression, needs manual conversion
                                    append_inner_icon="marker ? 'mdi-map-marker' : 'mdi-map-marker-off'",
                                    # JS expression, needs manual conversion
                                    prepend_icon="icon",
                                    clear_icon="mdi-close-circle",
                                    label="Message",
                                    type="text",
                                    variant="filled",
                                    clearable=True,
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
