from ipywidgets import jslink

import ipyvuetify as v

slider = v.Slider(min=200, max=500, step=1, v_model=300)
img = v.Img(
    aspect_ratio=16 / 9, width=300, src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
)
jslink((slider, "v_model"), (img, "width"))

v.Container(children=[slider, img])
