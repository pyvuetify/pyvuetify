import pyvuetify as v

v.Input(
    # JS expression, needs manual conversion
    messages="messages",
    hint="I am hint",
    persistent_hint=True,
    children=["Input"],
)
