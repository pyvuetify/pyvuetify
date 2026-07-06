import pyvuetify as v

v.Toolbar(
    color="teal",
    children=[
        v.ToolbarTitle(children=["State selection"]),
        v.Autocomplete(
            v_model="select",
            v_model_search="search",
            # JS expression, needs manual conversion
            items="items",
            # JS expression, needs manual conversion
            loading="loading",
            autocomplete="off",
            class_="mx-4",
            density="comfortable",
            label="What state are you from?",
            placeholder="Start typing...",
            style_="max-width: 300px",
            hide_details=True,
            hide_no_data=True,
        ),
        v.Btn(icon="mdi-dots-vertical"),
    ],
)
