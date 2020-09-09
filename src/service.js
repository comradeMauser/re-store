class BooksService {
    getBooks() {
        return [
            {
                id: 1,
                author: "Ivan Yefremov",
                title: "Andromeda Nebula",
                price: 99,
            }, {
                id: 2,
                author: "Dante Alighieri",
                title: "The Divine Comedy",
                price: 88,
            }, {
                id: 3,
                author: "David Elieser Deutsch",
                title: "The Fabric of Reality",
                price: 77,
            }, {
                id: 4,
                author: "Victor Pelevin",
                title: "Generation P",
                price: 66,
            },
        ]
    }
}

export default BooksService;
