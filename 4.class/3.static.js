class Article {
    static publiser = 'ddanzi'

    constructor(title, viewCnt) {
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, article2) {
        return article1 - article2
    }

    toString() {
        return this.title
    }

    valueOf() {
        return this.viewCnt
    }

    [Symbol.toPrimitive](hint) {
        return hint == 'number' ? this.viewCnt : this.title
    }
}

console.log(Article.publiser)

//
Article.address = 'seoul'
console.log(Article.address)

Article.getPrice = () => 2000
console.log(Article.getPrice()) //getPrice가 class안에 있으므로 쓰고싶으면 class.getPrice

//
let article1 = new Article('java', 100)
let article2 = new Article('javascript', 10)
//compare는 static변수라서 class.compare 이렇게 씀
console.log(Article.compare(article1, article2))

// 과제: [Symbol.toPrimitive]() 추가하라.
console.log(`${article1}`)
console.log(article1 + '')

// static변수는 객체안에 있는게 아니라 class 안에 있다.
console.log(article1.publiser, article1.address, article1.compare)
console.log(Article.title, Article.viewCnt)

console.log(Object.keys(Article)) // ['publiser', 'address', 'getPrice'],,얘는 static은 조회 못하는구나..
console.log(Article.prototype)
// {constructor: ƒ, toString: ƒ, valueOf: ƒ, Symbol(Symbol.toPrimitive): ƒ}
console.log(Object.keys(article1)) // ['title', 'viewCnt']

//
let articles = [article1, article2]
console.log(articles)

articles.sort(Article.compare)
console.log(articles)

Article.compare = (a, b) => b - a
articles.sort(Article.compare) //정렬할 때 sort 이용.., 내림차순,
console.log(articles)