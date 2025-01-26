<script>
import Home from "./Home.vue"
import NotFound from "./NotFound.vue"
import AddBook from "./AddBook.vue"
import BookList from "./BookList.vue"

const routes = {
  "/": Home,
  "/addbook": AddBook,
  "/booklist": BookList
}

export default {
  components: {
    Home,
    NotFound,
    AddBook,
    BookList
  },
  data() {
    return {
      title: "",
      currentPath: window.location.hash,
    }
  },
  computed: {
    currentView() {
      //console.log(this.currentPath.slice(1));
      const view  = routes[this.currentPath.slice(1) || '/'] || NotFound;
      this.updateTitle(view);
      return view;
    }
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
      this.title = "";
    })
    /* const books = [
        {id: Math.random().toString(36).substr(2, 9), title: "book1", author: "author1", details: "details1", read: false },
        {id: Math.random().toString(36).substr(2, 9), title: "book2", author: "author2", details: "details2", read: false },
        {id: Math.random().toString(36).substr(2, 9), title: "book3", author: "author3", details: "details3", read: false }
    ]
    localStorage.setItem("books", JSON.stringify(books)) */
    //console.log(localStorage);
  },
  methods: {
    updateTitle(view) {
      this.title = view.name || "Not Found";
    }
  }
}
</script> 

<template>
  <h1 class="title">{{ title }}</h1>
  <div class="nav-container">
    <a href="#/" class="nav-link">Home</a>
    <a href="#/booklist" class="nav-link">Book list</a>
    <a href="#/addbook" class="nav-link">Add a book</a>
  </div>
  <component :is="currentView" />
</template>

<style>
h1 {
  color: blue;
}
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
