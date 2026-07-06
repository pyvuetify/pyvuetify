import pyvuetify as v

v.Sheet(
    border="md",
    class_="pa-6 text-white mx-auto",
    color="#141518",
    max_width="400",
    children=[
        v.Html(
            tag="h4",
            class_="text-headline-small font-weight-bold mt-0 mb-4",
            children=["Your Privacy"],
        ),
        v.Html(
            tag="p",
            class_="mb-8",
            children=[
                (
                    "This business determines the use of personal data collected on our media properties and "
                    "across the internet. We may collect data that you submit to us directly or data that we "
                    "collect automatically including from cookies (such as device information or IP address).",
                ),
                "Please read our",
                v.Html(
                    tag="a",
                    class_="text-red-accent-2",
                    href="#",
                    children=["Privacy Policy"],
                ),
                (
                    'to learn about our privacy practices or click "Your Preferences" to exercise '
                    "control over your data."
                ),
            ],
        ),
        v.Btn(
            class_="text-none text-black mb-4",
            color="red-accent-2",
            size="x-large",
            variant="flat",
            block=True,
            children=["Accept"],
        ),
        v.Btn(
            class_="text-none text-black",
            color="red-accent-2",
            size="x-large",
            variant="outlined",
            block=True,
            children=["Your Preferences"],
        ),
    ],
)
