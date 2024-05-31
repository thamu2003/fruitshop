import { useEffect, useState} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';

function Box() {
    const[detail,setDetail]=useState([]);
    useEffect(()=>{
    getUserData()
    },[])
    const getUserData=()=>{
        axios
        .get("http://localhost:2003/Register/get")
        .then((a)=>{
            // console.log(a.data);
            setDetail(a.data);
        })
    }
    
    const deleteUser =(id)=>{
        axios.post(`http://localhost:2003/Register/delete/${id}`)
        .then((res)=>{
            // console.log(res);
            getUserData()
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
  return (
    <>
    <h1>table</h1>
    <Table striped hover responsive="sm">
        <thead>
            <tr>
                <th>name</th>
                <th>address</th>
                <th>email</th>
                <th>Button</th>
            </tr>
            
        </thead>
        <tbody>
            {
                detail.map((cus)=>(
                    <tr key={cus.demoId}>
                        <td>{cus.name}</td>
                        <td>{cus.address}</td>
                        <td>{cus.email}</td>
                        <td><Button variant="primary">Update</Button></td>
                       <td><Button variant="danger" onClick={()=>{deleteUser(cus.demoId)}}>Delete</Button></td>
                        <td><Button>view</Button></td>

                    </tr>
                ))
            }
        </tbody>
    </Table>
    
    </>
  );
}

export default Box