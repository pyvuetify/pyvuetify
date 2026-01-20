import ipyvuetify as v

v.RangeSlider(
    class_="mx-1 my-3",
    v_model=[30, 70],
    disabled=True,
    label="Disabled",
    value="30",
)
