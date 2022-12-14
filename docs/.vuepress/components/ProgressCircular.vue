<template>
  <div :class="`text-${align ? align : 'center'}${inline ? ' inline' : ''}${inline ? '' : ' my-4'}`">
    <v-progress-circular indeterminate color="#E52255" :size="30" :width="5"></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: 'ProgressCircular',

  props: {
    align: {
      type: String
    },
    inline: {
      type: Boolean
    }
  }
};
</script>
