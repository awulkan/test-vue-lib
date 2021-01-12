<template>
  <div class="page">
    <LeftPanel />
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<script>
import LeftPanel from './LeftPanel.vue'

export default {
  name: 'App',
  components: {
    LeftPanel,
  },
}
</script>

<style>
body {
  margin: 0;
}
</style>

<style scoped>
.page {
  display: flex;
}

.navigation {
  display: flex;
  flex-direction: column;
  width: 200px;
}

.main {
  flex: 1;
  padding: 50px;
}
</style>
