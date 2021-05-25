// routie('users/bob'); 
let setupRouters = () => {
    console.log("routers.js: setting up routers");
    routie({
    '': () => {
        console.log("routers.js: Start");
        //$("#pageBody").innerHTML = "s";
    },
    'print': function () {
        console.log("routers.js: Print");
    },
    'list': function () {
        //console.log("list", id);
        persons = JSON.parse(sessionStorage.getItem("sfk-etiketter-list"));
        getTemplate('listTemplate', '#pageBody', persons);
        /*if(id) {
            var el = document.getElementById("id");
            el.scrollIntoView();
        }*/
    },
    'selectall': function () {
        selectAll();
    },
    'deselectall': function () {
        deselectAll();
    },
    'toggle/:id': function (id) {
        //console.log("id: ", id);
        togglePersonState(id);
    },
    'upload': function () {
        upload();
    },
    'savereport': function () {
        saveReportToFile();
    }/*,
    '*': function (e) {
        console.error(`Unhandled route '${e}' - going default route instead`);
        routie("");
    }*/
    })
};