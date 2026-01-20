import ipyvuetify as v

alert = v.Alert(
    value=True,
    color="pink",
    dark=True,
    border="top",
    icon="mdi-home",
    transition="scale-transition",
    children=[
        "Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, "
        "posuere eget, vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur "
        "ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Phasellus nec "
        "sem in justo pellentesque facilisis. Phasellus magna. Cras risus ipsum, faucibus ut, "
        "ullamcorper id, varius ac, leo. In hac habitasse platea dictumst. Praesent turpis."
    ],
)

btn = v.Btn(color="primary", children=["Toggle"])
btn.on_event("click", lambda w, e, d: setattr(alert, "value", not alert.value))

v.Container(children=[btn, alert])
