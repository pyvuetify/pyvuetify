import pyvuetify as v

v.Container(
    children=[
        v.Alert(klass="ma-1", type="success", children=["I'm a success alert."]),
        v.Alert(klass="ma-1", type="info", children=["I'm an info alert."]),
        v.Alert(klass="ma-1", type="warning", children=["I'm a warning alert."]),
        v.Alert(klass="ma-1", type="error", children=["I'm an error alert."]),
    ]
)
