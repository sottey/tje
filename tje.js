/* ******************************** */
/* Custom tje functions and loading */ 
/* NOTE TYPE SHOULD BE JS Frontend. */
/* ******************************** */

var currSpreadsheet = undefined;
var jsonNotes = undefined;
const jsonNotesData = document.getElementById("tjeNotes");
const sheetDiv = document.getElementById("tje_container");
const sheet = document.getElementsByClassName("x-spreadsheet-sheet");  
const autosaveCheckbox = document.getElementById("tjeAutosaveCheckbox"); 
const saveButton = document.getElementById("tjeSaveButton");
const noteName = document.getElementById("tjeNoteName");

async function init() {
    var saveIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTc3MTc3MDkyOTg4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2NzgiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIxMy4zMzMzMzMgMTI4aDU5Ny4zMzMzMzRhODUuMzMzMzMzIDg1LjMzMzMzMyAwIDAgMSA4NS4zMzMzMzMgODUuMzMzMzMzdjU5Ny4zMzMzMzRhODUuMzMzMzMzIDg1LjMzMzMzMyAwIDAgMS04NS4zMzMzMzMgODUuMzMzMzMzSDIxMy4zMzMzMzNhODUuMzMzMzMzIDg1LjMzMzMzMyAwIDAgMS04NS4zMzMzMzMtODUuMzMzMzMzVjIxMy4zMzMzMzNhODUuMzMzMzMzIDg1LjMzMzMzMyAwIDAgMSA4NS4zMzMzMzMtODUuMzMzMzMzeiBtMzY2LjkzMzMzNCAxMjhoMzQuMTMzMzMzYTI1LjYgMjUuNiAwIDAgMSAyNS42IDI1LjZ2MTE5LjQ2NjY2N2EyNS42IDI1LjYgMCAwIDEtMjUuNiAyNS42aC0zNC4xMzMzMzNhMjUuNiAyNS42IDAgMCAxLTI1LjYtMjUuNlYyODEuNmEyNS42IDI1LjYgMCAwIDEgMjUuNi0yNS42ek0yMTMuMzMzMzMzIDIxMy4zMzMzMzN2NTk3LjMzMzMzNGg1OTcuMzMzMzM0VjIxMy4zMzMzMzNIMjEzLjMzMzMzM3ogbTEyOCAwdjI1NmgzNDEuMzMzMzM0VjIxMy4zMzMzMzNoODUuMzMzMzMzdjI5OC42NjY2NjdhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMS00Mi42NjY2NjcgNDIuNjY2NjY3SDI5OC42NjY2NjdhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMS00Mi42NjY2NjctNDIuNjY2NjY3VjIxMy4zMzMzMzNoODUuMzMzMzMzek0yNTYgMjEzLjMzMzMzM2g4NS4zMzMzMzMtODUuMzMzMzMzeiBtNDI2LjY2NjY2NyAwaDg1LjMzMzMzMy04NS4zMzMzMzN6IG0wIDU5Ny4zMzMzMzR2LTEyOEgzNDEuMzMzMzMzdjEyOEgyNTZ2LTE3MC42NjY2NjdhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSA0Mi42NjY2NjctNDIuNjY2NjY3aDQyNi42NjY2NjZhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSA0Mi42NjY2NjcgNDIuNjY2NjY3djE3MC42NjY2NjdoLTg1LjMzMzMzM3ogbTg1LjMzMzMzMyAwaC04NS4zMzMzMzMgODUuMzMzMzMzek0zNDEuMzMzMzMzIDgxMC42NjY2NjdIMjU2aDg1LjMzMzMzM3oiIHAtaWQ9IjI2NzkiIGZpbGw9IiMyYzJjMmMiPjwvcGF0aD48L3N2Zz4=';
    currSpreadsheet = x_spreadsheet('#tje_container', { showTopBar: true, showBottomBar: false,extendToolbar: {left: [{ tip: 'Save current spreadsheet', icon: saveIcon, onClick: onSaveContents}]}});  
    
    jsonNotes = await api.runOnBackend(getJSONNotes);
    addJSONNotesToList(jsonNotes);
    
    jsonNotesData.addEventListener("change", onJSONNoteSelect); 
    saveButton.addEventListener("click", onSaveContents); 
    autosaveCheckbox.addEventListener("change", onAutosaveChange); 
    showSpreadsheet(false);
}

init();

/* *************** */
/* UTILITY METHODS */
/* *************** */


function onSheetChange(event) {  
    if( autosaveCheckbox.checked) {
        onSaveContents();
    }
}

function onAutosaveChange(event) {
    saveButton.disabled = autosaveCheckbox.checked;
}

/* ************************************* */
/* Get all notes that are of type 'json' */
/* ************************************* */
async function getJSONNotes() {
    const jsonNotes = await api.searchForNotes("note.type = code AND note.mime = 'application/json' AND #!tjeExclude");
    return jsonNotes.map(n => ({
        id: n.noteId,
        title: n.title,
    }));
}
/* ************************** */
/* Get contents of note by id */
/* ************************** */
async function getNoteContent(noteId) {
    var jsonData = await api.runOnBackend((id) => api.getNote(id).getContent(), [noteId]);
    return JSON.parse(jsonData);
}

/* ************************** */
/* Get path of note by id */
/* ************************** */
async function getNoteLink(noteId) {
    var notePath = await api.runOnBackend((id) => api.getNote(id).getBestNotePath(), [noteId]);
    return notePath;
}

/* ************************** */
/* Set contents of note by id */
/* ************************** */
async function setNoteContent(noteId, content) {
    var content = JSON.stringify(currSpreadsheet.getData());
    await api.runOnBackend((noteId, content) => api.getNote(noteId).setContent(content), [noteId, content]);
}

/* **************************** */
/* When a json note is selected */
/* **************************** */
async function onJSONNoteSelect(e) {
    const noteId = jsonNotesData.value;  
    
    
    resetTable();
    
    if (noteId != "") { 
        await loadContents(noteId);         
    }
}

/* ********************** */
/* When save is requested */
/* ********************** */
async function onSaveContents(event) {
    const showMessage = (event != undefined);
    
    var content = JSON.stringify(currSpreadsheet.getData(), null, 4);
    const noteId = jsonNotesData.value;  
    
    if (noteId) {
        await setNoteContent(noteId, content);
        if (showMessage) { api.showMessage("Data saved."); }   
        console.log("Data saved.");
    } else {
        if (showMessage) { api.showWarning("Note not found. Data NOT saved."); }  
        console.log("Note not found. Data NOT saved.");   
    }
}

/* ************************************* */
/* Add json notes to the select control */
/* ************************************* */
function addJSONNotesToList(jsonObjs) {
    resetJSONNotesList(jsonNotesData);
    
    if (jsonObjs.length > 0) {
        //addOptionToSelect(jsonNotesData, "Select a note...", "");
        $(jsonObjs).each(function(){ addOptionToSelect(jsonNotesData, this.title, this.id); });
        onJSONNoteSelect();
    } else 
    { 
        addOptionToSelect(jsonNotesData, "No JSON Notes Found...", ""); 
    }
}

/* ******************************************** */
/* Utility to add an option to the Notes Select */
/* ******************************************** */
function addOptionToSelect(selectElem, text, value) {
    var elem = document.createElement("option");
    elem.innerText = text;
    elem.value = value;
    selectElem.appendChild(elem);    
}

/* ************************************** */
/* Zero out json note list and add prompt */
/* ************************************** */
function resetJSONNotesList(list) {
    while (list.options.length > 0) {
        list.options[0].remove();
    }    
}

/* *********************************************** */
/* Create table with contents from provided noteId */
/* *********************************************** */
async function loadContents(noteId) {
    var jsonString = await getNoteContent(noteId);
    var link = await getNoteLink(noteId);
    link = "#" + link.join();
    link = link.replaceAll(",", "/");
    tjeNoteName.innerHTML = "<a href='" + link + "'>" + jsonNotesData.options[jsonNotesData.selectedIndex].text + "</a>";
    currSpreadsheet.loadData(jsonString); 
    showSpreadsheet(true);
    

}

/* ******************** */
/* Clear existing table */
/* ******************** */
function resetTable() {
    var newSheet = JSON.parse('[{"name":"New"}]');
    currSpreadsheet.loadData(newSheet); 
    showSpreadsheet(false);
}

function showSpreadsheet(show) {
    saveButton.disabled = autosaveCheckbox.checked;
    
    if (show) {
        sheetDiv.style.display = "block";
        //SCOCHANGE: hiding our savebutton for now
        saveButton.style.display = "none";
        // saveButton.style.display = "block";
        sheet[0].addEventListener("keydown", onSheetChange);
    } else {
        sheetDiv.style.display = "none";
        saveButton.style.display = "none";
        sheet[0].removeEventListener("keydown", onSheetChange);
    }       
}
