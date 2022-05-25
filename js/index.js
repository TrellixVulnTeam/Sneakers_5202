window.onload = inicio;

const precio = 125.00;
let total = 0;
let suma = total++;
let costo = precio;
let porciento = 50;

//declaro elemento
function inicio(){
    document.getElementById(`sneaker1`).onclick = View; 
    document.getElementById(`sneaker2`).onclick = View; 
    document.getElementById(`sneaker3`).onclick = View; 
    document.getElementById(`sneaker4`).onclick = View; 
    document.getElementById(`carshop`).onclick = carshop;
    document.querySelector(`.menos`).onclick = menos;
    document.querySelector(`.mas`).onclick = mas;
    document.querySelector(`#menu_hamburguesa`).onclick=menuResponsive;
    document.querySelector(`.ul_Sneaker`).onclick=removerMenu;   
    document.getElementById(`add_product`).onclick=add;
    document.querySelector(`.fa-solid`).onclick=oscuro;

}   


const oscuro = ()=>{
    body.classList.toggle(`Dark`);
}

//add
const add =()=>{
      
    let productoLocal = {
        img: `images/image-product-4-thumbnail.jpg`,
        delete: `images/icon-delete.svg`,
        Title:`Fall Limite Sneakers`,
        Precio: precio,
        Cantidad: suma,
        Total: costo*suma
    }

        
    //localStorage.setItem(`add`,JSON.stringify(cars));
        // cars = JSON.parse(localStorage.getItem (`add`));
        // console.log(add);
         
    if(suma === 0){
        alert(`Por favor selecciona un Producto.`);
    }else{
        let cars =  document.querySelector(`#cart`).insertAdjacentHTML(`beforeend`,`<br> <div class="addimg">
        <article class="buy">
        <img src=${productoLocal.img} class="imgg">
        <article class="txt">
        <h4 class="title"> ${productoLocal.Title}</h4>
        <h4>${productoLocal.Precio}.00x ${productoLocal.Cantidad} <span>${productoLocal.Total}.00</span></h4>
        </article>
        <article class="delete">
        <img src=${productoLocal.delete} class="Del">
        </article>
        </article>
        <button class="btn">Checkout</button>
         </div>`);
         
         document.querySelector(`.delete`).onclick=DLT;
         document.querySelector(`.btn`).onclick=CPR;
    }
    localStorage.setItem(`add`, JSON.stringify(productoLocal));
}

//buy exitosa
const CPR=()=>alert(`Compra realizada correctamente`);

//delete items error solo borra el primer elemento
function DLT (){
    let pad = document.querySelector(`.addimg`);
    let padr = pad.parentNode;
    //padr.style.display=`none`;
    padr.removeChild(pad)
}
//menu responsive
function menuResponsive(){
   const ol = document.querySelector(`.ul_Sneaker`);
    ol.classList.toggle(`ul_Sneaker_re`);
    
}
 
//remover menu
function removerMenu(){
    let rem = document.querySelector(`.ul_Sneaker`);
    rem.classList.toggle(`ul_Sneaker_re`);
}

//cantidad de produncto 
function menos(){
    if(suma > 0){
     suma = suma - 1;
    let cantidad_pro = document.querySelector(`.cantidad_pro`).textContent=`${suma}`; 
    let costo_p = document.querySelector(`.precio`).textContent=`${costo*suma}.00 ${porciento}%`
    }

}
//cantidad de produncto
function mas(){
        suma = suma + 1;
        document.querySelector(`.cantidad_pro`).textContent=`${suma}`
        let costo_p = document.querySelector(`.precio`).textContent=`${costo*suma}.00 ${porciento}%`

}

// solucionar modal tiene error
const View = () => {
    let imgList = 
         ["images/image-product-1-thumbnail.jpg",
         "images/image-product-2-thumbnail.jpg",
         "images/image-product-3-thumbnail.jpg",
         "images/image-product-4-thumbnail.jpg"
]
    

        document.getElementById(`Container_Sneaker`).insertAdjacentHTML(`beforeend`,`
        <div class="view">
        <article class="arti" id="arti">
        <article class="articulo">
             <p id="Close" ><img src=images/icon-close.svg class="close"></p>
             <div class="flex">
             <img src=images/icon-previous.svg class="avanzar atras">
             <img src=${imgList[0]} class="principallogo img">
             <img src=images/icon-next.svg class="avanzar adelante" >
             </div>
            </article>
            <img src=${imgList[0]} class="sneaker0 img">
            <img src=${imgList[1]} class="sneaker0 img">
            <img src=${imgList[2]} class="sneaker0 img">
            <img src=${imgList[3]} class="sneaker0 img">
        </article>
        </div>`)
    document.getElementById(`Close`).onclick=Close;
    document.querySelector(`.adelante`).onclick = adelante;
    document.querySelector(`.atras`).onclick = atras;
    let img = document.querySelector(`.img`);

// carrusel de img
    function adelante(e) {
        let adelante = document.querySelector(`.adelante`);
        if (adelante == e.target){
            if(total < imgList.length-1){
                img.src = imgList[total + 1]
                total++;
            }else{
                img.src = imgList[0];
                total = 0;
            }
        }
    }
    }
    
    function atras(e) {
        let atras = document.querySelector(`.atras`);
        if (atras == e.target){
            if(total > 0){
                img.src = imgList[total - 1]
                total--;
            }else{
                img.src = imgList[imgList.length-1];
                total = imgList.length - 1;
            }
        }
    }

// cerrar modal
function Close (){
    let arti = document.getElementById(`arti`);
    let padre = document.querySelector(`.view`);
    arti.style.display=`none`;
    
    setTimeout(function(){
     let parent = padre.parentNode;
     parent.removeChild(padre);
 },100)
} 

//carrito
const carshop =()=>{
    let Cart =document.getElementById(`article_Sneaker`);
    Cart.insertAdjacentHTML(`beforeend`,`<div id="cart">
    <div><h4>Cart</h4>
    </div>
    <hr>
    </div>`) 
    document.getElementById(`carshop`).onclick=disguise;

    return carshop;
}


//remover carrito
   const disguise =()=>{
        let child = document.getElementById(`cart`);
        if(child.style.display == `block`){
            child.style.display=`none`;
        }else{
            child.style.display=`block`;
        } 
    }
