import { Component } from "../core/heropy";


export default class FruitItem extends Component {
  constructor(payload){
    super({
      tagName: 'li',
      props: payload.props
    })
  }
  render(){
    this.el.innerHTML =/**html */`
    <span>${this.props.name}</spna>
    <span>${this.props.price}</spna>
    `
    this.el.addEventListener('click', ()=>{
      console.log(this.props.name, this.props.price )
    })
   }
}