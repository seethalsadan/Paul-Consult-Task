import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

function Add() {
  // const [id, setId] = useState("");
  // const [empName, setEmpName] = useState("");
  // const [empAge, setEmpAge] = useState("");
  // const [empDesg, setEmpDesg] = useState("");
  // const [empSalary, setEmpSalary] = useState("");

  // let location = useNavigate();

  // useEffect(() => {
  //   setId(uuid().slice(0, 6));
  // }, []);

  // const addUser = async (e) => {
  //   setId(uuid().slice(0, 6));

  //   e.preventDefault();
  //   const body = {
  //     id,
  //     empName,
  //     empAge,
  //     empDesg,
  //     empSalary,
  //   };
  //   console.log(body);
  //   // api call
  //   const result = await axios.post("http://localhost:8000/add-employee", body);
  //   console.log(result);
  //   alert(result.data.message);
  //   // redirect to admin page
  //   location("/");
  
  return (
    <div className="container mt-2"> 
      <h1 className="text-center"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
</svg> &nbsp; Add New Material</h1>
  
      <div className="mt-3 border rounded p-3">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Material Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Material Id"
              // onChange={(e) => setEmpName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Material category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Material category"
              // onChange={(e) => setEmpAge(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSalary">
            <Form.Label>Short description </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Short description"
              // onChange={(e) => setEmpSalary(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Long description </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Long description"
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Size 1 </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Size 1"
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Size 2 </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Size 2"
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Size 3 </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Size 3"
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Pressure class</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Pressure class"
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Schedule 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Schedule 1"
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Schedule 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Schedule 2"
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Schedule 3</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Schedule 3"
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Thickness 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Thickness 1"
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Thickness 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Thickness 2"
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Thickness 3</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Thickness 3"
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>End Connection1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter End Connection1"
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>End Connection 2 </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter End Connection 2 "
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" Long desccontrolId="formBasicDesignation">
            <Form.Label>Spec 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Spec 1"
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Spec 2 </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Spec 2"
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Spec 3 </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Spec 3"
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Spec 4 </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Spec 4"
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Spec 5 </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Spec 5"
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Unit Weight </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Unit Weight"
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>


          <Button
            className="me-3"
            variant="success"
            type="submit"
            // onClick={(e) => addUser(e)}
          >
            Add
          </Button>

          <Link to="/">
            <Button variant="warning" type="submit">
              Close
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
  }

export default Add;
