import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="600",
    children=[
        v.Toolbar(
            dense=True,
            flat=True,
            children=[
                v.ToolbarTitle(
                    children=[
                        v.Html(
                            tag="span",
                            class_="text-subheading",
                            children=["METRONOME"],
                        ),
                    ],
                ),
                v.Btn(
                    icon="mdi-share-variant",
                    variant="text",
                ),
            ],
        ),
        v.CardText(
            children=[
                v.Row(
                    class_="mb-4 justify-space-between",
                    children=[
                        v.Col(
                            class_="text-left",
                            children=[
                                v.Html(
                                    tag="span",
                                    class_="text-display-large font-weight-light",
                                ),
                                v.Html(
                                    tag="span",
                                    class_="subheading font-weight-light me-1",
                                    children=["BPM"],
                                ),
                                v.FadeTransition(
                                    children=[
                                        v.Avatar(
                                            # JS expression, needs manual conversion
                                            color="color",
                                            style_="""{
                                                animationDuration: animationDuration
                                            # JS expression, needs manual conversion

                                            }""",
                                            class_="mb-1 v-avatar--metronome",
                                            size="12",
                                        ),
                                    ],
                                ),
                            ],
                        ),
                        v.Col(
                            class_="text-right",
                            children=[
                                v.Btn(
                                    # JS expression, needs manual conversion
                                    color="color",
                                    elevation="0",
                                    theme="dark",
                                    icon=True,
                                    children=[
                                        v.Icon(
                                            # JS expression, needs manual conversion
                                            icon="isPlaying ? 'mdi-pause' : 'mdi-play'",
                                            size="large",
                                        ),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
                v.Slider(
                    v_model="bpm",
                    # JS expression, needs manual conversion
                    color="color",
                    step=1,
                    max="218",
                    min="40",
                    track_color="grey",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Btn(
                                    # JS expression, needs manual conversion
                                    color="color",
                                    icon="mdi-minus",
                                    size="small",
                                    variant="text",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
