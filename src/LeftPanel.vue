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
  padding: 10px 16px;
  background-color: #e9e9e9;
  border-radius: 4px;
  text-decoration: none;
  color: #111111;
  font-size: 16px;
}

.left-panel > a:hover {
  background-color: #d8d8d8;
}
</style>
