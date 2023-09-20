import { FaMinus, FaPlus } from "react-icons/fa";
import "./StudentCard.css";

const StudentCard = ({ student, expanded, onClick }) => {
  
  const { email, company, first_name, last_name, pic, grades, id, skill } =
    student;

  const numericGrades = grades.map((grade) => Number(grade.score));
  let total = 0;

  for (const grade of numericGrades) {
    total += grade;
  }

  const average = total / numericGrades.length;

  console.log(
    `<StudentCard/> rendered name = ${first_name} expanded=${expanded}`
  );
  return (
    <div className="StudentCard" key={id}>
      <div className="StudentCard__avatar">
        <img src={pic} alt={`${first_name} ${last_name}`} />
      </div>
      <div className="StudentCard__info">
        <h1>
          {first_name} {last_name}
        </h1>
        <ul>
          <li>Email: {email}</li>
          <li>Company: {company}</li>
          <li>Skill: {skill}</li>
          <li>Average: {average}%</li>
        </ul>
        {expanded && (
          <div className="StudentCard__grades">
            <ul>
              {grades.map((grade, index) => (
                <li key={`${grade}${index}`}>
                  <span>Test {index + 1}</span> <span>{grade.score}%</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="StudentCard__controls">
        <button
          onClick={onClick}
        >
          {expanded ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
