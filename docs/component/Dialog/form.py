import pyvuetify as v

v.Html(
    tag="div",
    class_="pa-4 text-center",
    children=[
        v.Dialog(
            v_model="dialog",
            max_width="600",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(
                            class_="text-none font-weight-regular",
                            prepend_icon="mdi-account",
                            text="Edit Profile",
                            variant="tonal",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
