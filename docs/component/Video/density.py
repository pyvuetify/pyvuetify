import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex flex-wrap align-start justify-center ga-6",
    children=[
        v.Html(
            tag="div",
            # JS expression, needs manual conversion
            key="density",
            children=[
                v.Video(
                    # JS expression, needs manual conversion
                    density="density",
                    height="150",
                    image="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-sunflowers.jpg",
                    rounded="lg",
                    src="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-sunflowers.mp4",
                    start_at="10",
                    volume="80",
                    width="250",
                    detached=True,
                    eager=True,
                ),
                v.Overlay(
                    children=[
                        v.Chip(
                            class_="ma-2",
                            children=["{{ density }}"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
