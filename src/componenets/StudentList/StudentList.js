import { useState } from "react";
import StudentCard from "../StudentCard/StudentCard";

import "./StudentList.css";

const StudentList = ({ studentData }) => {
  const [searchInput, setSearchInput] = useState("");
  const [expanded, setExpanded] = useState([]);

  const handleToggleExpanded = (id) => {
    if (!expanded.includes(id)) {
      const newExpanded = [...expanded, id];
      setExpanded(newExpanded);
    } else {
      const removed = expanded.filter((currId) => currId !== id);
      setExpanded(removed);
    }
  };

  const handleExpandAll = () => {
    const allIds = studentData.map((student) => student.id);
    setExpanded(allIds);
  };

  const handleCollapseAll = () => {
    setExpanded([]);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  let dataToDisplay = studentData;

  if (searchInput) {
    dataToDisplay = studentData.filter((student) => {
      const { first_name, last_name } = student;
      const fullName = `${first_name} ${last_name}`.toLowerCase();

      return fullName.includes(searchInput.toLowerCase());
    });
  }

  const renderContent = () => {
    let contentClassName = "StudentList__content";

    if (dataToDisplay.length === 0) {
      contentClassName += " StudentList__content--center";
      return (
        <div className={contentClassName}>No results for {searchInput}</div>
      );
    } else {
      return (
        <div className={contentClassName}>
          {dataToDisplay.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              expanded={expanded.includes(student.id)}
              setExpanded={setExpanded}
              onClick={() => handleToggleExpanded(student.id)}
            />
          ))}
        </div>
      );
    }
  };

  console.log(`<StudentList /> rendered! searchInput = ${searchInput}`);
  return (
    <div className="StudentList">
      <div className="StudentList__controls">
        <input
          value={searchInput}
          type="text"
          placeholder="Search by name"
          onChange={handleChange}
        />
        <button onClick={handleExpandAll}>Expand All</button>
        <button onClick={handleCollapseAll}>Collapse All</button>
      </div>

      {renderContent()}
    </div>
  );
};

export default StudentList;
