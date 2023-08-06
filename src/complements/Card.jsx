import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({ image, name, text, bg, title}) => {
    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} style={{ height: "150px" }}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
                <Tags bg={bg} title={title} />
            </Card>
        </>
    );
};
export default MyCard;