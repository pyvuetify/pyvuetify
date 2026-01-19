import ipyvuetify as v

toggle_multiple = v.BtnToggle(
    v_model=[0, 1, 2],
    multiple=True,
    children=[
        v.Btn(children=[v.Icon(children=["mdi-format-align-left"])]),
        v.Btn(children=[v.Icon(children=["mdi-format-align-center"])]),
        v.Btn(children=[v.Icon(children=["mdi-format-align-right"])]),
        v.Btn(children=[v.Icon(children=["mdi-format-align-justify"])]),
    ],
)

v.Container(children=[toggle_multiple])
