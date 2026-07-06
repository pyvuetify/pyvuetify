import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex align-center justify-center ga-6 flex-wrap",
    children=[
        v.DefaultsProvider(
            # JS expression, needs manual conversion
            defaults="{ VVideoControls: { VIconBtn: { color: 'red', border: 'sm' } } }",
            children=[
                v.Video(
                    aspect_ratio="1",
                    color="blue",
                    controls_variant="mini",
                    image="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-sunflowers.jpg",
                    rounded="lg",
                    src="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-sunflowers.mp4",
                    style_="--v-video-controls-pill-border-radius: 8px",
                    width="300",
                    eager=True,
                    hide_fullscreen=True,
                    hide_volume=True,
                    muted=True,
                    pills=True,
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Html(
                                    tag="viconbtn",
                                    class_="mx-n1",
                                    icon="mdi-skip-previous",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
