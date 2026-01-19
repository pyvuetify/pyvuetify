from ipywidgets import jslink

import ipyvuetify as v

contains = v.Checkbox(label="Contain", v_model=False)
max_height = v.Slider(label="Max Height", min=100, max=500, step=1, v_model=300)
max_width = v.Slider(label="Max Width", min=100, max=500, step=1, v_model=400)

img = v.Img(src="https://picsum.photos/id/11/500/300", contain=False, max_height=300, max_width=400)

jslink((contains, "v_model"), (img, "contain"))
jslink((max_height, "v_model"), (img, "max_height"))
jslink((max_width, "v_model"), (img, "max_width"))

v.Container(children=[contains, max_height, max_width, img])
