from ipywidgets import jslink

import ipyvuetify as v

select = v.Select(chips=True, items=["John", "Jacob"], v_model=[], multiple=True, readonly=True)
switch1 = v.Switch(v_model=[], label="John", value="John")
switch2 = v.Switch(v_model=[], label="Jacob", value="Jacob")

jslink((select, "v_model"), (switch1, "v_model"))
jslink((select, "v_model"), (switch2, "v_model"))

v.Container(class_="mx-auto my-2", fluid=True, children=[select, switch1, switch2])
