import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Sheet(
            class_="px-6 py-2 border-b",
            color="surface",
            children=[
                v.Html(
                    tag="div",
                    class_="d-flex gx-3 flex-wrap",
                    children=[
                        v.Html(
                            tag="div",
                            class_="d-flex align-center ga-3",
                            children=[
                                v.Html(
                                    tag="span",
                                    class_="mr-3",
                                    children=["Lines:"],
                                ),
                                v.ChipGroup(
                                    v_model="indentLines",
                                    children=[
                                        v.Chip(
                                            value=False,
                                            text="none",
                                            filter=True,
                                            label=True,
                                        ),
                                        v.Chip(
                                            value=True,
                                            text="default",
                                            filter=True,
                                            label=True,
                                        ),
                                        v.Chip(
                                            text="simple",
                                            value="simple",
                                            filter=True,
                                            label=True,
                                        ),
                                    ],
                                ),
                            ],
                        ),
                        v.Spacer(),
                        v.Html(
                            tag="div",
                            class_="d-flex align-center ga-6 text-no-wrap",
                            children=[
                                v.Switch(
                                    v_model="actionIcons",
                                    color="success",
                                    density="comfortable",
                                    label="action icons",
                                    hide_details=True,
                                ),
                                v.Switch(
                                    v_model="prependIcons",
                                    color="success",
                                    density="comfortable",
                                    label="prepend icons",
                                    hide_details=True,
                                ),
                                v.Switch(
                                    v_model="separateRoots",
                                    # JS expression, needs manual conversion
                                    disabled="indentLines !== true",
                                    color="success",
                                    density="comfortable",
                                    label="separate roots",
                                    hide_details=True,
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.Container(
            class_="d-flex ga-8 justify-center flex-wrap",
            fluid=True,
            children=[
                v.Sheet(
                    width="400",
                    children=[
                        v.Treeview(
                            # JS expression, needs manual conversion
                            hide_actions="!actionIcons",
                            # JS expression, needs manual conversion
                            indent_lines="indentLines",
                            # JS expression, needs manual conversion
                            items="items1",
                            # JS expression, needs manual conversion
                            separate_roots="separateRoots",
                            density="compact",
                            item_value="id",
                            max_width="400",
                            open_all=True,
                            open_on_click=True,
                            children=[
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.Icon(
                                            # JS expression, needs manual conversion
                                            icon="getIcon(item, isOpen)",
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
)
