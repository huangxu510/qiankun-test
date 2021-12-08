<template>
  <div>
    <section
      style="padding: 20px; color: red; font-size: 30px; font-weight: bold"
    >
      Vue3 Micro App Home
    </section>
    <button @click="onClick">to List</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Home',
  components: {},
  inheritAttrs: false,
  props: {},
  emits: [],
  setup() {
    const router = useRouter()
    const onClick = () => {
      router.push('/list')
    }
    return { onClick }
  }
})
</script>

<style scoped></style>
