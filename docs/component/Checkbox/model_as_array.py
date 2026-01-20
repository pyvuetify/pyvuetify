import ipyvuetify as v

selected = ["John"]

checkbox1 = v.Checkbox(v_model=selected, label="John", value="John")
checkbox2 = v.Checkbox(v_model=selected, label="Jacob", value="Jacob")

v.Container(children=[checkbox1, checkbox2])
