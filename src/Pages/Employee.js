import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Employee = ({ emp }) => {
    console.log(emp);
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        {emp.name}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{emp.designation}</ListGroupItem>
                    <ListGroupItem>{emp.joiningDate}</ListGroupItem>
                    {/* <ListGroupItem>{emp.designation}</ListGroupItem> */}
                </ListGroup>

            </Card>
        </div>
    );
};

export default Employee;