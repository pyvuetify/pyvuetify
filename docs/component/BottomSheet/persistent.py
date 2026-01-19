import ipyvuetify as v

close_btn = v.Btn(class_="mt-6", text=True, color="error", children=["close"])

bottom_sheet = v.BottomSheet(
    v_model=False,
    persistent=True,
    v_slots=[
        {
            "name": "activator",
            "variable": "x",
            "children": v.Btn(color="green", dark=True, children=["Open Persistent"]),
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
                    class_="py-3",
                    children=["This is a bottom sheet using the persistent prop"],
                ),
            ],
        )
    ],
)

close_btn.on_event("click", lambda *args: setattr(bottom_sheet, "v_model", False))

v.Container(class_="text-center", children=[bottom_sheet])
