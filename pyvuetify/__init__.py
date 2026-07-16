"""PyVuetify - Python bindings for Vuetify components."""

import importlib as _importlib

from extra_component import Html  # noqa: F401

# Import only the name list from _component, without loading any component module.
# Each component module is loaded on first access (lazy) so that doc build kernels
# only pay the cost of the components they actually use (~5) instead of all ~180.
from ._component import __all__ as _component_all  # noqa: F401

__all__ = [*_component_all, "Html"]
_COMPONENTS = frozenset(_component_all)


def __getattr__(name: str):
    if name in _COMPONENTS:
        _mod = _importlib.import_module(f"._component.{name}", package=__name__)
        _cls = getattr(_mod, name)
        globals()[name] = _cls  # cache
        return _cls
    raise AttributeError(f"module 'pyvuetify' has no attribute {name!r}")
