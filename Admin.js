import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { RiFileExcel2Fill } from 'react-icons/ri'; // Import the Excel file icon
import { BsCheckSquare } from 'react-icons/bs'; // Import the checklist icon


function Admin() {const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  // const [allEmployees, setAllEmployees] = useState([]);

  // const fetchData = async () => {
  //   const result = await axios.get("http://localhost:8000/get-all-employees");
  //   setAllEmployees(result.data.employees);
  // };

  // useEffect(() => {
  //   fetchData();
  // });

  // // handleDelete
  // const handleDelete = async (id) => {
  //   const result = await axios.delete(
  //     `http://localhost:8000/delete-employee/${id}`
  //   );
  //   alert((await result).data.message);
  //   fetchData();
  // };
  return (
    <div className="container mt-2">
    <h1 className="mb-5 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
      </svg> &nbsp;
      Material Management System <br /> <br />
     
      </h1>
      <h1 className="mb-5 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
</svg> &nbsp; Material List</h1>
<div>
        <Link to="/add">
          <button className="btn btn-info me-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z" />
            </svg> &nbsp; Add New Material
          </button>
        </Link>
        <label htmlFor="file-upload" className="btn btn-info me-2">
          <RiFileExcel2Fill /> Upload Excel File
          <input type="file" id="file-upload" accept=".xlsx,.xls" onChange={handleFileSelect} style={{ display: "none" }} />
        </label>
      </div>
      <br></br>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
          <th><BsCheckSquare /></th> {/* Add the checklist icon */}
            <th>Material ID</th>
            <th>Material Category</th>
            <th>Short Description</th>
            <th>Long Description</th>
            <th>Size 1</th>
            <th>Size 2</th>
            <th>Size 3</th>
            <th>Pressure Class</th>
            <th>Sch 1</th>
            <th>Sch 2</th>
            <th>Sch 3</th>
            <th>Thk 1</th>
            <th>Thk 2</th>
            <th>Thk 3</th>
            <th>End Connection 1</th>
            <th>End Connection 2</th>
            <th>Spec 1</th>
            <th>Spec 2</th>
            <th>Spec 3</th>
            <th>Spec 4</th>
            <th>Spec 5</th>
            <th>Unit Weight</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              {/* <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></td> */}
             <td></td>

              <td> <input type="text" class="form-control" placeholder="Search..." /></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td><input type="text" class="form-control" placeholder="Search..."/></td>
              <td>
</td>

            </tr>
        </tbody>
        <tbody>
            <tr>
              {/* <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></td> */}
               <td></td>

              <td>x</td>
              <td> x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Link to={"edit/"} className="btn btn-primary me-3">
      <i className="fa-solid fa-pen-to-square"></i>
    </Link>
    <button
      type="button"
      className="btn btn-danger"
      // onClick={(e) => handleDelete()}
    >
      <i className="fa-solid fa-trash"></i>
    </button>
  </div>
</td>

            </tr>
        </tbody>
        <tbody>
            <tr>
              {/* <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></td> */}
              <td></td>
<td>x</td>
              <td> x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Link to={"edit/"} className="btn btn-primary me-3">
      <i className="fa-solid fa-pen-to-square"></i>
    </Link>
    <button
      type="button"
      className="btn btn-danger"
      // onClick={(e) => handleDelete()}
    >
      <i className="fa-solid fa-trash"></i>
    </button>
  </div>
</td>

            </tr>
        </tbody>
        <tbody>
            <tr>
              {/* <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></td> */}
              <td></td>
<td>x</td>
              <td> x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Link to={"edit/"} className="btn btn-primary me-3">
      <i className="fa-solid fa-pen-to-square"></i>
    </Link>
    <button
      type="button"
      className="btn btn-danger"
      // onClick={(e) => handleDelete()}
    >
      <i className="fa-solid fa-trash"></i>
    </button>
  </div>
</td>

            </tr>
        </tbody>
        <tbody>
            <tr>
              {/* <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></td> */}
              <td></td>
<td>x</td>
              <td> x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Link to={"edit/"} className="btn btn-primary me-3">
      <i className="fa-solid fa-pen-to-square"></i>
    </Link>
    <button
      type="button"
      className="btn btn-danger"
      // onClick={(e) => handleDelete()}
    >
      <i className="fa-solid fa-trash"></i>
    </button>
  </div>
</td>

            </tr>
        </tbody>
        <tbody>
            <tr>
              {/* <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></td> */}
              <td></td>
<td>x</td>
              <td> x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Link to={"edit/"} className="btn btn-primary me-3">
      <i className="fa-solid fa-pen-to-square"></i>
    </Link>
    <button
      type="button"
      className="btn btn-danger"
      // onClick={(e) => handleDelete()}
    >
      <i className="fa-solid fa-trash"></i>
    </button>
  </div>
</td>
            </tr>
        </tbody>
      </Table>
      <td>
  
  </td>

    </div>
    
  );
}

export default Admin;
