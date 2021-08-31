import axios from 'axios'
import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import DrinkCards from './DrinkCards';

export class Home extends Component {

constructor(props){
    super(props);
    this.state={
        drinkData :[],
        show : false
    }
}


    componentDidMount=()=>{
        let url2 = 'http://localhost:3005/getDrink'
        axios.get(url2).then(item=>{
            this.setState({
                drinkData:item.data,
                show :true
            })
        })
    }



 addDrink =(data)=>{
  axios.post('http://localhost:3005/addDrink',data)
 }

    render() {
        return (
            <>
              <Row style={{gap:'60px' , marginTop:'50px'}}>
                   {this.state.show && this.state.drinkData.map((item,idx)=>{
                       return(
                           <DrinkCards item={item} addDrink={this.addDrink}/>
                       )
                   })
                }
              </Row> 
            </>
        )
    }
}

export default Home
