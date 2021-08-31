import React, { Component } from 'react'
import { Card, Button, Col } from 'react-bootstrap'
export class FavouriteCard extends Component {
    render() {
        return (
            <>
                <Col>


     <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.item.strDrinkThumb} />
                    <Card.Body>
                        <Card.Title>{this.props.item.strDrink}</Card.Title>
                        <Card.Text>
                            {this.props.item.idDrink}
                        </Card.Text>
                        <Button onClick={()=>this.props.delete(this.props.idx)} variant="primary">Delete</Button>
                        <Button  onClick={()=>this.props.showModelform(this.props.idx)}  variant="primary">update</Button>
                    </Card.Body>
                </Card>
                </Col>
            </>
        )
    }
}

export default FavouriteCard
