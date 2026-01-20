import ipyvuetify as v

alert = v.Alert(
    children=["I'm an Alert Usage Example"],
    type="success",
)

v.Container(children=[alert])
