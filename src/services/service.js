//server simulator :)

class BooksService {
    data = [
        {
            id: 1,
            author: "Ivan Yefremov",
            title: "Andromeda Nebula",
            price: 99,
            count: 1,
            coverImage: "https://data.fantlab.ru/images/editions/big/5684",
        }, {
            id: 2,
            author: "Dante Alighieri",
            title: "The Divine Comedy",
            price: 88,
            count: 1,
            coverImage: "https://img2.wbstatic.net/big/new/12300000/12309790-2.jpg",
        }, {
            id: 3,
            author: "David Elieser Deutsch",
            title: "The Fabric of Reality",
            price: 77,
            count: 1,
            coverImage: "https://img.labirint.ru/rcimg/0d082af779540edb5aa1b50a8ed99fbf/960x540/comments_pic/1503/0_483c5d5acfeee551467d934715198577_1421231769.jpg?1421231978",
        }, {
            id: 4,
            author: "Victor Pelevin",
            title: "Generation P",
            price: 66,
            count: 1,
            coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUG9ghcIu7P6hvhWMJPucTcdDd3McEcp6uzA&usqp=CAU",
        },
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //Promise reject simulation with chance 1 of 5
                if (Math.random() > 0.2) {
                    resolve(this.data)
                } else {
                    reject(new Error("something is wrong"))
                }
            }, 1000)
        })
    }
}

export default BooksService;
