import pyvuetify as v

v.Html(
    tag="div",
    class_="pb-3",
    children=[
        v.Video(
            # JS expression, needs manual conversion
            controls_props="{ class: 'px-4' }",
            rounded=["lg", "pill"],
            start_at=10,
            class_="mx-auto",
            height="260",
            image="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-sunflowers.jpg",
            max_width="450",
            src="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-sunflowers.mp4",
            eager=True,
            floating=True,
            muted=True,
        ),
    ],
)
