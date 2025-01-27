interpolation/one-way binding //Da, BookList.vue, linija 60
two-way binding //Da, AddBook.vue, linija 34
methods //Da, AddBook, linija 15
computed properties //Da, App.vue, linija 26
barem jedan scoped style //Da, AddBook, 41
koristiti barem jedan lifecycle hook //Da, App, 34
routing (više stranica) //Da, App, 7, 
aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2) //Da, moze se bookmark
dinamičko usmjeravanje s 404 stranicom ("catch all") //Da, postoji NotFound.vue upisi nes bzvze u search bar npr. https://web2-lab5-s3r8.onrender.com/#/addbook123123
(barem) dvije komponente//Da, ima ih i vise
komponenta bez stanja, koristiti properties//Da, Home.vue
komponenta sa stanjem //Da, Addbook.vue
barem jedna komponenta mora emitirati barem jedan event //Ovo nisam :(
store (Pinia) //Da, counter.js i BookList linija 60, koristi se counter
asinkroni dohvat podataka s backenda, možete:
možete mock napraviti, držati podatke u memoriji, ali mora biti asinkroni poziv //Da, fetchBooks u BookList.vue, napravio sam mock dohvacanje iz local storage da bude asinkrono