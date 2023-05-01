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
        //console.log("Lista uppdaterad")
        //routie.navigate("updatestats");

        // Update stats
        stats = {
            "total": _.size(document.querySelectorAll("#pageBody .person")),
            "to_print": _.size(document.querySelectorAll("#pageBody .person.bg-success-light")),
            "not_to_print": _.size(document.querySelectorAll("#pageBody .person.no-print"))
        }
        getTemplate('statsTemplate', '#stats', stats);
    },
    'updatestats': function () {
        // Skip
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
        //routie.navigate("updatestats");
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