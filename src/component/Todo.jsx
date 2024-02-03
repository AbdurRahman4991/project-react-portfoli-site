// import { Container, Row, Col, Button, InputGroup, Form, Table } from "react-bootstrap";
// import { MdDelete } from "react-icons/md";
// import { RiEditLine } from "react-icons/ri";
// import { useState } from "react";
// function Todo() {
//     const [list, setList]= useState([])
//     const [item, setItem]= useState("")

//     const addToList = ()=>{        
//         list.push(item)
//         setList([...list]);    
//         setItem("");   
//     }

//     const editList = (index)=>{
//         // list.edit(index,1)
//         // setList([...list])
//         alert(index)
//     }

//     const removeItem = (index)=>{
//         list.splice(index,1)
//         setList([...list])
//     }


    
//     return (
//       <div>
//         <Container className="topSpace">
//             <Row>
//                 <Col md="8 m-auto">
//                     <h1 className="text-center"> To do operation </h1>
                  
//                         {/* <li>{list.length} <button className="btn btn-danger btn-sm"><MdDelete /></button> </li> count item lenth */}
//                         {
//                             <Table>
//                                 <tbody>
//                                     {
//                                         list.length!==0?(
//                                             list.map((element, index)=>{
//                                                 return(

//                                                     <tr key={index}>
//                                                         <td>{element}</td>
//                                                         <td>
//                                                             <button onClick={()=>{
//                                                                 removeItem(index)
//                                                                 }} className="btn btn-danger btn-sm m-2 todo">
//                                                                  <MdDelete />
//                                                             </button>
//                                                             <button onClick={()=>{ editList(index)}} className="btn btn-success btn-sm">
//                                                                  <RiEditLine className="todo" />
//                                                             </button>
                                                            
//                                                             </td>

                                                            
//                                                     </tr>

//                                                 )
//                                             })

//                                         ):(<tr></tr>)
//                                     }
//                                 </tbody>
//                             </Table>
//                         }

                    

//                     <InputGroup onChange={(e)=>setItem(e.target.value)} className="mb-3">
//                         <Form.Control
//                         value={item}
//                         placeholder="To do list item"
//                         aria-label="Recipient's username"
//                         aria-describedby="basic-addon2"
//                         />
//                         <Button onClick={addToList} variant="outline-secondary"  id="button-addon2">
//                         Submit
//                         </Button>
//                     </InputGroup>
//                 </Col>
//             </Row>
//         </Container>
           
//       </div>  
//     );
// }

// export default Todo;

import { Container, Row, Col, Button, InputGroup, Form, Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";
import { useState } from "react";

function Todo() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [editIndex, setEditIndex] = useState(null); // Track the index being edited
  const [editedItem, setEditedItem] = useState(""); // Track the edited item

  const addToList = () => {
    list.push(item);
    setList([...list]);
    setItem("");
  };

  const editList = (index) => {
    setEditIndex(index);
    setEditedItem(list[index]);
  };

  const saveEdit = (index) => {
    list[index] = editedItem;
    setList([...list]);
    setEditIndex(null);
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditedItem("");
  };

  const removeItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <div>
      <Container className="topSpace">
        <Row>
          <Col md="8 m-auto">
            <h1 className="text-center"> To do operation </h1>

            <Table>
              <tbody>
                {list.length !== 0 ? (
                  list.map((element, index) => (
                    <tr key={index}>
                      {editIndex === index ? (
                        <>
                          <td>
                            <Form.Control
                              value={editedItem}
                              onChange={(e) => setEditedItem(e.target.value)}
                            />
                          </td>
                          <td>
                            <Button
                              onClick={() => saveEdit(index)}
                              className="btn btn-success btn-sm m-2 todo"
                            >
                              Save
                            </Button>
                            <Button
                              onClick={cancelEdit}
                              className="btn btn-secondary btn-sm"
                            >
                              Cancel
                            </Button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{element}</td>
                          <td>
                            <Button
                              onClick={() => removeItem(index)}
                              className="btn btn-danger btn-sm m-2 todo"
                            >
                              <MdDelete />
                            </Button>
                            <Button
                              onClick={() => editList(index)}
                              className="btn btn-success btn-sm"
                            >
                              <RiEditLine className="todo" />
                            </Button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr></tr>
                )}
              </tbody>
            </Table>

            <InputGroup onChange={(e) => setItem(e.target.value)} className="mb-3">
              <Form.Control
                value={item}
                placeholder="To do list item"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button onClick={addToList} variant="outline-secondary" id="button-addon2">
                Submit
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Todo;
