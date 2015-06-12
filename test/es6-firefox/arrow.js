'use strict'
var a = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryl­lium"
];
var a2 = a.map(function (s) {
    return s.length
});
var a3 = a.map(s => s.length);
function Person(done) {
    // The Person() constructor defines `this` as itself.
    this.age = 0;
    setTimeout(function growUp() {
        // In nonstrict mode, the growUp() function defines `this`
        // as the global object, which is different from the `this`
        // defined by the Person() constructor.
        this.age++;
        done()
    }, 1000);
}

function Person3(done) {
    this.age = 0;
    setInterval(() => {
        this.age++; // |this| properly refers to the person object
        done()
    }, 1000);
}
var adder = {
    base : 1,

    add : function(a) {
        var f = v => v + this.base;
        return f(a);
    },

    addThruCall: function(a) {
        var f = v => v + this.base;
        var b = {
            base : 2
        };

        return f.call(b, a);
    }
};


