FileUpload
==========

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/file-upload/>`__.
    All examples have been converted to pyvuetify syntax.

.. api::

    :py:class:`pyvuetify.FileUpload`

Props
-----

Utilize various properties to customize the look and feel of the :py:class:`pyvuetify.FileUpload` component.


Content
-------

Use the **browse-text**, **divider-text**, **icon**, **title**, or **subtitle** props to customize the text displayed in the component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: FileUpload/content.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: FileUpload/content.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: FileUpload/content.vue


Loading
-------

The **loading** prop displays a progress indicator on the component. Unlike other components, the loading state does not disable interactions; files can still be browsed and dropped.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: FileUpload/loading.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: FileUpload/loading.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: FileUpload/loading.vue


Inset file list
---------------

The **inset-file-list** prop renders the file list inside the dropzone instead of below it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: FileUpload/inset_file_list.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: FileUpload/inset_file_list.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: FileUpload/inset_file_list.vue


Scrim
-----

The **scrim** property allows you to set a colored scrim when hovering over the component with files.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: FileUpload/scrim.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: FileUpload/scrim.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: FileUpload/scrim.vue


Slots
-----

The :py:class:`pyvuetify.FileUpload` component has several slots that can be used to customize the component.


Item
----

The **item** slot is used to customize the appearance of the file item.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: FileUpload/item.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: FileUpload/item.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: FileUpload/item.vue


List
----

Use :py:class:`pyvuetify.FileUploadList` with the **default** slot to compose :py:class:`pyvuetify.FileUploadItem` components directly. The slot provides ``files`` and ``onClickRemove`` for wiring up removal.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: FileUpload/list.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: FileUpload/list.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: FileUpload/list.vue

