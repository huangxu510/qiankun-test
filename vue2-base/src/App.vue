<template>
  <div id="app-container">
    <h2>Vue2 base + Vue Router3</h2>
    <div class="app-body">
      <div class="menu-container">
        <span
          v-for="item in menuList"
          :key="item.key"
          class="menu-item"
          @click="onClick(item)"
          >{{ item.title }}</span
        >
      </div>
      <!-- 子应用渲染区，用于挂载子应用节点 -->
      <div id="frame"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      menuList: [
        {
          key: 'vue2-home',
          title: 'Vue2 主页',
          path: '/vue2'
        },
        {
          key: 'vue2-list',
          title: 'Vue2 列表',
          path: '/vue2/list'
        },
        {
          key: 'vue3-home',
          title: 'Vue3 主页',
          path: '/vue3'
        },
        {
          key: 'vue3-list',
          title: 'Vue3 列表',
          path: '/vue3/list'
        }
      ]
    }
  },
  methods: {
    onClick(item) {
      this.$router.push(item.path)
    }
  }
}
</script>

<style>
html,
body,
#main-app {
  height: 100%;
  width: 100%;
}
#app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.app-body {
  height: 100%;
  display: flex;
}

.menu-container {
  height: 100%;
  width: 150px;
  background-color: #001529;
}
.menu-item {
  color: #fff;
  display: inline-block;
  margin: 30px;
  cursor: pointer;
}
.menu-item:hover {
  font-weight: bold;
}

#frame {
  flex: 1;
  width: 100%;
}
</style>
