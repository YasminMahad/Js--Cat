var myObject = {
    name: "Adalab",
    func: function() {
    var self = this;
    console.log("outer func: this.name = " + this.name);
    console.log("outer func: self.name = " + self.name);
    (function() {
    console.log("inner func: this.name = " + this.name);
    console.log("inner func: self.name = " + self.name);
    }());
}
};
myObject.func();

// OutPut
// outer func: this.name = Adalab
// outer func: self.name = Adalab
// inner func: this.name = undefined
// inner func: self.name = Adalab

// It is an object which has a properity and two methods. It is testing the use of self and this. It uses the keyword self to refer to the current class itself within the scope of that class only whereas, this is used to refer to the member variable "name" and function for a particular instance of a class.

// ‘this’ is not a variable in that case instead it is a JavaScript keyword which refers to the current context.
// we are then save the object’s context to the variable ‘self’ and then we can use ‘self’ in innerFunction to refer to the object’s context. 