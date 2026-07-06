import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center my-3",
    children=[
        v.Btn(text="Open Command Palette"),
        v.CommandPalette(
            v_model="dialog",
            v_model_search="search",
            # JS expression, needs manual conversion
            items="items",
            placeholder="Search commands...",
        ),
        v.Alert(
            # JS expression, needs manual conversion
            text="`Action: ${lastAction}`",
            type="info",
            variant="tonal",
        ),
    ],
)
