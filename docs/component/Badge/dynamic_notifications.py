import ipyvuetify as v

messages = 0


def update_messages(*args):
    global messages
    messages += 1
    badge.content = messages
    badge.value = messages > 0


def clear_messages(*args):
    global messages
    messages = 0
    badge.content = 0
    badge.value = False


btn_send = v.Btn(class_="mx-1", color="primary", children=["Send Message"])
btn_send.on_event("click", update_messages)

btn_clear = v.Btn(class_="mx-1", color="error", children=["Clear Notifications"])
btn_clear.on_event("click", clear_messages)

badge = v.Badge(
    content=5,
    value=True,
    color="green",
    overlap=True,
    children=[v.Icon(large=True, children=["mdi-vuetify"])],
)

v.Container(
    class_="d-inline-flex",
    children=[v.Html(tag="div", children=[btn_send, btn_clear]), v.Spacer(), badge],
)
