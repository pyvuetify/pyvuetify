import ipyvuetify as v

checkbox = v.Checkbox(v_model=True, label="Visible")


def on_dismiss(*args):
    banner.v_model = False
    checkbox.v_model = False


def on_checkbox_change(widget, event, data):
    banner.v_model = data


checkbox.on_event("change", on_checkbox_change)

banner = v.Banner(
    v_model=True,
    single_line=True,
    transition="slide-y-transition",
    v_slots=[
        {
            "name": "actions",
            "children": [
                v.Btn(text=True, color="primary", children=["Dismiss"], on_click=on_dismiss),
                v.Btn(text=True, color="primary", children=["Retry"]),
            ],
        }
    ],
    children=["No Internet connection"],
)

v.Container(children=[checkbox, banner])
