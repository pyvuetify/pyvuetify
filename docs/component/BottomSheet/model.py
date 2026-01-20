import ipyvuetify as v

open_btn = v.Btn(color="blue", dark=True, children=["Open v-model"])

close_btn = v.Btn(class_="mt-6", text=True, color="red", children=["close"])

bottom_sheet = v.BottomSheet(
    v_model=False,
    children=[
        v.Sheet(
            class_="text-center",
            height="200px",
            children=[
                close_btn,
                v.Html(
                    tag="div",
                    class_="py-3",
                    children=[
                        "This is a bottom sheet using the controlled by v-model instead of activator"
                    ],
                ),
            ],
        )
    ],
)


def toggle_sheet(*args):
    bottom_sheet.v_model = not bottom_sheet.v_model


open_btn.on_event("click", toggle_sheet)
close_btn.on_event("click", toggle_sheet)

v.Container(class_="text-center", children=[open_btn, bottom_sheet])
