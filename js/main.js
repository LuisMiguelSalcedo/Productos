const main = document.getElementsByTagName("main").item(0);
const URLMain = "https://fakestoreapi.com/products/";

function getData(){
    fetch(URLMain)
    .then((response) => {
        console.log(response);
        response.json().then((res) =>{
            //console.log(res.length);
            //console.log(res[11].title);
            createCards(res);
        });
    })
    .catch((err)=> {
        main.insertAdjacentHTML("beforeend",
             `<div class="alert alert-danger" role="alert">
            ${err.message}
            </div> `);
    });
}//getData

getData(); 

function createCards(prods){
 
    prods.forEach(prod => {
        main.insertAdjacentHTML("beforeend", `<div class="card" style="width: 18rem;">
            <img src="${prod.image}" class="card-img-top" alt="${prod.title}">
            <div class="card-body">
            <h5 class="card-title">${prod.title}</h5>
            <p class="card-text">${prod.description}</p>
            <a href="#" class="btn btn-primary">Info</a>
            </div>
        </div>`);
    });
}
