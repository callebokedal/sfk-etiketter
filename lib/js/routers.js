// routie('users/bob'); 
let setupRouters = () => {
    console.log("routers.js: setting up routers");
    routie({
    '': () => {
        console.log("routers.js: Start");
    },
    'print': function () {
        console.log("routers.js: Print");
    },
    'list': function () {
        console.log("list");
        persons = JSON.parse(sessionStorage.getItem("sfk-etiketter-list"));
        getTemplate('listTemplate', '#pageBody', persons);
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
    '*': function () {
        console.error("Unhandled route - got to default route");
        routie("");
    }
    })
};