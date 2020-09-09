class BooksService {
    getBooks() {
        return [
            {
                id: 1,
                author: "Ivan Yefremov",
                title: "Andromeda Nebula",
                price: 99,
            },
            {
                id: 2,
                author: "Victor Pelevin",
                title: "Generation P",
                price: 88,
            }
        ]
    }
}

export default BooksService;
