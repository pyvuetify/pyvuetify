import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-space-around",
    children=[
        # JS expression, needs manual conversion
        v.Icon(icon="`mdiSvg:${mdiAccount}`"),
        # JS expression, needs manual conversion
        v.Icon(icon="`mdiSvg:${mdiPencil}`"),
        # JS expression, needs manual conversion
        v.Icon(icon="`mdiSvg:${mdiShareVariant}`"),
        # JS expression, needs manual conversion
        v.Icon(icon="`mdiSvg:${mdiDelete}`"),
    ],
)
