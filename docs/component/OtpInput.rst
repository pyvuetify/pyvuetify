OtpInput
========


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/otp-input/>`__.
    All examples have been converted to pyvuetify syntax.

The OTP input is used for MFA procedure of authenticating users by a one-time password.

.. api::

    :py:class:`pyvuetify.OtpInput`

Props
-----

The :py:class:`pyvuetify.OtpInput` component has support for most of :py:class:`pyvuetify.Field`'s props and is follows the same design patterns as other inputs.


Length
------

The ``length`` prop determines the number of :py:class:`pyvuetify.Field` components that are rendered. The default value is ``6``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OtpInput/length.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OtpInput/length.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OtpInput/length.vue


Focus-all
---------

The ``autofocus`` prop automatically focuses the first element in the :py:class:`pyvuetify.OtpInput` component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OtpInput/focus_all.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OtpInput/focus_all.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OtpInput/focus_all.vue


Error
-----

The ``error`` prop puts the :py:class:`pyvuetify.OtpInput` into an error state. This is useful for displaying validation errors.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OtpInput/error.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OtpInput/error.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OtpInput/error.vue


Variants
--------

The :py:class:`pyvuetify.OtpInput` component supports the same variants as :py:class:`pyvuetify.Field`, :py:class:`pyvuetify.TextField` and other inputs.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OtpInput/variant.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OtpInput/variant.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OtpInput/variant.vue


Masked
------

Using ``masked`` prop you can hide the entered characters. It is similar to a ``type="password"``, but makes it possible to also restrict characters to digits with ``type="number"``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OtpInput/masked.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OtpInput/masked.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OtpInput/masked.vue


Loader
------

The ``loader`` prop displays a loader when the :py:class:`pyvuetify.OtpInput` component is in a loading state. When complete, emits a ``finish`` event.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OtpInput/loader.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OtpInput/loader.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OtpInput/loader.vue


Merged
------

The ``merged`` prop renders all fields in a single connected group with shared elevation and border radius. Fields are joined visually without gaps between them.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OtpInput/merged.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OtpInput/merged.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OtpInput/merged.vue


Pattern
-------

The ``pattern`` prop restricts which characters are accepted. It supports preset values (``numeric``, ``alpha``, ``alphanumeric``, ``unicode-alpha``, ``unicode-alphanumeric``) or a custom ``RegExp``. When ``type="number"`` is set, the pattern defaults to ``numeric`` automatically. Use the ``unicode-*`` variants to accept non-Latin scripts such as CJK, Cyrillic or accented characters.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OtpInput/pattern.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OtpInput/pattern.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OtpInput/pattern.vue


Divider
-------

The ``divider`` prop renders a simple text character between every field.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OtpInput/divider.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OtpInput/divider.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OtpInput/divider.vue


Dividers
--------

The ``divider`` slot allows you to customize the separator content between fields. It receives the divider ``index`` as a slot prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OtpInput/divider.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OtpInput/divider.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OtpInput/divider.vue


Card variants
-------------

The following example is a detailed example of a :py:class:`pyvuetify.OtpInput` component used within a card.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OtpInput/card.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OtpInput/card.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OtpInput/card.vue


Mobile text
-----------

The following example is a detailed example of a :py:class:`pyvuetify.OtpInput` component used with mobile text.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OtpInput/mobile.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OtpInput/mobile.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OtpInput/mobile.vue


Verify account
--------------

The following example is a detailed example of a :py:class:`pyvuetify.OtpInput` component used to verify a user's account.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OtpInput/verify.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OtpInput/verify.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OtpInput/verify.vue


Custom layout
-------------

Using the :py:class:`pyvuetify.OtpField`, :py:class:`pyvuetify.OtpGroup`, and :py:class:`pyvuetify.OtpSeparator` sub-components inside the ``#fields`` slot, you can build custom layouts. Groups can be individually merged, and separators accept any content through their default slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OtpInput/custom_layout.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OtpInput/custom_layout.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OtpInput/custom_layout.vue

