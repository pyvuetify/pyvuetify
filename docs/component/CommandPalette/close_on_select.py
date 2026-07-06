import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center my-3",
    children=[
        v.Btn(text="Open Command Palette"),
        v.CommandPalette(
            v_model="dialog",
            # JS expression, needs manual conversion
            items="items",
            placeholder="Search commands...",
        ),
        v.Alert(
            # JS expression, needs manual conversion
            text="`Last action: ${lastAction || 'none'}`",
            class_="mt-3",
            type="info",
            variant="tonal",
        ),
    ],
)
