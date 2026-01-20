from ipywidgets import jslink

import ipyvuetify as v

chip = v.FileInput(
    v_model=None,
    chips=True,
    label="File input w/ chips",
)
small_chip = v.FileInput(
    v_model=None,
    small_chips=True,
    label="File input w/ small chips",
)

jslink((chip, "v_model"), (small_chip, "v_model"))

v.Container(children=[chip, small_chip])
