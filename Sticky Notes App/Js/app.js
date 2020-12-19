console.log('Welcome to Notes App. this is app.js');
showNotes();


//If User Adds a note, Add it to local Storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObject = [];
    }
    else {
        notesObject = JSON.parse(notes);
    }
    notesObject.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObject));
    addTxt.value = "";
    console.log(notesObject);
    showNotes();
})

//Function to show Elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObject = [];
    }
    else {
        notesObject = JSON.parse(notes);
    }
    let html = "";
    notesObject.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element + 1}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObject.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show!"Add a Note"`;
    }
}

//Function to Delete Notes
function deleteNote(index) {
    console.log('I am deleting', index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObject = [];
    }
    else {
        notesObject = JSON.parse(notes);
    }

    notesObject.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObject));
    showNotes();
}