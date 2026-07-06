import pyvuetify as v

v.Container(
    class_="d-flex flex-wrap justify-center align-center ga-8",
    children=[
        v.Video(
            max_width="450",
            src="https://www.pexels.com/download/video/3620220",
            error=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Html(
                            tag="div",
                            class_="d-flex align-center ga-4",
                            children=[
                                v.Icon(
                                    class_="opacity-60",
                                    color="error",
                                ),
                                v.Html(
                                    tag="div",
                                    children=[
                                        v.Html(
                                            tag="div",
                                            class_="font-weight-bold mb-1",
                                            children=["Video unavailable"],
                                        ),
                                        v.Html(
                                            tag="div",
                                            class_="text-body-medium",
                                            children=[
                                                "Report problem to our",
                                                v.Html(
                                                    tag="a",
                                                    href="",
                                                    children=["support"],
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
        ),
    ],
)
