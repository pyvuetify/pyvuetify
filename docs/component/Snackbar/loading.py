import pyvuetify as v

v.Layout(
    min_height="100",
    children=[
        v.Snackbar(
            v_model="loadingSnackbar",
            timeout=-1,
            text="Uploading file...",
            contained=True,
            loading=True,
        ),
        v.Snackbar(
            v_model="successSnackbar",
            timeout=2000,
            color="success",
            prepend_icon="$complete",
            text="Uploading successful!",
            contained=True,
        ),
    ],
)
