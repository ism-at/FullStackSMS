import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewStudent() {

    const[student,setStudent]=useState({
        firstName:" ",
        lastName:" ",
        email:" "
    });

    const { id } = useParams();

    useEffect(() => {
        loadStudent();
  }, []);

  const loadStudent = async () => {
    try {
      const result = await axios.get(`http://54.205.160.227:8080/students/${id}`);
      setStudent(result.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      // Optionally, handle error state in my UI
    }
  };
  

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Student Details</h2>

                <div className='card'>
                    <div className='card-header'>
                        Details of Student ID :
                        <ul className='list-group list-grroup-flush'>
                            <li className='list-group-item'>
                                <b>First Name:</b> {student.firstName}
                            </li>

                            <li className='list-group-item'>
                                <b>Last Name:</b> {student.lastName}
                            </li>

                            <li className='list-group-item'>
                                <b>Email:</b> {student.email}
                            </li>

                        </ul>
                    </div>
                </div>

                <Link className='btn btn-secondary my-2' to={"/"}>Back To Home</Link>

            </div>
        </div>
    </div>
  )
}
