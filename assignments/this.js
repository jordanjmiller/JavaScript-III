/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global - returns global scope if not scoped into something else. would bring up browser/JS properties
* 2. Implicit- refering to the object you are currently scoped into
* 3. New- used in constructor functions to refer to what object is being sent to the constructor to be created
* 4. Explicit - .call or .apply- adds to or overwrites an object's properties by referring to another object
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);
// Principle 2
// code example for Implicit Binding
const example = function() {
    name: example,
    sayname = function(){
        console.log(`My name is ${this.name}`);
    }
}
// Principle 3
// code example for New Binding
function Person(name) {
    this.message = 'Hello ';
    this.name = name;
    this.speak = function() {
      console.log(this.message + this.name);
      console.log(this);
    };
  }
  
  const frank = new Person('frank');
  frank.speak();

// Principle 4
// code example for Explicit Binding
const steve = new Person('steve');
frank.speak.call(steve);
