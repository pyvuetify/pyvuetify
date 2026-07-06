import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Switch(
            v_model="mirror",
            label="Toggle mirror",
        ),
        v.Timeline(
            # JS expression, needs manual conversion
            mirror="mirror",
            children=[
                v.TimelineItem(
                    # JS expression, needs manual conversion
                    key="n",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Html(
                                    tag="span",
                                    children=["Tus eu perfecto"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
