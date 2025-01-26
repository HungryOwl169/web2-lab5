<script>
export default {
    name: "AddBook",
    data() {
        return {
            newBook: {
                title: "",
                author: "",
                details: "",
                read: false
            }
        }
    },
    methods: {
        addBook() {
            const books = JSON.parse(localStorage.getItem('books')) || [];
            books.push(this.newBook);
            localStorage.setItem('books', JSON.stringify(books));
            for (const key in this.newBook){
                this.newBook[key] = "";
            }
        }
    }
}
</script>

<template>
<h1>Add your book below</h1>
<div class="add-book">
    <form @submit.prevent="addBook">
    <input v-model="newBook.title" required placeholder="title">
    <input v-model="newBook.author" required placeholder="author">
    <input v-model="newBook.details" required placeholder="details">
    <button type="submit">Add Book</button>
</form>
</div>
</template>

<style scoped>
h1 {
    color: black;
    display: flex;
    justify-content: center;
}
.add-book {
    display: flex;
    justify-content: center;
}
</style>