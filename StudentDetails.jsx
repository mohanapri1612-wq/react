import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const StudentDetails = ({ id }) => {
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // find student by ID
        const found = data.find((user) => user.id === Number(id));
        setStudent(found);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  // No ID
  if (!id) {
    return (
      <div className="student-box">
        <h2>No Student ID found</h2>
        <button onClick={() => navigate("/studentlogin")}>
          Go Login
        </button>
      </div>
    );
  }

  // Loading
  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  // No data found
  if (!student) {
    return (
      <div className="student-box">
        <h2>No student found for ID: {id}</h2>
        <button onClick={() => navigate("/studentlogin")}>
          Try Again
        </button>
      </div>
    );
  }

  // Success
  return (
    <div className="student-box">
      <h1>Student Details</h1>

      <p><b>ID:</b> {student.id}</p>
      <p><b>Name:</b> {student.name}</p>
      <p><b>Username:</b> {student.username}</p>
      <p><b>Email:</b> {student.email}</p>
      <p><b>Phone:</b> {student.phone}</p>
      <p><b>Website:</b> {student.website}</p>
      <p><b>Company:</b> {student.company.name}</p>
      <p><b>City:</b> {student.address.city}</p>

      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default StudentDetails;
