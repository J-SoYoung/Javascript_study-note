import { Component } from './core/heropy.js'
import TheHeader from './components/TheHeader.js'

export default class App extends Component {

  render(){
    const routerVIew = document.createElement('router-view')
    this.el.append( 
      new TheHeader().el,
      routerVIew
    )
  }
}