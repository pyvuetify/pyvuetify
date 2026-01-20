import ipyvuetify as v

v.Container(
    children=[
        v.Alert(type="success", children=["I'm a success alert."]),
        v.Alert(type="info", children=["I'm an info alert."]),
        v.Alert(type="warning", children=["I'm a warning alert."]),
        v.Alert(type="error", children=["I'm an error alert."]),
    ]
)
