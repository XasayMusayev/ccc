const booksFormApi = axios.get("http://localhost:3000/api/books")

let list = '';

booksFormApi.then((e) => {
    const booksInfo = e.data
    console.log(e.data);
    booksInfo.forEach(item => {
 
        list+= `
        <div id="cards_all">
            <div class="card">
                 <div class="image"><img class="image2" src="${item.imageUrl}" alt="bookphoto"></div>
                    <div  class="bookinfo">
                    <h4>${item.title}</h4>
                    <p class="info">Author</p>
                    <p>${item.author}</p>
                    <p class="info">Type</p>
                    <p>${item.genre}</p>
                    <p class="info">Layout</p>
                    <p>${item.bookCover}</p>
                    </div>

            </div>
        </div>  
        `
       
    })

    document.getElementById('cards_allb').innerHTML= list;
})
