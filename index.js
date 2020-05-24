class Book{
    constructor(name,author,type){
        this.name= name;
        this.author = author;
        this.type = type;
    }
}

class Display{
 
add(book){

}

clear(){

}

validate(book){


}

message(string){

}
}

let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', submitform);

function submitform(e){
    console.log('submitting');

    let name = document.getElementById('bookName').value
    let author = document.getElementById('author').value
    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('cooking')

    if(fiction.checked){
        type = fiction.value
    }else if(programming.checked){
        type = programming.value
    }else if(cooking.checked){
        type = cooking.value
    }
    let book = new Book(name,author,type)
    console.log(book);
    e.preventDefault();

}
