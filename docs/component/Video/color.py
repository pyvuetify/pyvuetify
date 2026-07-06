import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Sheet(
            class_="px-6 py-2 border-b mb-3",
            color="surface",
            children=[
                v.Html(
                    tag="div",
                    class_="d-flex ga-2 ga-md-12 flex-wrap align-center justify-center",
                    children=[
                        v.Html(
                            tag="div",
                            class_="d-flex align-center ga-3",
                            children=[
                                v.ChipGroup(
                                    v_model="controlsVariant",
                                    mandatory=True,
                                    children=[
                                        v.Chip(
                                            text="default",
                                            value="default",
                                            filter=True,
                                            label=True,
                                        ),
                                        v.Chip(
                                            text="tube",
                                            value="tube",
                                            filter=True,
                                            label=True,
                                        ),
                                        v.Chip(
                                            text="mini",
                                            value="mini",
                                            filter=True,
                                            label=True,
                                        ),
                                    ],
                                ),
                            ],
                        ),
                        v.Html(
                            tag="div",
                            class_="d-flex align-center ga-3",
                            children=[
                                v.ChipGroup(
                                    v_model="features",
                                    multiple=True,
                                    children=[
                                        v.Chip(
                                            text="pills",
                                            value="pills",
                                            filter=True,
                                            label=True,
                                        ),
                                        v.Chip(
                                            text="floating",
                                            value="floating",
                                            filter=True,
                                            label=True,
                                        ),
                                        v.Chip(
                                            text="detached",
                                            value="detached",
                                            filter=True,
                                            label=True,
                                        ),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.Html(
            tag="div",
            class_="d-flex justify-center ga-3 mb-3",
            children=[
                v.Btn(
                    # JS expression, needs manual conversion
                    key="key",
                    variant="text",
                    children=[
                        v.Icon(
                            # JS expression, needs manual conversion
                            color="colors[key]",
                            icon="mdi-circle",
                            start=True,
                        ),
                        v.Icon(
                            icon="mdi-circle-outline",
                            start=True,
                        ),
                        "{{ key }}",
                        v.Menu(
                            close_on_content_click=False,
                            activator="parent",
                            children=[
                                v.ColorPicker(
                                    v_model="colors[key]",
                                    hide_canvas=True,
                                    hide_inputs=True,
                                    hide_sliders=True,
                                    show_swatches=True,
                                ),
                                v.Btn(text="Clear"),
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.Video(
            # JS expression, needs manual conversion
            background_color="colors.background",
            # JS expression, needs manual conversion
            color="colors.color",
            # JS expression, needs manual conversion
            controls_variant="controlsVariant",
            # JS expression, needs manual conversion
            detached="features.includes('detached')",
            # JS expression, needs manual conversion
            floating="features.includes('floating')",
            # JS expression, needs manual conversion
            pills="features.includes('pills')",
            start_at=10,
            # JS expression, needs manual conversion
            track_color="colors.track",
            class_="mx-auto mb-3",
            image="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-sunflowers.jpg",
            max_width="450",
            src="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-sunflowers.mp4",
            eager=True,
            muted=True,
            no_fullscreen=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.IconBtn(icon="mdi-cog"),
                        v.Divider(
                            opacity=".7",
                            thickness="2",
                            inset=True,
                            vertical=True,
                        ),
                        v.IconBtn(icon="mdi-picture-in-picture-bottom-right"),
                        v.IconBtn(
                            class_="mr-2",
                            icon="mdi-cast",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
