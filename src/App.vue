<template>
<navbar></navbar>
<footer></footer>
<router-view></router-view>
</template>

<script>

 import navbar from '/src/components/navbar.vue'
 import footer from '/src/components/footer.vue'
export default {
  components: {
    navbar,
    footer
  }
}
</script>

<style></style>
