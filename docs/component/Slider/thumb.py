from ipywidgets import jslink

import ipyvuetify as v

emojis = ["😭", "😢", "☹️", "🙁", "😐", "🙂", "😊", "😁", "😄", "😍"]

slider = v.Slider(
    class_="mt-4",
    label="Show thumb when using",
    v_model=50,
    thumb_label=True,
)

slider2 = v.Slider(
    class_="mt-4",
    label="Always show thumb label",
    v_model=50,
    thumb_label="always",
)

slider3 = v.Slider(
    class_="mt-4",
    label="Custom thumb size",
    v_model=50,
    thumb_size=24,
    thumb_label="always",
)

slider4 = v.Slider(
    class_="mt-4",
    label="Custom thumb label",
    v_model=50,
    thumb_label="always",
    v_slots=[
        {
            "name": "thumb_label",
            "variable": "props",
            "children": emojis[
                # min((int('props.value') // 10), 9) no idea how to do that
                min((int(6) // 10), 9)
            ],
        }
    ],
)

jslink((slider, "v_model"), (slider2, "v_model"))
jslink((slider, "v_model"), (slider3, "v_model"))
jslink((slider, "v_model"), (slider4, "v_model"))

v.Col(class_="mx-1 my-2", children=[slider, slider2, slider3, slider4])
