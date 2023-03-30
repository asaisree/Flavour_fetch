import { useEffect, useState } from 'react';
import { Accordion, Badge, Button, Card } from 'react-bootstrap';
import MainScreen from "../../components/MainScreen";
import axios from 'axios';

const MyKitchen = () => {
    const [notes, setNotes] = useState([]);
    const deleteHandler = (id) => {
        if (window.confirm("Confirm to delete.")) {
        }
    };
    
    const fetchNotes = async () => {
        const { data } = await axios.get("/api/notes");
        setNotes(data);
    }

    console.log(notes);

    useEffect(() => {
        fetchNotes();
    }, [])
   
    return (
        <MainScreen title='Welcome back Sai Sree Amara'>
            <a href='/addDish'>
                <Button style={{marginLeft:10, marginBottom:6}}size="lg">
                    Add new dish
                </Button>
                </a>
            {notes.map(note => (
                <Accordion key={note._id} defaultActiveKey="1" flush>
                    <Accordion.Item eventKey="0">
                        <Card style={{ margin: 10 }}>
                            
                                <Card.Header style={{display:"flex"}}>
                                    <span
                                        style={{
                                            color: "black",
                                            textDecoration: "none",
                                            flex: 1,
                                            cursor: "pointer",
                                            alignSelf: "center",
                                            fontSize:18,
                                        }}
                                    >
                                      <Accordion.Header>{note.title}</Accordion.Header>  
                                    </span>
                                    <div>
                                        <Button href={`/note/${note._id}`}>Edit</Button>
                                        <Button className="mx-2" variant="danger"  onClick={()=>deleteHandler(note._id)}>Delete</Button>
                                    </div>
                                </Card.Header>
                            <Accordion.Body>
                                <Card.Body>
                            <h4>
                                <Badge>
                                    Category-{note.category}
                                </Badge>
                            </h4>
                        <blockquote className="blockquote mb-0">
                            <p>
                               {note.content}
                            </p>
                            <footer className="blockquote-footer">
                             Uploaded on- date
                            </footer>
                        </blockquote>
                    </Card.Body>        
                        </Accordion.Body>
                        
                </Card>
                    </Accordion.Item>  
                </Accordion>
                    
            ))}  
        </MainScreen>
    ); 
};

export default MyKitchen