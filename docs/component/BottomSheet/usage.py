import ipyvuetify as v

close_btn = v.Btn(class_="my-6", depressed=True, color="error", children=["close"])

bottom_sheet = v.BottomSheet(
    v_model=False,
    v_slots=[
        {
            "name": "activator",
            "variable": "x",
            "children": v.Btn(color="purple", dark=True, children=["Open Playground"]),
        }
    ],
    children=[v.Sheet(class_="text-center", height="200px", children=[close_btn])],
)

close_btn.on_event("click", lambda *args: setattr(bottom_sheet, "v_model", False))

v.Container(
    class_="fill-height",
    children=[v.Row(align="center", justify="center", children=[bottom_sheet])],
)
