import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const StudentCard=({el})=>{
    return(
        <Link to={`/profil/${el.id}`}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.posterURL} style={{width:'286px',height:'286px'}}/>
        <Card.Body>
            <Card.Title>{el.name}</Card.Title>
            <Card.Text>
            {el.age}
            <br/>
            {el.city}
            </Card.Text>
        </Card.Body>
        </Card>
        </Link>
    )
}

export default StudentCard