describe("Suite", function () {
    it("arrow function", function (done) {
        //expect(true).toBeFalsy()
        expect(a2).toEqual([8, 6, 7, 10]);
        expect(a2).toEqual(a3)
        var p = new Person(done);
        expect(p instanceof Function).toBeFalsy()
        expect(p instanceof Object).toBeTruthy()
        expect(p.age).toEqual(0)
    });
    it("self", function (done) {
        function Person2(done) {
            var self = this; // Some choose `that` instead of `self`.
                             // Choose one and be consistent.
            self.age = 0;
            setTimeout(function growUp() {
                // The callback refers to the `self` variable of which
                // the value is the expected object.
                self.age++;
                expect(p2.age).toEqual(1)
                done()
            }, 1000);
        }

        var p2 = new Person2(done)
    });
    it("fat arrow", function (done) {
        var p3 = new Person3(callback);

        function callback() {
            expect(p3.age).toEqual(1)
            done()
        }
    });
    it("strict mode", function () {
        var f = () => {
            'use strict';
            return this
        };
        var that = f();
        expect(that).not.toEqual(window)
        expect(this).not.toEqual(window)
        expect(that).toEqual(this); //the global object
    });
    it("apply", function () {
        expect(adder.add(1)).toEqual(2);
        expect(adder.addThruCall(1)).toEqual(2);
    });
    it("obj literal", function () {
        var func = () => ({
            foo: 1
        });               // Calling func() returns undefined!
        expect(func().foo).toEqual(1)
        var func1 = ()=>(
        {
            foo: function () {
                return 0
            }
        }
        )
        expect(func1().foo).not.toThrow()
        expect(func1().foo()).toEqual(0)
    });
})