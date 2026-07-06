import pyvuetify as v

v.Card(
    children=[
        v.Toolbar(
            color="surface-light",
            density="compact",
            title="Local hotspots",
            flat=True,
        ),
        v.Row(
            density="comfortable",
            children=[
                v.Col(
                    class_="d-flex align-center",
                    cols="12",
                    sm="6",
                    children=[
                        v.Treeview(
                            v_model_selected="tree",
                            # JS expression, needs manual conversion
                            items="items",
                            # JS expression, needs manual conversion
                            load_children="load",
                            class_="flex-1-0",
                            false_icon="mdi-bookmark-outline",
                            indeterminate_icon="mdi-bookmark-minus",
                            item_title="name",
                            item_value="id",
                            select_strategy="classic",
                            true_icon="mdi-bookmark",
                            return_object=True,
                            selectable=True,
                        ),
                    ],
                ),
                v.Divider(
                    # JS expression, needs manual conversion
                    vertical="$vuetify.display.mdAndUp",
                    class_="my-md-3",
                ),
                v.Col(
                    cols="12",
                    sm="6",
                    children=[
                        v.CardText(
                            children=[
                                v.Html(
                                    tag="div",
                                    class_=("text-title-large font-weight-light text-grey pa-4 text-center"),
                                    children=["Select your favorite breweries"],
                                ),
                                v.Html(
                                    tag="div",
                                    class_="d-flex flex-wrap ga-1",
                                    children=[
                                        v.ScrollXTransition(
                                            group=True,
                                            hide_on_leave=True,
                                            children=[
                                                v.Chip(
                                                    # JS expression, needs manual conversion
                                                    key="selection.id",
                                                    # JS expression, needs manual conversion
                                                    prepend_icon="getIcon()",
                                                    # JS expression, needs manual conversion
                                                    text="selection.name",
                                                    color="grey",
                                                    size="small",
                                                    border=True,
                                                    closable=True,
                                                    label=True,
                                                ),
                                            ],
                                        ),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.Divider(),
        v.Html(
            tag="template",
            children=[
                v.Btn(text="Reset"),
                v.Spacer(),
                v.Btn(
                    append_icon="mdi-content-save",
                    color="surface-light",
                    text="Save",
                    variant="flat",
                    border=True,
                ),
            ],
        ),
    ],
)
