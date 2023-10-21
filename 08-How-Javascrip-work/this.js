// function identify(){
//   return this.name.toUpperCase();
// }
// function speak(){
//   let greeting = `hello, i'm ${identify.call(this)}`
//   console.log(greeting)
// }

// let me = { name :'so young'}
// let you = {name : 'bin'}

// identify.call(me)
// identify.call(you)


// function foo(){
//   console.log(this.a)
// }
// let obj = {
//   a : 2
// }
// foo.call(obj)


function baz(){
  console.log('baz')
  bar()
}
function bar(){
  console.log('bar')
  foo()
}
function foo(){
  console.log('foo')
}
baz()