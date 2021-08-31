import axios from 'axios'
import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import FavouriteCard from './FavouriteCard';
import ModelForm from './ModelForm';

export class Favourie extends Component {
  constructor(props){
      super(props);
      this.state={
          favData: [],
          show: false,
          strDrinkThumb: " ",
          strDrink : " ",
          idDrink : " ",
          showModel : false,
          index : 0
      }
  }



    componentDidMount=()=>{
        let url3='http://localhost:3005/getData'
        axios.get(url3).then(item=>{
            this.setState({
                favData : item.data,
                show:true
            })
        })
    }



    delete=(index)=>{
        const id = this.state.favData[index]._id
        axios.delete(`http://localhost:3005/deleteDrink/${id}`).then(item=>{
            this.setState({
                favData : item.data,
                show: true
            })
        })
    }


    showModelform= (index)=>{
        this.setState({
            strDrinkThumb:this.state.favData[index].strDrinkThumb,
            strDrink :this.state.favData[index].strDrink,
            idDrink :this.state.favData[index].idDrink,
            showModel : true,
            index : index
        })

    }


    handleClose=()=>{
      this.setState({
          showModel :false
      })
    }


    update=(e)=>{
        e.preventDefault();
        const id = this.state.favData[this.state.index]._id
        let data= {
            strDrinkThumb : e.target.strDrinkThumb.value,
            strDrink : e.target.strDrink.value,
            idDrink : e.target.idDrink.value
        }
        axios.put(`http://localhost:3005/updateDrink/${id}`,data).then(item=>{
            this.setState({
                favData : item.data,
                
            })
    })
}
    render() {
        return (
            <>
               <Row style={{gap:'60px' , marginTop:'50px'}}>
                   {this.state.show && this.state.favData.map((item,idx)=>{
                      return(
                          <FavouriteCard  item ={item} idx ={idx}   delete={this.delete} showModelform = {this.showModelform}/>
                      )
                   })
                }

                <ModelForm strDrinkThumb={this.state.strDrinkThumb} strDrink={this.state.strDrink}
                 idDrink={this.state.idDrink} showModel={this.state.showModel} handleClose ={this.handleClose} update={this.update}/>
               </Row>
            </>
        )
    }
}

export default Favourie
