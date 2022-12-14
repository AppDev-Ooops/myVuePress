<template>
  <v-app>
    <div class="my-8">
      <v-btn color="#E52255" :href="link" target="_blank" height="40" outlined rounded dark><v-icon v-if="icon" left dark>{{ icon }}</v-icon>{{ text }}</v-btn>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'Button',

  props: {
    text: {
      type: String
    },
    link: {
      type: String
    },
    icon: {
      type: String
    }
  }
};
</script>
