import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Home() {

// Create Obj to store the Student-Info in Home
const [students, setStudents] = useState([]);

// Hook for delete
const { id } = useParams();

useEffect(() => {
    loadStudents();
}, []);

const loadStudents = async () => {
    const result = await axios.get("http://54.205.160.227:8080/students");
    setStudents(result.data);
};

const deleteStudent = async (id) => {
    await axios.delete(`http://54.205.160.227:8080/students/${id}`);
    loadStudents();
};

  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table  border shadow">
                <thead>
                    <tr>
                        <th scope="col"># NO</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Eamil</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr className='thick'>
                            <th scope="row" key={index}>{index + 1}</th>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>
                                <Link className='btn btn-success mx-2' to={`/ViewStudent/${student.id}`}>VIEW</Link>
                                <Link className='btn btn-outline-warning mx-2' to={`/EditStudent/${student.id}`}>EDITE</Link>
                                <button className='btn btn-danger mx-2' onClick={()=>deleteStudent(student.id)}>DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    )
}
