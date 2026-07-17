"""Base widget class for pyvuetify components.

The ``_css`` (7.4 MB) and ``_esm`` (~1 MB) traits of every anywidget are
class-level constants, yet ipywidgets records them **per instance** in the
notebook ``widget-state+json`` metadata.  For a full docs build this blows
up to hundreds of MB or several GB of redundant data.

Fix strategy (two layers):

1. **During ``comm.open``** (``_pv_in_open=True``):
   ``get_state()`` drops ``_css``/``_esm``, so the ``comm_open`` message – the
   one jupyter_sphinx records as notebook state – is tiny.

2. **After ``comm.open``** (``_pv_opened=True``):
   ``get_state()`` keeps dropping them so any post-execution state collection
   (e.g. ``get_manager_state()`` from ipywidgets) is also clean.

3. **Live rendering**: immediately after ``comm.open``, a ``comm_msg`` update is
   sent with the real values.  The running frontend receives the CSS/JS and
   renders the widget.  ``comm_msg`` messages are **not** saved to notebook state.
"""

from __future__ import annotations

import anywidget
from ipywidgets.widgets.widget import _remove_buffers  # type: ignore[import]

_BUNDLE_KEYS = frozenset(("_css", "_esm"))


class _PyvuetifyWidget(anywidget.AnyWidget):
    """Shared base class for all generated pyvuetify widget components."""

    def open(self) -> None:
        # Layer 1: mark that we are inside comm.open so get_state() skips bundles
        self.__dict__["_pv_in_open"] = True
        super().open()
        self.__dict__["_pv_in_open"] = False
        # Layer 2: keep skipping bundles in all future get_state() calls
        self.__dict__["_pv_opened"] = True

        # Layer 3: push the real CSS/JS to the live frontend via comm.send
        # (comm_msg messages are NOT persisted in the notebook widget-state+json)
        if self.comm is not None:
            bundle: dict = {}
            for key in _BUNDLE_KEYS:
                if self.has_trait(key):
                    val = self._trait_values.get(
                        key,
                        self.traits()[key].default(),
                    )
                    if val:
                        bundle[key] = val
            if bundle:
                state, buffer_paths, buffers = _remove_buffers(bundle)
                self.comm.send(
                    {
                        "method": "update",
                        "state": state,
                        "buffer_paths": buffer_paths,
                    },
                    buffers=buffers,
                )

    def get_state(self, key=None, drop_defaults=False):  # type: ignore[override]
        state = super().get_state(key=key, drop_defaults=drop_defaults)
        if self.__dict__.get("_pv_in_open") or self.__dict__.get("_pv_opened"):
            state.pop("_css", None)
            state.pop("_esm", None)
        return state
