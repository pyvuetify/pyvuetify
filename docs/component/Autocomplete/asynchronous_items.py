import ipyvuetify as v

states = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Florida",
    "Georgia",
]

v.Toolbar(
    dark=True,
    color="teal",
    children=[
        v.ToolbarTitle(children=["State selection"]),
        v.Autocomplete(
            items=states,
            cache_items=True,
            class_="mx-4",
            flat=True,
            hide_no_data=True,
            hide_details=True,
            label="What state are you from?",
            solo_inverted=True,
        ),
        v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
    ],
)
