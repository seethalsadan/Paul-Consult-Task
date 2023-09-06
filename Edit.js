import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edit() {
  // const [id, setId] = useState("");
  // const [empName, setEmpName] = useState("");
  // const [empAge, setEmpAge] = useState("");
  // const [empDesg, setEmpDesg] = useState("");
  // const [empSalary, setEmpSalary] = useState("");

  // let location = useNavigate();

  // // get path parameter from url
  // const params = useParams();
  // // console.log(params.id);

  // // api call to get detailes of particular employee from server
  // const fetchEmployee = async () => {
  //   const result = await axios.get(
  //     "http://localhost:8000/get-an-employee/" + params.id
  //   );
  //   console.log(result);
  //   setId(result.data.employee.id);
  //   setEmpName(result.data.employee.uname);
  //   setEmpAge(result.data.employee.age);
  //   setEmpDesg(result.data.employee.designation);
  //   setEmpSalary(result.data.employee.salary);
  // };

  // const handleUpdate = async (e) => {
  //   e.preventDefault();
  //   const body = {
  //     id,
  //     empName,
  //     empAge,
  //     empDesg,
  //     empSalary,
  //   };

  //   // api call to update particular employee
  //   const result = await axios.post(
  //     "http://localhost:8000/update-employee",
  //     body
  //   );
  //   alert(result.data.message);
  //   // redirect to admin page
  //   location("/");
  // };

  // useEffect(() => {
  //   fetchEmployee();
  // }, []);
  return (
    <div className="container mt-2">
      <h1 className="text-center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
</svg> Update Material</h1>
      <div className="mt-3 border rounded p-3">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Material Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="Material Id"
              // value={empName}
              // onChange={(e) => setEmpName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Material category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Material category"
              // value={empAge}
              // onChange={(e) => setEmpAge(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSalary">
            <Form.Label>Short description </Form.Label>
            <Form.Control
              type="text"
              placeholder="Short description"
              // value={empSalary}
              // onChange={(e) => setEmpSalary(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Long description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Long description"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Size 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Size 1"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Size 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Size 2"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Size 3</Form.Label>
            <Form.Control
              type="text"
              placeholder="Size 3"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Pressure Class</Form.Label>
            <Form.Control
              type="text"
              placeholder="Pressure Class"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Schedule 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Schedule 1"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Schedule 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Schedule 2"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Schedule 3</Form.Label>
            <Form.Control
              type="text"
              placeholder="Schedule 3"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Thickness 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Thickness 1"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Thickness 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Thickness 2"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Thickness 3</Form.Label>
            <Form.Control
              type="text"
              placeholder="Thickness 3"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>End Connection 1 </Form.Label>
            <Form.Control
              type="text"
              placeholder="End Connection 1"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>End Connection 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="End Connection 2"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>End Connection 3</Form.Label>
            <Form.Control
              type="text"
              placeholder="End Connection 3"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Spec 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Spec 1"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Spec 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Spec 2"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Spec 3</Form.Label>
            <Form.Control
              type="text"
              placeholder="Spec 3"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Spec 4</Form.Label>
            <Form.Control
              type="text"
              placeholder="Spec 4"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Spec 5</Form.Label>
            <Form.Control
              type="text"
              placeholder="Spec 5"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesignation">
            <Form.Label>Unit Weight</Form.Label>
            <Form.Control
              type="text"
              placeholder="Unit Weight"
              // value={empDesg}
              // onChange={(e) => setEmpDesg(e.target.value)}
            />
          </Form.Group>

          <Button
            className="me-3"
            variant="success"
            type="submit"
            // onClick={(e) => handleUpdate(e)}
          >
            Update
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

export default Edit;
