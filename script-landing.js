const urlUsers = 'https://jsonplaceholder.typicode.com/users'
const urlPosts = 'https://jsonplaceholder.typicode.com/posts'
let testimonialsUsers;
fetch(urlUsers)
    .then(resUsers => resUsers.json())
    .then(resUsers => {
        let users = resUsers
        console.log(users)
        fetch(urlPosts)
            .then(response => response.json())
            .then(response => {
                let posts = response;
                testimonialsUsers = objectWithNameAndPosts(users, posts)
                console.log(testimonialsUsers)
                testimonialsUsers.map((el, index) => {
                    document.getElementById("testimonials-peoples").innerHTML +=
                        index === 0 ?
                        `<div class="carousel-item active">
                            <div class="carousel-testimonials">
                                <img src="./images/amalia-image.jpeg" class="d-block w-100" alt="...">
                                <p>${testimonialsUsers[0].posts[Math.floor(Math.random() * 10)]}
                                </p>
                                <p>${testimonialsUsers[0].name}</p>
                            </div>
                        </div>
                        ` :
                        `
                        <div class="carousel-item">
                        <div class="carousel-testimonials">
                            <img src="./images/amalia-image.jpeg" class="d-block w-100" alt="...">
                            <p>${el.posts[Math.floor(Math.random() * 10)]}
                            </p>
                            <p>${el.name}</p>
                        </div>
                    </div>
                        `
                })
            })
    })
const objectWithNameAndPosts = (users, posts) => {
    console.log(users)
    console.log(posts)
    let arrayWithOnlyPosts = posts.reduce((post, element) => {
        let id = element.userId
        let newPosts = posts.filter(el => el.userId === id)
            .map(el => el.title)
       
        post[id] = newPosts
        console.log(post)
        return post
    }, {})

    let objectWithNameAndPostFromUsers = users.map(el => {
        let value = arrayWithOnlyPosts[el.id]
               return Object.assign({
            name: el.name,
            posts: value
        })
    })
    return (objectWithNameAndPostFromUsers)
}