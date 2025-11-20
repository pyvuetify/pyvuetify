ipyvuetify.extra.file_input.FileInput
=====================================

.. py:class:: ipyvuetify.extra.file_input.FileInput(**kwargs)

   Bases: :py:obj:`ipyvuetify.VuetifyTemplate`


   Widget that can be inserted into the DOM

   Parameters
   ----------
   tooltip: str
      tooltip caption
   layout: InstanceDict(Layout)
      widget layout


   .. py:method:: clear()


   .. py:method:: get_files(timeout=30)


   .. py:method:: reset_stats()


   .. py:method:: update_stats(file_index, bytes_read)


   .. py:method:: vue_upload(content, buffers)


   .. py:attribute:: accept


   .. py:attribute:: chunk_listeners


   .. py:attribute:: data


   .. py:attribute:: directory


   .. py:attribute:: disabled


   .. py:attribute:: file_info


   .. py:attribute:: multiple


   .. py:attribute:: progress_indeterminate


   .. py:attribute:: show_progress


   .. py:attribute:: stats
      :value: []



   .. py:attribute:: template


   .. py:attribute:: total_progress


   .. py:attribute:: total_progress_inner
      :value: 0



   .. py:attribute:: total_size_inner
      :value: 0



   .. py:attribute:: version

