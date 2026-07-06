import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Video(
            start_at=10,
            # JS expression, needs manual conversion
            volume_props="{ inline: true }",
            class_="mx-auto",
            controls_variant="mini",
            height="300",
            image="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-sunflowers.jpg",
            max_width="500",
            rounded="lg",
            src="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-sunflowers.mp4",
            eager=True,
            hide_overlay=True,
            pills=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.DefaultsProvider(
                            defaults=(
                                "{ VIconBtn: { color: 'red', rounded: 'lg', size: '36', variant: "
                                "'flat' }, VSlider: { color: 'red', trackColor: 'white' } }"
                                # JS expression, needs manual conversion
                            ),
                            children=[
                                v.Html(
                                    tag="div",
                                    class_="d-flex ga-3 w-100 px-2",
                                    children=[
                                        v.IconBtn(
                                            # JS expression, needs manual conversion
                                            aria_label="labels.playAction",
                                            # JS expression, needs manual conversion
                                            icon='playing ? "mdi-pause" : "mdi-play"',
                                        ),
                                        v.Slider(
                                            # JS expression, needs manual conversion
                                            aria_label="labels.seek",
                                            # JS expression, needs manual conversion
                                            model_value="progress",
                                            width="75%",
                                            no_keyboard=True,
                                        ),
                                        v.VideoVolume(
                                            v_model="volume.value",
                                            # JS expression, needs manual conversion
                                            label="labels.volumeAction",
                                            # JS expression, needs manual conversion
                                            slider_props='{ maxWidth: 100, width: "25%" }',
                                            class_="ga-3",
                                            inline=True,
                                        ),
                                        v.IconBtn(
                                            # JS expression, needs manual conversion
                                            aria_label="labels.fullscreenAction",
                                            # JS expression, needs manual conversion
                                            icon='fullscreen ? "$fullscreenExit" : "$fullscreen"',
                                        ),
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
