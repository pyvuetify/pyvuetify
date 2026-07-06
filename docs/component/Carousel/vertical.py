import pyvuetify as v

v.DefaultsProvider(
    # JS expression, needs manual conversion
    defaults="{ VBtn: { variant: 'outlined', color: '#eee' } }",
    children=[
        v.Sheet(
            class_="overflow-hidden",
            max_width="700",
            rounded="xl",
            children=[
                v.Carousel(
                    v_model="currentIndex",
                    direction="vertical",
                    height="400",
                    progress="red",
                    vertical_arrows="left",
                    vertical_delimiters="right",
                    hide_delimiter_background=True,
                    children=[
                        v.CarouselItem(
                            # JS expression, needs manual conversion
                            key="i",
                            # JS expression, needs manual conversion
                            src="item.src",
                            cover=True,
                        ),
                        v.Overlay(
                            scrim=False,
                            content_class=(
                                "w-100 h-100 d-flex flex-column align-center justify-space-between "
                                "pointer-pass-through py-3"
                            ),
                            contained=True,
                            model_value=True,
                            no_click_animation=True,
                            persistent=True,
                            children=[
                                v.ScrollXTransition(
                                    mode="out-in",
                                    appear=True,
                                    children=[
                                        v.Sheet(
                                            # JS expression, needs manual conversion
                                            key="currentIndex",
                                            rounded="xl",
                                            children=[
                                                v.ListItem(
                                                    # JS expression, needs manual conversion
                                                    prepend_avatar="`https://randomuser.me/api/portraits/${currentItem.avatarId}.jpg`",
                                                    # JS expression, needs manual conversion
                                                    subtitle="currentItem.subtitle",
                                                    # JS expression, needs manual conversion
                                                    title="currentItem.authorName",
                                                    class_="pa-1 pr-6",
                                                ),
                                            ],
                                        ),
                                    ],
                                ),
                                v.Chip(
                                    # JS expression, needs manual conversion
                                    text="`${ currentIndex + 1 } / ${items.length }`",
                                    color="#eee",
                                    size="small",
                                    variant="flat",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
