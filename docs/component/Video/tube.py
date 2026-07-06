import pyvuetify as v

v.Video(
    volume=50,
    # JS expression, needs manual conversion
    volume_props="{ direction: 'horizontal', menuProps: { location: 'top left' } }",
    class_="mx-auto",
    controls_variant="tube",
    density="comfortable",
    image="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-video-poster.jpg",
    max_width="450",
    rounded="lg",
    src="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-video.mp4",
    track_color="red",
    eager=True,
    children=[
        v.Html(
            tag="template",
            children=[
                v.IconBtn(icon="mdi-skip-next"),
            ],
        ),
    ],
)
