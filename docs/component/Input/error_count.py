import ipyvuetify as v

v.Input(
    error_count=2,
    error_messages=["Fatal error", "Another error"],
    error=True,
    disabled=True,
    children=["Input"],
)
