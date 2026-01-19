import ipyvuetify as v


def on_icon_click(widget, event, data):
    print("Icon clicked!")


banner = v.Banner(
    single_line=True,
    v_slots=[
        {
            "name": "icon",
            "children": v.Icon(
                color="warning", size=36, children=["mdi-wifi-strength-alert-outline"]
            ),
        },
        {
            "name": "actions",
            "children": v.Btn(color="primary", text=True, children=["Connection Settings"]),
        },
    ],
    children=["Unable to verify your Internet connection"],
)

banner.on_event("click:icon", on_icon_click)

v.Container(children=[banner])
