import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center pa-4",
    children=[
        v.Btn(children=["Open Dialog"]),
        v.Dialog(
            v_model="dialog",
            width="auto",
            children=[
                v.Card(
                    max_width="400",
                    prepend_icon="mdi-update",
                    text="Your application will relaunch automatically after the update is complete.",
                    title="Update in progress",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Btn(
                                    class_="ms-auto",
                                    text="Ok",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
