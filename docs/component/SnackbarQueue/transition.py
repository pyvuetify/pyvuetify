import pyvuetify as v

v.Layout(
    height="250",
    children=[
        v.Container(
            class_="d-flex flex-column align-center gr-4 align-self-start",
            children=[
                v.IconBtn(
                    color="primary",
                    icon="mdi-refresh",
                ),
                v.Code(
                    class_="px-3 pb-0",
                    children=["{{ currentLocation }}"],
                ),
            ],
        ),
        v.SnackbarQueue(
            ref="queue",
            v_model="messages",
            # JS expression, needs manual conversion
            location="currentLocation",
            timeout="3000",
            total_visible="4",
            transition="bouncy-slide-auto",
            closable=True,
            contained=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.IconBtn(
                            aria_label="Close",
                            icon="$close",
                            size="small",
                            variant="text",
                        ),
                        v.Btn(
                            text="Close",
                            variant="text",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
