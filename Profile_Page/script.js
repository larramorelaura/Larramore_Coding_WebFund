function addConnection(element){
    document.querySelector(element).innerText++;

}

function generateConnection(id, id2){
    document.querySelector(id).append(document.querySelector(id2));
}

function decreaseRequest(element){
    document.querySelector(element).innerText--;
}

function hide(element){
    var hideThis=document.querySelector(element);
    hideThis.remove();
}

function editProfile(element){
    var profileName=document.querySelector(element);
    profileName.innerText='James Allen';
}