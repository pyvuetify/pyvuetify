import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-center",
    children=[
        v.Video(
            class_="align-self-center",
            image="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-sunflowers.jpg",
            max_width="450",
            src="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-sunflowers.mp4",
            eager=True,
            muted=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Html(
                            tag="div",
                            class_="d-flex pa-2 pointer-pass-through",
                            children=[
                                v.ListItem(
                                    class_="py-2 pl-3 pr-8 video-header-element",
                                    prepend_avatar="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-sunflowers.jpg",
                                    rounded="pill",
                                    subtitle="Example video",
                                    title="Sunflowers",
                                ),
                                v.IconBtn(
                                    class_="ml-auto video-header-element",
                                    icon="mdi-share-variant",
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
