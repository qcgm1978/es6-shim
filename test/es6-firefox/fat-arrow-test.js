describe("Suite", function () {
    it("arrow function", function (done) {
        //expect(true).toBeFalsy()
        expect(a2).toEqual([8, 6, 7, 10]);
        if (isFirefox()) {
            var a3 = a.map(s => s.length);
            expect(a2).toEqual(a3)
        }
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
        function Person3(done) {
            this.age = 0;
            setInterval(() => {
                this.age++; // |this| properly refers to the person object
                done()
            }, 1000);
        }
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
        adder.add= function (a) {
            var f = v => v + this.base;
            return f(a);
        }
        adder.addThruCall= function (a) {
            var f = v => v + this.base;
            var b = {
                base: 2
            };
            return f.call(b, a);
        }
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
    it('array', function () {
        var years = {}
        expect(years['2']).toEqual(years['02'])
        expect(years['2']).toBeUndefined()
        years['2'] = 2
        expect(years['02']).toBeUndefined()
        var promise = {
            'var': 'text',
            'array': [1, 2, 3, 4]
        };
        expect(promise['array']).toEqual([1, 2, 3, 4])
        expect(promise.array).toEqual([1, 2, 3, 4])
        var fruits = [];
        fruits.push('banana', 'apple', 'peach');
        expect(fruits.length).toEqual(3)
        fruits[5] = 'mango';
        expect(Object.keys(fruits)).toEqual(['0', '1', '2', '5'])
        expect(fruits.length).toEqual(6)
        fruits.length = 2;
        expect(Object.keys(fruits)).toEqual(['0', '1'])
        function isLetter(character) {
            return character >= 'a' && character <= 'z';
        }

        var str = 'abc1'

        function isWord() {
            if (!Array.prototype.every.call(str, isLetter)) {
                throw new TypeError('not a word');
            } else {
                return true;
            }
        }

        expect(isWord).toThrow();
        expect(isWord).toThrowError('not a word')
        var foo = ()=>str.every();
        expect(foo).toThrow()
    })
})