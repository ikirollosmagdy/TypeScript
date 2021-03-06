//// [protectedInstanceMemberAccessibility.ts]
class A {
    protected x: string;
    protected f(): string {
        return "hello";
    }
}

class B extends A {
    protected y: string;
    g() {
        var t1 = this.x;
        var t2 = this.f();
        var t3 = this.y;
        var t4 = this.z;     // error

        var s1 = super.x;    // error
        var s2 = super.f();
        var s3 = super.y;    // error
        var s4 = super.z;    // error

        var a: A;
        var a1 = a.x;    // error
        var a2 = a.f();  // error
        var a3 = a.y;    // error
        var a4 = a.z;    // error

        var b: B;
        var b1 = b.x;
        var b2 = b.f();
        var b3 = b.y;
        var b4 = b.z;    // error

        var c: C;
        var c1 = c.x;    // error
        var c2 = c.f();  // error
        var c3 = c.y;    // error
        var c4 = c.z;    // error
    }
}

class C extends A {
    protected z: string;
}


//// [protectedInstanceMemberAccessibility.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var A = (function () {
    function A() {
    }
    A.prototype.f = function () {
        return "hello";
    };
    return A;
})();
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.apply(this, arguments);
    }
    B.prototype.g = function () {
        var t1 = this.x;
        var t2 = this.f();
        var t3 = this.y;
        var t4 = this.z; // error
        var s1 = _super.prototype.x; // error
        var s2 = _super.prototype.f.call(this);
        var s3 = _super.prototype.y; // error
        var s4 = _super.prototype.z; // error
        var a;
        var a1 = a.x; // error
        var a2 = a.f(); // error
        var a3 = a.y; // error
        var a4 = a.z; // error
        var b;
        var b1 = b.x;
        var b2 = b.f();
        var b3 = b.y;
        var b4 = b.z; // error
        var c;
        var c1 = c.x; // error
        var c2 = c.f(); // error
        var c3 = c.y; // error
        var c4 = c.z; // error
    };
    return B;
})(A);
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.apply(this, arguments);
    }
    return C;
})(A);
