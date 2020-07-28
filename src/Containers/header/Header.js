import React ,{Component}from 'react';
import './header.css'
import Link from '../../Components/Link'

class Header extends Component{

  constructor(props){
    super(props)
    this.state={
        islading:true,
        number:0,
        data:[{name:'Doston',age:26},{name:'Alisher',age:30}],
        role:{
          Admin:true,
          Password:false
        }
        
      }
      console.log('constructor')


  }
  
    clickHandler =()=>{
      console.log('Click')
      this.setState({number:this.state.number +1}, ()=>this.alertHendler())
    }
    alertHendler =()=>{
      const {number}=this.state;
      if(number===5){
        alert('chegaraga yetib keldik')
      }
    }
    clearHandler = ()=>{

      this.setState({number:0})
    }
    clickAdd = ()=>{
      this.setState({name:this.state.name})
      console.log(this.state.role)
    }

    componentDidMount(){
      console.log('ComponentDidMount   ')
    }


  render(){
    // const {title, data}=this.props;
    const {number}=this.state;
    console.log('render ...')
   
    return(
      <>
      <h1 className='headerclass'>header</h1>
      <h1>Namber:{number}</h1>
      <input title='name1' placeholder='Name'></input><br/>
      <input title='number' placeholder='Age'></input><br/>
      <button onClick={this.clickHandler}>Click me</button>
      <button onClick={this.clearHandler}>Clear</button>
      <button onClick={this.clickAdd}>Add</button>
      <ul><li></li></ul>
      <Link data={{url:'/Link to', title:'Link'}}/>
      


     


      </>
    )
  }
}
export default Header;