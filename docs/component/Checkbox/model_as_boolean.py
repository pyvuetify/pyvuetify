import ipyvuetify as v

checkbox1 = v.Checkbox(v_model=True, label="Checkbox 1")
checkbox2 = v.Checkbox(v_model=False, label="Checkbox 2")
checkbox1.label = "Checked" if checkbox1.v_model else "Unchecked"
checkbox2.label = "Checked" if checkbox2.v_model else "Unchecked"

v.Container(children=[checkbox1, checkbox2])
