import pyvuetify as v

v.FileInput(
    # JS expression, needs manual conversion
    rules="rules",
    accept="image/png, image/jpeg, image/bmp",
    label="Photos",
    placeholder="Upload your photos",
    prepend_icon="mdi-camera",
    multiple=True,
)
