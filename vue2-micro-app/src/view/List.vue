<template>
  <div>
    <section
      style="padding: 20px; color: red; font-size: 30px; font-weight: bold"
    >
      Vue2 App List
    </section>
    <button @click="onClick">to List</button>
  </div>
</template>
<script>
export default {
  name: 'Home',
  methods: {
    onClick() {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
