"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var score = {
    next: function (x) {
        console.log("next");
    },
    error: function (err) {
        console.log("error");
    },
    complete: function () {
        console.log("complete");
    }
};
var obs1 = new rxjs_1.Observable(function (obs1) {
    obs1.next(1);
    obs1.complete();
});
obs1.subscribe(function (result) {
    console.log(result);
});
