import pyvuetify as v

alert = v.Alert(
    klass="ma-1",
    children=["I'm an Alert Usage Example"],
    type="success",
)

v.Container(children=[alert])
