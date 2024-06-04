<template>
<navbar></navbar>
<router-view></router-view>

</template>

<script>

 import navbar from '/src/components/navbar.vue'
 import Footer1 from '/src/components/footer.vue'
export default {
  components: {
    navbar,
    Footer1
  }
}
</script>

<style></style>
