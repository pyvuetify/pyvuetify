"""Custom Jinja2 extensions."""

import re

from jinja2.ext import Extension

VUETIFY_BASE_URL = "https://vuetifyjs.com/en"
_MD_LINK_RE = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")
_MD_INLINE_CODE_RE = re.compile(r"(?<!`)(`)((?!`)[^`]+)\1(?!_)")
_RST_COLON_RE = re.compile(r"(?<!^)(?<!\s):(?=\s)", re.MULTILINE)


class TypeMapperExtension(Extension):
    """
    Jinja2 extension to map type strings using a custom mapping.

    Usage in template:
        {{ some_type | map_type }}
    """

    def __init__(self, environment):
        super().__init__(environment)
        environment.filters["map_type"] = self.map_type
        environment.filters["map_default"] = self.map_default
        environment.filters["md_to_rst"] = self.md_to_rst

    def map_type(self, value: str) -> str:
        """
        Map a type string to another type string.

        Args:
            value: The input type as a string

        Returns:
            The mapped type as a string
        """
        mapping = {"string": "Unicode", "number": "Float", "boolean": "Bool"}
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

    @staticmethod
    def md_to_rst(text: str) -> str:
        """Convert Markdown formatting to RST.

        - ``[text](url)`` → `` `text <url>`__ `` (anonymous external link)
        - `` `code` `` → `` ``code`` `` (inline code)

        Relative paths are prefixed with the Vuetify documentation base URL.
        Uses ``__`` to avoid duplicate target warnings in Sphinx.
        """

        def _replace_link(match):
            label, url = match.group(1), match.group(2)
            if url.startswith("/"):
                url = f"{VUETIFY_BASE_URL}{url}"
            return f"`{label} <{url}>`__"

        # Convert inline code first: `code` → ``code``
        text = _MD_INLINE_CODE_RE.sub(r"``\2``", text)

        # Convert links: [text](url) → `text <url>`__
        text = _MD_LINK_RE.sub(_replace_link, text)

        # Escape colons that could be misinterpreted as RST field markers
        text = _RST_COLON_RE.sub(r"\:", text)

        return text
