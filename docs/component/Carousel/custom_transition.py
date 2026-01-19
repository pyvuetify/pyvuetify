import ipyvuetify as v

items = [
    {"src": "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},
    {"src": "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},
    {"src": "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},
    {"src": "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"},
]

v.Carousel(
    children=[
        v.CarouselItem(
            reverse_transition="fade-transition",
            transition="fade-transition",
            children=[v.Img(src=item["src"])],
        )
        for item in items
    ]
)
