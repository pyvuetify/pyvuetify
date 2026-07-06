import pyvuetify as v

v.Row(
    class_="fill-height",
    children=[
        v.Col(
            children=[
                v.Sheet(
                    height="600",
                    children=[
                        v.Calendar(
                            ref="calendar",
                            v_model="value",
                            # JS expression, needs manual conversion
                            event_color="getEventColor",
                            event_ripple=False,
                            # JS expression, needs manual conversion
                            events="events",
                            color="primary",
                            type="4day",
                            children=[
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.Html(
                                            tag="div",
                                            class_="v-event-draggable",
                                            children=[
                                                v.Html(
                                                    tag="component",
                                                    # JS expression, needs manual conversion
                                                    # is='eventSummary',
                                                ),
                                            ],
                                        ),
                                        v.Html(
                                            tag="div",
                                            class_="v-event-drag-bottom",
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
