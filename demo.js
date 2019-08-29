"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var obs2 = {
    next: function (x) {
        console.log("Here............. in next ", x);
    },
    error: function (err) {
        console.log("here in err ", err);
    },
    comp: function () {
    }
};
var obs1 = new rxjs_1.Observable(function (obs) {
    setInterval(function () {
        obs.next(new Date().getMilliseconds());
    }, 5000);
});
obs1.subscribe(obs2);
