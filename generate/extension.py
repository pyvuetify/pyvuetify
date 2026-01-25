"""Custom Jinja2 extensions."""

from jinja2 import nodes
from jinja2.ext import Extension

class TypeMapperExtension(Extension):
    """
    Jinja2 extension to map type strings using a custom mapping.

    Usage in template:
        {{ some_type | map_type }}
    """

    def __init__(self, environment):
        super().__init__(environment)
        environment.filters['map_type'] = self.map_type
        environment.filters['map_default'] = self.map_default

    def map_type(self, value: str) -> str:
        """
        Map a type string to another type string.

        Args:
            value: The input type as a string

        Returns:
            The mapped type as a string
        """
        mapping = {
            "string": "Unicode",
            "number": "Float",
            "boolean": "Bool"
        }
        return mapping.get(value, "Any")

    def map_default(self, value: str) -> str:
        """
        Map a default string with a Python compatible fallback.

        Args:
            value: The input type as a string

        Returns:
            The mapped type as a string or the default
        """
        mapping = {
            "false": "False",
            "true": "True",
            "null": "None",
            "[]": [],
        }
        value = value.strip("'")
        return mapping.get(value, f'"{value}"')

