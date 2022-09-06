const authorsFromApi = axios.get("http://localhost:3000/api/authors")



let alist = '';


authorsFromApi.then((x) => {
    const authorsinfo = x.data
    console.log(x.data);

    authorsinfo.forEach(itemm =>{
        alist+= `
        <div id="author_s">
             <h2 class="adi">${itemm.name}</h2>
             <div class="authorpp"><img src="${itemm.imgUrl}" alt="AuthorsPhoto"></div>
             <p>${itemm.biography}</p>
        </div>     

        `
        
    })
    document.getElementById('cards_all').innerHTML= alist;


})
