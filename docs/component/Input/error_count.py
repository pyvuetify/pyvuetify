import pyvuetify as v

v.Input(
    error_messages=["Fatal error", "Another error"],
    max_errors="2",
    disabled=True,
    error=True,
    children=["Input"],
)
