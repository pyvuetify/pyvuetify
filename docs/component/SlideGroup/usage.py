import ipyvuetify as v

v.Sheet(
    class_="mx-auto my-2",
    max_width=700,
    children=[
        v.SlideGroup(
            multiple=True,
            show_arrows=True,
            children=[
                v.SlideItem(
                    key=n,
                    v_slots=[
                        {
                            "name": "default",
                            "variable": "props",
                            "children": v.Btn(
                                class_="mx-2",
                                # input_value="props.active",
                                active_class="purple white--text",
                                depressed=True,
                                rounded=True,
                                children=[f"Options {n}"],
                            ),
                        }
                    ],
                )
                for n in range(1, 26)
            ],
        )
    ],
)
