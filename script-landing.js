const urlUsers = 'https://jsonplaceholder.typicode.com/users'
const urlPosts = 'https://jsonplaceholder.typicode.com/posts'
fetch(urlUsers)
    .then(resUsers => resUsers.json())
    .then(resUsers => {
         resUsers.map((el, index) => { 
              const id = el.id;
               console.log(id)
            fetch(urlPosts)
            .then(response =>response.json())
            .then(response=>{
                console.log(response)
id.map(id=>
    response.filter(el => el.id === id))          
            }) 
           
           
           
            document.getElementById("testimonials-peoples").innerHTML +=

                index === 0 ?
                `<div class="carousel-item active">
                                <div class="carousel-testimonials">
                                    <img src="./images/amalia-image.jpeg" class="d-block w-100" alt="...">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, ab
                                        necessitatibus exercitationem rem libero rerum eos magnam quibusdam molestias
                                        inventore unde architecto magni repellat laudantium aliquam labore? Inventore,
                                        optio
                                        harum.
                                    </p>
                                    <p>${resUsers[0].name}</p>
                                </div>
                            </div>
                            `
                            :                           
                            `
                            <div class="carousel-item">
                            <div class="carousel-testimonials">
                                <img src="./images/amalia-image.jpeg" class="d-block w-100" alt="...">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, ab
                                    necessitatibus exercitationem rem libero rerum eos magnam quibusdam molestias
                                    inventore unde architecto magni repellat laudantium aliquam labore? Inventore,
                                    optio
                                    harum.
                                </p>
                                <p>${el.name}</p>
                            </div>
                        </div>

                            `
        })
    })