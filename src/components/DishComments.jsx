import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class DishComments extends Component {
    render() {
        console.log(this.props.dish)
        // props.dish is the whole object
        return <div className={`mt-${this.props.marginTop}`}>
            {
                this.props.dish 
                ? <>
                    <h2>Comments for {this.props.dish.name}</h2>
                    <ListGroup>
                        {
                            this.props.dish.comments.map(c => (
                                <ListGroup.Item key={c.id}>"{c.comment}" from {c.author}</ListGroup.Item>
                                ))
                        }
                    </ListGroup>
                </>
                : <span>No dish selected</span>
            }
        </div>
    }
}
export default DishComments