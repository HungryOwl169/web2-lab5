<script>
import { useCounterStore } from "./stores/counter";
export default {
    name: "BookList",
    data() {
        return {
            books: [],
            hideRead: false,
            counterStore: useCounterStore()
        }
    },
    methods: {
        fetchBooks() {
            return new Promise((resolve, reject) => {
                const books = JSON.parse(localStorage.getItem('books'));
                if (books) {
                    resolve(books); 
                } else {
                    reject("No books found in local storage.");
                }
            });
        },
        removeBook(id) {
            this.books = this.books.filter((book) => book.id !== id);
            localStorage.setItem("books", JSON.stringify(this.books));
            this.updateBookCount();
        },
        updateBookCount() {
            this.counterStore.setCount(this.books.length);
        },
        toggleRead(book) {
            book.read = !book.read;
            localStorage.setItem('books', JSON.stringify(this.books));
        }
    },
    computed: {
        filteredBooks(){
            return this.hideRead
            ? this.books.filter((b) => !b.read)
            : this.books
        }
    },
    async mounted() {
        const storedBooks = await this.fetchBooks(); 
        if (storedBooks) {
            this.books = storedBooks;
            this.updateBookCount();
        } else {
            console.log("No books found in localStorage.");
        }
    }
}
</script>

<template>
<div class="book-list">
    <button @click="hideRead = !hideRead">
        {{ hideRead ? 'Show all' : 'Hide read' }}
    </button>
    <p>Total books: {{ counterStore.count }}</p>
    <ul>
        <li v-for="book in filteredBooks" :key="book.title">
            <input type="checkbox" :checked="book.read" @change="toggleRead(book)">
            <span :class="{ read: book.read }">{{ book.title }}, {{ book.author }}</span>
            <button @click="removeBook(book.id)">X</button>
        </li>
    </ul>
</div>
</template>

<style scoped>
h1 {
    display: flex;
    justify-content: center;
}
.book-list {
    display: flex;
    align-items: center;
    flex-direction: column; 
    padding: 20px;
}
.read {
    text-decoration: line-through ;
}
</style>