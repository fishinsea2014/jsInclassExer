// alert('first week');
function Animal(){
    this.name = 'Animal';

}

Animal.prototype.type='Moving';

function Cat(name, size){
    this.name=name;
    this.size=size;
    this.eat = function() { console.log('eat mouse')};
}

Cat.prototype=Animal.prototype;

var cat = new Cat('cat','small');
console.log(cat.type);

function F1(){
    // this.name1 = '1';
}
F1.prototype.name1= 'f1';
 
function F2(){
    this.name2 = '2';
}

function F3(){
    this.name3 = '3';
}

F2.prototype= new F1();

F3.prototype= new F2();

var f= new F3();

