import React, {Component} from 'react';

class Adds extends Component {
    
    constructor(props){
        super(props);
        
    }
    
    btnClick(title){
        alert(title, ": Not available for rent")
    }
    
    render(){
    
    return (
    
        <div className="card">
            <button className="btn-rent" onClick={this.btnClick.bind(this,this.props.title)}>Meiten</button>
        
                <div className="card-header">
                     <img src={this.props.thumbnail} width="100%" alt={this.props.thumbAlt}/>
                </div>
        
                <div className="card-body">
                
                    <h4>
                        {this.props.title}
                    </h4>
        
                    <p>
                        {this.props.postalCode} {this.props.street} / {this.props.city}
        
                    </p>
        
                </div>

                <div className="card-footer">
                    
                    <h4>
                        {this.props.price === undefined ? 'Not available' : this.props.price +" €" } 
                    </h4>
    

                    <p>
                    
                        {this.props.numberOfRooms + " Zimmer"} {"ab " + this.props.space + "m²"}
                    
                    </p>
                </div>
        
        </div>
    
    );
    }
}

export default Adds;