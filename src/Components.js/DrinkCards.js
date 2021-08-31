import React, { Component } from 'react'
import { Card,Button ,Col} from 'react-bootstrap'

export class DrinkCards extends Component {
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
                        <Button onClick={()=>this.props.addDrink(this.props.item)} variant="primary">Add to favourite</Button>
                    </Card.Body>
                </Card>
                </Col>
            </>
        )
    }
}

export default DrinkCards
