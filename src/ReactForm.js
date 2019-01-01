import React,{Component} from 'react'
import './App.css'

class ReactForm extends Component {

    getInitialState(){
        return (
        {  omg:'akan' }    
        )    
    }

    handlChange(e){
        this.setState({omg:e.target.value.toUpperCase()})
    }

    render(){
        return(
            <div>
                <form>
                    <input type="text" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default ReactForm;