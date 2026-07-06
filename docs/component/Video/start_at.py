import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-center",
    children=[
        v.Video(
            start_at=10,
            class_="align-self-center",
            image="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-sunflowers.jpg",
            max_width="450",
            src="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-sunflowers.mp4",
            eager=True,
            muted=True,
        ),
    ],
)
