<template>
  <nav class="left-panel">
    <router-link to="/">Home</router-link>
    <router-link to="/buttons">Buttons</router-link>
    <router-link to="/progress">Progress</router-link>
  </nav>
</template>

<script>
export default {
  name: 'LeftPanel',
}
</script>

<style>
.left-panel {
  display: flex;
  flex-direction: column;
  width: 200px;
  border-right: 1px solid grey;
  height: 100vh;
  overflow: auto;
  padding: 15px;
}

.left-panel > a {
  margin-bottom: 10px;

}
</style>
