<template>
  <div class="project">
    <router-link to="/">Projects</router-link> |
    <h1>{{ msg }}</h1>
    <h2>Project Page 2</h2>

  </div>
</template>

<script>
export default {
  name: 'ProjectTwo',
  data () {
    return {
      msg: 'Project Two page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
