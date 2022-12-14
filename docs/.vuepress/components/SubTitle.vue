<template>
  <v-app>
    <div class="my-4 font-weight-bold blue-grey--text">{{ text }}</div>
  </v-app>
</template>

<script>
export default {
  name: 'SubTitle',

  props: {
    text: {
      type: String
    }
  }
};
</script>
