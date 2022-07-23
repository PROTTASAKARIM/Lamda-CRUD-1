import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Employee = ({ emp }) => {
    const navigate = useNavigate();

    const { _id } = emp;
    const navigateToDetails = id => {
        navigate(`/employees/${id}`)

        console.log(id);
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={emp.empImg} />
                <Card.Body>
                    <Card.Title>Name: {emp.name}</Card.Title>
                    {/* <Card.Text>

                    </Card.Text> */}
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> Designation:  {emp.designation}</ListGroupItem>
                    <ListGroupItem> Joining Date :{emp.joiningDate}</ListGroupItem>
                    {/* <ListGroupItem>{emp.designation}</ListGroupItem> */}
                </ListGroup>
                <button onClick={() => navigateToDetails(_id)}>Details</button>
            </Card>
        </div >
    );
};

export default Employee;