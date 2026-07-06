import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Video(
            # JS expression, needs manual conversion
            key="resetToPoster",
            # JS expression, needs manual conversion
            image="posterUrl",
            class_="mx-auto mb-3",
            max_width="450",
            src="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-sunflowers.mp4",
            muted=True,
        ),
        v.Html(
            tag="div",
            class_="d-flex justify-center ga-3",
            children=[
                v.Btn(text="randomize image"),
                v.Btn(text="restore original"),
                v.Btn(
                    # JS expression, needs manual conversion
                    disabled="!loaded",
                    prepend_icon="mdi-refresh",
                    text="reset",
                ),
            ],
        ),
    ],
)
