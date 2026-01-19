import ipyvuetify as v

items = [
    {"src": "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},
    {"src": "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},
    {"src": "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},
    {"src": "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"},
]

v.Carousel(
    continuous=False,
    cycle=True,
    show_arrows=False,
    children=[v.CarouselItem(children=[v.Img(src=item["src"])]) for item in items],
)
