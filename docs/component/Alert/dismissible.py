import ipyvuetify as v

alert = v.Alert(
    v_model=True,
    border="left",
    close_text="Close Alert",
    color="deep-purple accent-4",
    dark=True,
    dismissible=True,
    children=[
        "Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras "
        "dapibus. Vivamus consectetuer hendrerit lacus. Sed mollis, eros et ultrices "
        "tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Sed "
        "mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing "
        "dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, "
        "tincidunt non, euismod vitae, posuere imperdiet, leo."
    ],
)

v.Container(children=[alert])
