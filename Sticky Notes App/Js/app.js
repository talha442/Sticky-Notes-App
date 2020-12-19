console.log('Welcome to Notes App. this is app.js');

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
    // showNotes();
}) 