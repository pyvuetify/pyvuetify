import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-center",
    children=[
        v.Card(
            elevation="2",
            rounded="xl",
            width="400",
            children=[
                v.CardItem(
                    class_="py-4",
                    children=[
                        v.SkeletonLoader(type="list-item-avatar-two-line"),
                    ],
                ),
                v.CardText(
                    class_="pb-4 px-6",
                    children=[
                        v.Video(
                            volume=50,
                            aspect_ratio="4 / 3",
                            background_color="transparent",
                            color="orange",
                            controls_transition="slide-y-transition",
                            elevation="0",
                            image="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-video-poster.jpg",
                            rounded="xl",
                            src="https://cdn.vuetifyjs.com/docs/images/components/v-video/vt-video.mp4",
                            width="100%",
                            detached=True,
                            eager=True,
                            floating=True,
                            hide_play=True,
                            no_fullscreen=True,
                            split_time=True,
                        ),
                    ],
                ),
            ],
        ),
    ],
)
