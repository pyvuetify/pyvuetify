import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Alert(
            v_model="alert",
            border="start",
            close_label="Close Alert",
            color="deep-purple-accent-4",
            title="Closable Alert",
            variant="tonal",
            closable=True,
            children=[
                (
                    "Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras "
                    "dapibus. Vivamus consectetuer hendrerit lacus. Sed mollis, eros et ultrices "
                    "tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Sed "
                    "mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing "
                    "dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, "
                    "tincidunt non, euismod vitae, posuere imperdiet, leo."
                ),
            ],
        ),
        v.Html(
            tag="div",
            class_="text-center",
            children=[
                v.Btn(children=["Reset"]),
            ],
        ),
    ],
)
