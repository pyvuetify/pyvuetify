import pyvuetify as v

v.Card(
    children=[
        v.Toolbar(
            color="primary",
            title="User Profile",
        ),
        v.Html(
            tag="div",
            class_="d-flex flex-row",
            children=[
                v.Tabs(
                    v_model="tab",
                    color="primary",
                    direction="vertical",
                    children=[
                        v.Tab(
                            prepend_icon="mdi-account",
                            text="Option 1",
                            value="option-1",
                        ),
                        v.Tab(
                            prepend_icon="mdi-lock",
                            text="Option 2",
                            value="option-2",
                        ),
                        v.Tab(
                            prepend_icon="mdi-access-point",
                            text="Option 3",
                            value="option-3",
                        ),
                    ],
                ),
                v.TabsWindow(
                    v_model="tab",
                    children=[
                        v.TabsWindowItem(
                            value="option-1",
                            children=[
                                v.Card(
                                    flat=True,
                                    children=[
                                        v.CardText(
                                            children=[
                                                v.Html(
                                                    tag="p",
                                                    children=[
                                                        (
                                                            "Sed aliquam ultrices mauris. Donec "
                                                            "posuere vulputate arcu. Morbi ac "
                                                            "felis. Etiam feugiat lorem non metus. "
                                                            "Sed a libero."
                                                        ),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="p",
                                                    children=[
                                                        (
                                                            "Nam ipsum risus, rutrum vitae, "
                                                            "vestibulum eu, molestie vel, lacus. "
                                                            "Aenean tellus metus, bibendum sed, "
                                                            "posuere ac, mattis non, nunc. Aliquam "
                                                            "lobortis. Aliquam lobortis. "
                                                            "Suspendisse non nisl sit amet velit "
                                                            "hendrerit rutrum."
                                                        ),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="p",
                                                    class_="mb-0",
                                                    children=[
                                                        (
                                                            "Phasellus dolor. Fusce neque. Fusce fermentum "
                                                            "odio nec arcu. Pellentesque libero tortor, "
                                                            "tincidunt et, tincidunt eget, semper nec, quam. "
                                                            "Phasellus blandit leo ut odio."
                                                        ),
                                                    ],
                                                ),
                                            ],
                                        ),
                                    ],
                                ),
                            ],
                        ),
                        v.TabsWindowItem(
                            value="option-2",
                            children=[
                                v.Card(
                                    flat=True,
                                    children=[
                                        v.CardText(
                                            children=[
                                                v.Html(
                                                    tag="p",
                                                    children=[
                                                        (
                                                            "Morbi nec metus. Suspendisse faucibus, nunc et "
                                                            "pellentesque egestas, lacus ante convallis tellus, "
                                                            "vitae iaculis lacus elit id tortor. Sed mollis, eros "
                                                            "et ultrices tempus, mauris ipsum aliquam libero, non "
                                                            "adipiscing dolor urna a orci. Curabitur ligula sapien, "
                                                            "tincidunt non, euismod vitae, posuere imperdiet, leo. "
                                                            "Nunc sed turpis."
                                                        ),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="p",
                                                    children=[
                                                        (
                                                            "Suspendisse feugiat. Suspendisse faucibus, nunc "
                                                            "et pellentesque egestas, lacus ante convallis "
                                                            "tellus, vitae iaculis lacus elit id tortor. Proin "
                                                            "viverra, ligula sit amet ultrices semper, ligula "
                                                            "arcu tristique sapien, a accumsan nisi mauris ac "
                                                            "eros. In hac habitasse platea dictumst. Fusce ac "
                                                            "felis sit amet ligula pharetra condimentum."
                                                        ),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="p",
                                                    children=[
                                                        (
                                                            "Sed consequat, leo eget bibendum sodales, "
                                                            "augue velit cursus nunc, quis gravida magna "
                                                            "mi a libero. Nam commodo suscipit quam. In "
                                                            "consectetuer turpis ut velit. Sed cursus "
                                                            "turpis vitae tortor. Aliquam eu nunc."
                                                        ),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="p",
                                                    children=[
                                                        (
                                                            "Etiam ut purus mattis mauris sodales aliquam. "
                                                            "Ut varius tincidunt libero. Aenean viverra "
                                                            "rhoncus pede. Duis leo. Fusce fermentum odio "
                                                            "nec arcu."
                                                        ),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="p",
                                                    class_="mb-0",
                                                    children=[
                                                        (
                                                            "Donec venenatis vulputate lorem. Aenean viverra "
                                                            "rhoncus pede. In dui magna, posuere eget, vestibulum"
                                                            " et, tempor auctor, justo. Fusce commodo aliquam "
                                                            "arcu. Suspendisse enim turpis, dictum sed, "
                                                            "iaculis a, condimentum nec, nisi."
                                                        ),
                                                    ],
                                                ),
                                            ],
                                        ),
                                    ],
                                ),
                            ],
                        ),
                        v.TabsWindowItem(
                            value="option-3",
                            children=[
                                v.Card(
                                    flat=True,
                                    children=[
                                        v.CardText(
                                            children=[
                                                v.Html(
                                                    tag="p",
                                                    children=[
                                                        (
                                                            "Fusce a quam. Phasellus nec sem in justo "
                                                            "pellentesque facilisis. Nam eget dui. Proin "
                                                            "viverra, ligula sit amet ultrices semper, ligula "
                                                            "arcu tristique sapien, a accumsan nisi mauris ac "
                                                            "eros. In dui magna, posuere eget, vestibulum et, "
                                                            "tempor auctor, justo."
                                                        ),
                                                    ],
                                                ),
                                                v.Html(
                                                    tag="p",
                                                    class_="mb-0",
                                                    children=[
                                                        (
                                                            "Cras sagittis. Phasellus nec sem in "
                                                            "justo pellentesque facilisis. Proin "
                                                            "sapien ipsum, porta a, auctor quis, "
                                                            "euismod ut, mi. Donec quam felis, "
                                                            "ultricies nec, pellentesque eu, "
                                                            "pretium quis, sem. Nam at tortor in "
                                                            "tellus interdum sagittis."
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
            ],
        ),
    ],
)
