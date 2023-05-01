const printIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">\
<title>Skriv ut</title>\
<path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>\
<path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>\
</svg> Skriv ut'
const printIconOld = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">\
<title>Skriv ut</title>\
<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>\
</svg> Skriv ut'
const noPrintIcon = 'Skriv inte ut'
const noPrintIconOld2 = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\
<title>Skriv inte ut</title>\
<path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>\
</svg> Skriv inte ut'
const noPrintIconOld = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">\
<title>Skriv inte ut</title>\
<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>\
</svg> Skriv inte ut'
const noPaperIcon = 'MC_IngenTidning <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">\
<title>MCIngenTidning</title>\
<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>\
</svg>'
const familyHeadIcon = 'Familjerepr. <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">\
<title>Familjerepresentant</title>\
<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\
<path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>\
<path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>\
</svg>'
const familyMemberIcon = 'Del av familj <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">\
<title>Familjemedlem</title>\
<path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>\
</svg>'
const householdHeadIcon = 'Hushållsrepr.<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">\
<title>Hushållsrepresentant</title>\
<path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>\
</svg>'
const householdMemberIcon = 'Del av hush. <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">\
<title>Del av hushåll</title>\
<path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>\
</svg>'
const placeholderIcon = ''
const placeholderIconOld = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">\
<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>\
</svg>'
const hiddenIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\
<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\
<path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\
<path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\
</svg>'

let year = new Date().getFullYear();
let age = (birthDate) => {
    return (year - birthDate.substring(0,4)) + " år";
}

let getTemplate = (tid, el, data = {}) => {
    let elem = document.querySelector(el);
    if(elem) {
        var e = _.unescape(document.querySelector(`script#${tid}`).innerHTML);
        var t = _.template(e);
        var r = t({'data':data});
        elem.innerHTML = r;
    } else {
        console.error("getTemplate - element missing: ", tid);
    }
}

let selectAll = () => {
    let persons = JSON.parse(sessionStorage.getItem("sfk-etiketter-list"));
    persons = _.each(persons, (person) => {
        person.print = true;
    });
    sessionStorage.setItem("sfk-etiketter-list",JSON.stringify(persons));
    routie.navigate("list");
}

let deselectAll = () => {
    let persons = JSON.parse(sessionStorage.getItem("sfk-etiketter-list"));
    persons = _.each(persons, (person) => {
        person.print = false;
    });
    sessionStorage.setItem("sfk-etiketter-list",JSON.stringify(persons));
    routie.navigate("list");
}

let upload = () => {
    //Reference the FileUpload element
    console.log("upload");
    // 
    //let persons = JSON.parse(sessionStorage.getItem("sfk-etiketter-list"));
    //sessionStorage.setItem("sfk-etiketter-list-old",JSON.stringify(persons));
    //sessionStorage.removeItem("sfk-etiketter-list");
    let fileUpload = document.getElementById("formFile");
    //console.log("file: ", fileUpload.value);

    // Works
    //document.getElementById("viewReport").removeAttribute("disabled");

    // Validate whether File is valid Excel file.
    let regex = /^([a-zA-Z0-9\s_\\.-:]).+(.xls|.xlsx|.xlsb)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            let reader = new FileReader();
            //For Browsers other than IE.
            if (reader.readAsBinaryString) {
                reader.onload = function (e) {
                    processExcel(e.target.result);
                };
                reader.readAsBinaryString(fileUpload.files[0]);
            } else {
                //For IE Browser.
                reader.onload = function (e) {
                    var data = "";
                    var bytes = new Uint8Array(e.target.result);
                    for (var i = 0; i < bytes.byteLength; i++) {
                        data += String.fromCharCode(bytes[i]);
                    }
                    processExcel(data);
                };
                reader.readAsArrayBuffer(fileUpload.files[0]);
            }
        } else {
            alert("Den här webbläsaren har inte stöd för HTML5 - vilket är ett krav");
        }
    } else {
        alert("Vald fil är ogiltig!");
    }
    //routie.navigate("list");
}

let togglePersonState = (id) => {
    let persons = JSON.parse(sessionStorage.getItem("sfk-etiketter-list"));
    // Toggle value
    let p = _.find(persons, {id: id});
    var val = p.print;
    _.set(_.find(persons, {id: id}), 'print', !val);
    // Update person
    sessionStorage.setItem("sfk-etiketter-list",JSON.stringify(persons));
    //routie("list");
    routie.navigate("list");
}


let saveReportToFile = () => {
    var wb = XLSX.utils.book_new();
    wb.SheetNames.push("Rapport");

    const d = new Date();
    let datestamp = d.toISOString().substring(0,10);

    var ws_data = [];
    document.querySelectorAll("#pageBody .person").forEach((p) => {
        let id = p.querySelector("a").id;
        let name = p.querySelector(".name").innerText;
        //console.log("name: ", name);
        let address = p.querySelector(".streetaddress").innerText;
        let print = $(p).hasClass("bg-success-light")?("Utskriven "+datestamp):"Ej utskriven";
        let noPaper = p.querySelector(".float-end > div:nth-of-type(1)")?_.trim(p.querySelector(".float-end > div:nth-of-type(1)").innerText):'';
        let familyHead = p.querySelector(".float-end > div:nth-of-type(2)")?_.trim(p.querySelector(".float-end > div:nth-of-type(2)").innerText):'';
        let familyMember = p.querySelector(".float-end > div:nth-of-type(3)")?_.trim(p.querySelector(".float-end > div:nth-of-type(3)").innerText):'';
        let householdHead = p.querySelector(".float-end > div:nth-of-type(4)")?_.trim(p.querySelector(".float-end > div:nth-of-type(4)").innerText):'';
        let householdMember = p.querySelector(".float-end > div:nth-of-type(5)")?_.trim(p.querySelector(".float-end > div:nth-of-type(5)").innerText):'';
        ws_data.push([id, name, address, print, noPaper, familyHead, familyMember, householdHead, householdMember]);
    })
    //console.log(ws_data);
    wb.Sheets["Rapport"] = XLSX.utils.aoa_to_sheet(ws_data);

    // Save to file
    XLSX.writeFile(wb, "Rapport etiketter.xlsx", {});
    routie.navigate("#");
}

let markIngenTidning = (person) => {
    //let noPaper = _.map(_.split(o.groups, ','), _.trim).includes('MC_IngenTidning');
    if(_.map(_.split(person.groups, ','), _.trim).includes('MC_IngenTidning')) {
        person.print = false;
        person.nopaper = 'MC_IngenTidning';
    };
    return person;
}
