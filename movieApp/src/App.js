// export default class App{
//   constructor(){
//     this.el = document.createElement('div')
//     this.el.textContent = 'hellod'
//   }
// }

import { Component } from './core/heropy.js'

export default class App extends Component {
  constructor(){
    super({
      state : { 
        fruits:[ 
          {name:"Apple",price:1000},
          {name:"Apple2",price:2000},
          {name:"Apple3",price:3000},
          {name:"Apple4",price:4000},
        ]
      }
    })
  }
  render(){
    console.log(this.state.fruits)
  }
}