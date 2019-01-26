import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from './item';
import {bindActionCreators} from 'redux';
import * as qtyActions from './actions/cartActions';

class Cart extends Component{

    render(){

        const items = this.props.items;
            
        return(
            
            <div className='container-fluid'>
                <h2 className='text-mute'><b>My Cart</b></h2>
                {
                items.map((item,index ) =>(
                <Item key= {item.id} image={item.image}
                 title={item.title}
                 price={item.price}
                 qty={item.qty}
                 onIncrement={() => this.props.increaseQty(index)}
                 onDecrement={() => this.props.reduceQty(index)}
                 onRemove={()=>this.props.removeItem(index)}
                />
                )
                 
                )}
                    <br/>
                    <h3><b>Total:</b></h3>
                    <br/>
                <button className='btn btn-large btn-primary'>Checkout</button>           
            </div> 
  
        );
    }
    
}

const mapStateToProps = state =>{
    return {
        items:state
    };
}

const mapDispatchToProps = (dispatch) =>{
    return {...bindActionCreators(qtyActions,dispatch)};
    
}


export default connect(mapStateToProps,mapDispatchToProps)(Cart);