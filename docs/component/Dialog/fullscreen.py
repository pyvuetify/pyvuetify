import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center pa-4",
    children=[
        v.Dialog(
            v_model="dialog",
            transition="dialog-bottom-transition",
            fullscreen=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(
                            prepend_icon="mdi-cog",
                            size="small",
                            text="Settings",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
