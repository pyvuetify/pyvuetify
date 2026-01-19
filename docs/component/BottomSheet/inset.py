import ipyvuetify as v

close_btn = v.Btn(class_="mt-6", text=True, color="error", children=["close"])

bottom_sheet = v.BottomSheet(
    v_model=False,
    inset=True,
    v_slots=[
        {
            "name": "activator",
            "variable": "x",
            "children": v.Btn(color="orange", dark=True, children=["Open Inset"]),
        }
    ],
    children=[
        v.Sheet(
            class_="text-center",
            height="200px",
            children=[
                close_btn,
                v.Html(
                    tag="div",
                    class_="my-3",
                    children=["This is a bottom sheet using the inset prop"],
                ),
            ],
        )
    ],
)

close_btn.on_event("click", lambda *args: setattr(bottom_sheet, "v_model", False))

v.Container(class_="text-center", children=[bottom_sheet])
