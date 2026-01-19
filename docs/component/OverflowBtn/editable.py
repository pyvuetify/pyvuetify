import ipyvuetify as v

items = ["Arial", "Calibri", "Courier", "Verdana"]

v.OverflowBtn(
    label="Select font",
    items=items,
    v_model="Arial",
    editable=True,
)
