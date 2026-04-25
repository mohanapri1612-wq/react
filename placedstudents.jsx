import { useState } from "react";

const PlacedStudents = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    department: "",
    company: "",
    role: "",
    package: "",
    skills: [],
    placedDate: ""
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedSkills = [...studentData.skills];

      if (checked) {
        updatedSkills.push(value);
      } else {
        updatedSkills = updatedSkills.filter(skill => skill !== value);
      }

      setStudentData({ ...studentData, skills: updatedSkills });
    } else {
      setStudentData({ ...studentData, [name]: value });
    }
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Placed Student Data:", studentData);
  };

  return (
    <div>
      <h2>Placed Students Form</h2>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={studentData.name}
          onChange={handleChange}
        />
        <br /><br />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={studentData.email}
          onChange={handleChange}
        />
        <br /><br />

        {/* Department */}
        <select
          name="department"
          value={studentData.department}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          <option value="IT">IT</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
        </select>
        <br /><br />

        {/* Company */}
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={studentData.company}
          onChange={handleChange}
        />
        <br /><br />

        {/* Role */}
        <input
          type="text"
          name="role"
          placeholder="Job Role"
          value={studentData.role}
          onChange={handleChange}
        />
        <br /><br />

        {/* Package */}
        <input
          type="number"
          name="package"
          placeholder="Package (LPA)"
          value={studentData.package}
          onChange={handleChange}
        />
        <br /><br />

        {/* Placement Date */}
        <input
          type="date"
          name="placedDate"
          value={studentData.placedDate}
          onChange={handleChange}
        />
        <br /><br />

        {/* Skills */}
        <label>Skills:</label>
        <input type="checkbox" value="React" onChange={handleChange} /> React
        <input type="checkbox" value="Java" onChange={handleChange} /> Java
        <input type="checkbox" value="SQL" onChange={handleChange} /> SQL
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {/* Preview */}
      <h3>Preview:</h3>
      <pre>{JSON.stringify(studentData, null, 2)}</pre>
    </div>
  );
};

export default PlacedStudents;
