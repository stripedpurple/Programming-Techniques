// Question 2 (Please open the html to view the results of this program)
document.querySelector('#txt').addEventListener("keypress", function (event) {
    if (event.keyCode == 89 || event.keyCode == 90 || event.keyCode == 77) {
        event.preventDefault()
        $("#txt").effect("shake")
    }
});

// Question One

function Vector(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    Object.defineProperties(this, {
        "length": {
            "get": function () {
                return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
            }
        }
    });
}

Vector.plus = function (v1, v2) {
    if (v1 instanceof Vector && v2 instanceof Vector) {
        return new Vector((v1.x + v2.x), (v1.y + v2.y), (v1.z + v2.z));
    }
    else if (Object.prototype.toString.call(v1) === '[object Array]' && Object.prototype.toString.call(v2) === '[object Array]') {
        return new Vector(( v1[0] + v2[0] ), ( v1[1] + v2[1] ), ( v1[2] + v2[2] ));
    }
    else {
        console.log("Please pass some vectors.");
        return 0;
    }
};

Vector.minus = function (v1, v2) {
    if (v1 instanceof Vector && v2 instanceof Vector) {
        return new Vector((v1.x - v2.x), (v1.y - v2.y), (v1.z - v2.z));
    }
    else if (Object.prototype.toString.call(v1) === '[object Array]' && Object.prototype.toString.call(v2) === '[object Array]') {
        return new Vector(( v1[0] - v2[0] ), ( v1[1] - v2[1] ), ( v1[2] - v2[2] ));
    }
    else {
        console.log("Please pass some vectors.");
        return 0;
    }
};


var vector1 = new Vector(1, 1, 1);
var vector2 = new Vector(1, 1, 1);
var vector3 = new Vector(2, 2, 2);

console.log(vector1.length);
console.log(vector3.length);

console.log(Vector.plus(vector1, vector2));
console.log(Vector.plus([2, 2, 2], [1, 1, 1]));
console.log(Vector.plus(1, 1));

console.log(Vector.minus(vector1, vector2));
console.log(Vector.minus([2, 2, 2], [1, 1, 1]));
console.log(Vector.minus(1, 1));
