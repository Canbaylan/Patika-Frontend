const input = document.getElementById('task')
const tg = document.querySelector('ul')
const errorClass = document.querySelector('#liveToast.error').classList
const successClass = document.querySelector('#liveToast.success').classList
var list = document.getElementById("list")

list.addEventListener("click", clickTodo) //listedeki elemana tiklandiginda olusan animasyon
list.addEventListener("click", clickClose) // "×" etiketine tiklandiginda silinen eleman

function clickTodo(e) {
    const tgt = e.target
    tgt.classList.toggle("checked")

}

function clickClose(e) {

    if (e.target.tagName == "SPAN") e.target.parentElement.remove()
}

// "Ekle" butonuna tiklandiginda ekleme durumuna gore gosterilen Toast Bildirimleri
function toastAdd(param) {

    if (param == 'error') {
        errorClass.add('fade')
        errorClass.toggle('hide')
        errorClass.toggle('show')
    } else {
        successClass.add('fade')
        successClass.toggle('hide')
        successClass.toggle('show')
    }
}
// Olusan Toast Bildirimini gizleyen fonksiyon
function toastHide(param) {
    if (param == 'error') {
        errorClass.remove('show')
        errorClass.add('hide')
    } else {
        successClass.remove('show')
        successClass.add('hide')
    }
}

// Listeye eleman ekleyen fonksiyon
function newElement() {
    if (input.value == ("" | String.fromCharCode(32))) {
        let param = 'error'
        toastAdd(param)
        setTimeout(function() { toastHide(param); }, 2000)

    } else {
        let param = 'success'
        toastAdd(param)
        setTimeout(function() { toastHide(param); }, 2000)
        const liNew = document.createElement('li')
        liNew.textContent = input.value
        let tag = document.createElement("span")
        tag.classList.add('close')
        tag.textContent = "×"
        liNew.appendChild(tag)
        tg.appendChild(liNew)
        input.value = ""
        AddLocalStorage(liNew.textContent)
    }
    input.placeholder = "Bugün ne yapacaksın?"
}
/* Local Storage Islemleri*/
let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0

function AddLocalStorage(param) {
    counter += 1
    let params = param.split('×')
    console.log(params)
    localStorage.setItem(params[0], counter)
}