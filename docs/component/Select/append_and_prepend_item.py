import pyvuetify as v

v.Select(
    v_model="selectedFruits",
    # JS expression, needs manual conversion
    items="fruits",
    label="Favorite Fruits",
    multiple=True,
    children=[
        v.Html(
            tag="template",
            children=[
                v.ListItem(
                    title="Select All",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.CheckboxBtn(
                                    # JS expression, needs manual conversion
                                    color="likesSomeFruit ? 'indigo-darken-4' : undefined",
                                    # JS expression, needs manual conversion
                                    indeterminate="likesSomeFruit && !likesAllFruit",
                                    # JS expression, needs manual conversion
                                    model_value="likesAllFruit",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
