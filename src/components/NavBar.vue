<script>
export default {
    name: "NavBar",
    data() {
        return {
            title: "placeholder"
        }
    },
    methods: {
        navigateTo(path) {
            window.location.hash = path
        }
    }
}
</script>

<template>
<h1 class="title"> {{ title }}</h1>
<div class="nav-container">
  <a href="#/" @click.prevent="navigateTo('/')" class="nav-link">Home</a>
  <a href="#/booklist" @click.prevent="navigateTo('/booklist')" class="nav-link">Book list</a>
  <a href="#/addbook" @click.prevent="navigateTo('/addbook')" class="nav-link">Add a book</a>
</div>
</template>

<style>
.nav-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.title {
  display: flex;
  justify-content: center;
  font-size: 70px;
}
</style>