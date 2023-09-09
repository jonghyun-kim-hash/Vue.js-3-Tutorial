const app = Vue.createApp({
  data() {
    return {
      url: "https://www.yahoo.co.jp",
      showBooks: true,
      books: [
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          stock: 45,
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "the name of the wind",
          author: "patrick rothfuss",
          stock: 20,
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          stock: 51,
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
