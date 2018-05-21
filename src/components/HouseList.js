import React, {Component} from 'react';
import Adds from './Adds';
import axios from 'axios'

class HouseList extends Component{
    
    constructor(props){
        
        super(props);
        
        this.state ={
            houseList: []
        }
        
    }
    
    componentWillMount(){
        this.getHouseList()   
        
    }
    
    
    getHouseList(){
        
        let houseList = [];
        let _this = this;
        
        axios.get('//api.mcmakler.de/v1/advertisements')
             .then((response) => {
            
            const numTotal = 10;
            
            for(let i=0; i< numTotal; i++){
                houseList.push(response.data.data[i]);
                houseList[i] = response.data.data[i];
                console.log(houseList[i] );
            }
        
            _this.setState({
                houseList: houseList
            })
        })
        .catch((error) => {
          console.log(error);  
        });  
    }
    
    render(){
        
        let houseAds = this.state.houseList.map((adItem, index) => 
                                                
        <Adds
          key={adItem.additionalId}
          thumbnail={adItem.advertisementAssets[2].advertisementThumbnails.inventory_m.url}
          title={adItem.title}
          postalCode={adItem.realestateSummary.address.postalCode}
          street={adItem.realestateSummary.address.street}
          city={adItem.realestateSummary.address.city}
          price={adItem.advertisementPrice.sellPrice}
          space={Math.round(adItem.realestateSummary.space)}
          numberOfRooms={adItem.realestateSummary.numberOfRooms}
          thumbAlt={adItem.advertisementAssets.advertisementThumbnails.thumb_xs.filename}
          />
 
         );

        return (
            <div>
                <div className="nav navbar navbar-fixed-top">
                    <h1> Apartment Listings </h1>

                    <div className="house-list">
                        {houseAds}
                     </div>
                </div>
            </div>

        );
    }
}

export default HouseList;