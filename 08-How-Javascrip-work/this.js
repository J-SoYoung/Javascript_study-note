function say(greeting){
  console.log(`${greeting}, i'm ${this.name}`)
  console.log(this)
}

let me = { name :'so young'}
let you = {name : 'bin'}

say()
say.apply(me, ['hello'])
say.apply(you, ['good morning'])
// say.call(me,'hello')
// say.call(you,'good afternoon')


// function foo(){
//   console.log(this.a)
// }
// let obj = {
//   a : 2
// }
// foo.call(obj)


// function baz(){
//   console.log('baz')
//   bar()
// }
// function bar(){
//   console.log('bar')
//   foo()
// }
// function foo(){
//   console.log('foo')
// }
// baz()