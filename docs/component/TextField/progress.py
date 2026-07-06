import pyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.CheckboxBtn(
            v_model="custom",
            label="Loading",
        ),
        v.TextField(
            v_model="value",
            label="Type characters to change the loader color",
            placeholder="Start typing...",
            loading=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.ProgressLinear(
                            # JS expression, needs manual conversion
                            active="custom",
                            # JS expression, needs manual conversion
                            color="color",
                            # JS expression, needs manual conversion
                            model_value="progress",
                            height="7",
                            indeterminate=True,
                        ),
                    ],
                ),
            ],
        ),
    ],
)
