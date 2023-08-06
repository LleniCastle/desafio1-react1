import Badge from 'react-bootstrap/Badge'; 

const Tags = ({bg, title}) => {
    return (
    <>
    <Badge bg={bg}>{title}</Badge>
    </>
    ); 
};
    export default Tags;