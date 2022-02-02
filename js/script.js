let select = document.getElementById("select");
let seleccionar = ["sandia", "maracuya", "kiwi", "durazno"];
let div = document.getElementById("imagen");
let form = document.getElementById("formu");
let field = document.getElementById("faseUno");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let direccion = document.getElementById("direccion");
let contacto = document.getElementById("contacto");
let recibo = document.getElementById("recibo")
let reset = document.getElementById("reset")
let objeto = {}
let sabor = ""



window.addEventListener("DOMContentLoaded", () => {
    recibo.style.display = "none"
    for (let i = 0; i < seleccionar.length; i++) {
        console.log("cum")
        let op = document.createElement('option');
        op.textContent = seleccionar[i];
        select.appendChild(op);
    }
})

select.addEventListener("change", () => {
    switch (select.value) {
        case 0:
            div.innerHTML = ``
        case "sandia":
            div.innerHTML = `<img src="./images/Sandia.png" alt="" class="paletas">`
            sabor = "sandia"
            break;
        case "maracuya":
            div.innerHTML = `<img src="./images/maracuya.png" alt="" class="paletas">`
            sabor = "maracuya"
            break;
        case "kiwi":
            div.innerHTML = `<img src="./images/kiwi.png" alt="" class="paletas">`
            sabor = "kiwi"
            break;
        case "durazno":
            div.innerHTML = `<img src="./images/durazno.png" alt="" class="paletas">`
            sabor = "durazno"
            break;
        default:
            alert("error");
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    objeto = {
        name: nombre.value,
        nickName: apellido.value,
        direction: direccion.value,
        contact: contacto.value
    }
    if (select.value == 0) {
        alert("Completa este campo")

    }
    else {
        recibo.style.display = "block"
        field.style.display = "none"
        recibo.innerHTML = ` 
        <h1>Recibo</h1><br>
        <h1>DATOS DE USUARIO</h1>
        ----------------------------------------
        <p><b>Nombre:</b> ${objeto.name}</p>
        <p><b>Apellido:</b> ${objeto.nickName}</p>
        <p><b>Direccion:</b> ${objeto.direction}</p>
        <p><b>Contacto:</b> ${objeto.contact}</p>
        ----------------------------------------
        <h1>DATOS DE PAGO</h1>
        ⊱•••━━━━━━《 ✮ 》━━━━━━•••⊰⊹
        <p><b>Valor:</b> 2500$</p>
        <p><b>Sabor:</b> ${sabor}</p>
        <p><b>IVA:</b> 19%(475$)</p>
        <p><b>Total:</b> 3000$</p>
        ⊱•••━━━━━━《 ✮ 》━━━━━━•••⊰⊹
        <p><b>Heladeria Popsy's no escatima en gastos<br>
            Muchas gracias por su compra tkm uwu</b></p>`

    }

})

reset.addEventListener('click', function () {
    div.innerHTML = ``
})