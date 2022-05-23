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
}

//add
const add =()=>{
    if(suma === 0){
        alert(`Por favor selecciona un Producto.`);
    }else{
        document.querySelector(`#cart`).insertAdjacentHTML(`beforeend`,`<br> <div class="addimg">
        <article class="buy">
        <img src="images/image-product-2-thumbnail.jpg" class="imgg">
        <article class="txt">
        <h4 class="title"> Fall Limite Sneakers</h4>
        <h4>${precio}.00x${suma}<span> ${costo*suma}.00</span></h4>
        </article>
        <article class="delete">
        <img src="images/icon-delete.svg" class="Del">
        </article>
        </article>
        <button class="btn">Checkout</button>
         </div>`);
         document.querySelector(`.delete`).onclick=DLT;
         document.querySelector(`.btn`).onclick=CPR;
    }
}

//buy exitosa
const CPR=()=>alert(`Compra realizada correctamente`);

//delete items error
function DLT (e){
    let pad = document.querySelector(`.addimg`);
    let padr = pad.parentNode;
    padr.removeChild(pad);
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
    let imgList = [
        {img: "image-product-1-thumbnail"},
        {img:"image-product-2-thumbnail"},
        {img: "image-product-3-thumbnail"},
        {img: "mage-product-4-thumbnail"}
]
        document.getElementById(`Container_Sneaker`).innerHTML +=`
        <div class="view">
        <article class="arti" id="arti">
        <article class="articulo">
             <p id="Close" >X</p>
             <div>
             <img src="images/image-product-1.jpg" class="principallogo">
             </div>
            </article>
            <img src="images/image-product-1-thumbnail.jpg" id="sneaker1">
            <img src="images/image-product-2-thumbnail.jpg" id="sneaker2">
            <img src="images/image-product-3-thumbnail.jpg" id="sneaker3">
            <img src="images/image-product-4-thumbnail.jpg" id="sneaker4">
        </article>
        </div>`
    document.getElementById(`Close`).onclick=Close;
   
} 

// cerrar modal
const Close = () =>{
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
}

//remover carrito
   const disguise =()=>{
        let child = document.getElementById(`cart`);
        if(child.style.display == `none`){
            child.style.display=`block`;
        }else{
            child.style.display=`none`;
        } 
    }
