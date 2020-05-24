class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {

    add(book) {

        let table = document.getElementById('tableBody')
        table.innerHTML += ` <tr>
                                <td>${book.name}</td>
                                <td>${book.author}</td>
                                <td>${book.type}</td>
                                </tr>`


    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();

    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }


    }

    message(type,string) {
        let alert1 = document.getElementById('alert')
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        alert1.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText} </strong> ${string}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div> `

        setTimeout(() => {
            alert1.innerHTML=""
            
        }, 4000);

    }
}

let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', submitform);

function submitform(e) {
    console.log('submitting');

    let name = document.getElementById('bookName').value
    let author = document.getElementById('author').value
    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('cooking')

    if (fiction.checked) {
        type = fiction.value
    } else if (programming.checked) {
        type = programming.value
    } else if (cooking.checked) {
        type = cooking.value
    }
    let book = new Book(name, author, type)
    console.log(book);

    let display = new Display()

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.message('success','Successfully added a Book.')
    }
    else {
        display.message('danger',"Cannot Add a Book")
    }




    e.preventDefault();

}
