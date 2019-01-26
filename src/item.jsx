import React, {Component} from 'react';

class Item extends Component{

    render(){
        let line ={
            borderTop:'1px solid'
        }
        return(
            <div className='row cart-item' >
                <div className='col-sm-3'>
                    <Image image={this.props.image}/>
                </div>
                <div className='col-sm-9'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <Title title={this.props.title}/>
                            <Price price={this.props.price}/>                            
                            <Total total={this.props.price * this.props.qty}/>                        
                        </div>
                        <hr style={line}/>
                        <div className='row justify-content-end'>
                            <Quantity qty={this.props.qty}/>
                            <div className='col-sm-4 ml-auto'>
                                <Increase onClick={this.props.onIncrement}/>
                                <Reduce onClick={this.props.onDecrement}/>
                                <Remove onClick={this.props.onRemove}/>
                            </div>                     
                        </div>
                    </div>

                </div>
            
            </div>       
        );
    }
}

const Image = ({image})=>{
    let imageStyle = {
        height:'100px',
    }
    return <div className='col-sm'>
            <img className='rounded' src={image} style={imageStyle}/>
        </div>
}

const Title = ({title})=>{
    return <div className='col-sm'>
     <p>{title}</p>
     </div>
}

const Price = ({price})=>{
    return <div className='col-sm'>
    <p>{price}</p>
    </div>
}

const Quantity = ({qty})=>{
    return <div className='col-sm offset-4'>
    <p>{qty} item(s)</p>
    </div>
}

const Total = ({total})=>{
    return <div className='col-sm'>
        <p>{total}</p>
    </div>
}

const Increase = ({onClick})=>{
    return <button onClick={onClick} className='btn btn-sm btn-primary mr-2'>+</button>
}

const Reduce = ({onClick})=>{
    return <button onClick={onClick} className='btn btn-sm btn-warning mx-2'>-</button>
}

const Remove = ({onClick})=>{
    return <button onClick={onClick} className='btn btn-sm btn-danger mx-2'>x</button>
}

export default Item;