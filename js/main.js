const main = document.getElementsByTagName("main").item(0);
const ulMenu = document.getElementById("ulMenu");
const URLMain = "https://fakestoreapi.com/products/";

function getData(cat){
    const options = {"method": "GET"};
    fetch(URLMain+cat, options)
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

function getCategories(){
    const options = {"method": "GET"};
    fetch(URLMain+"categories/", options)
    .then((response) => {
        response.json().then((res) =>{
            res.forEach((cat)=>{
                ulMenu.insertAdjacentHTML("afterbegin",
                `<li><a class="dropdown-item" onclick="getData('category/${(cat.replace("'","%27"))}');">${cat}</a></li>`);
            });
        });
    }).catch((err)=> {
        main.insertAdjacentHTML("beforeend",
             `<div class="alert alert-danger" role="alert">
            ${err.message}
            </div> `);
    });
}//getCategories

getCategories();
getData(""); 

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


