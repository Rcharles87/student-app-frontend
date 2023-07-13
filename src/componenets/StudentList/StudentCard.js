const StudentCard = ({ student }) =>{
    const { email, company, firstName, lastName, pic, grades, id, skill } = student;

  const numericGrades = grades.map((grade) => Number(grade));
  let total = 0;

  for (const grade of numericGrades) {
    total += grade;
  }

  const average = total / numericGrades.length;


  console.log(`<StudentCard/> rendered name = ${firstName}`)
  return (
    <div key={id}>
      <img src={pic} alt={`${firstName} ${lastName}`} />
      <h1>
        {firstName} {lastName}
      </h1>
      <ul>
        <li>Email: {email}</li>
        <li>Company: {company}</li>
        <li>Skill: {skill}</li>
        <li>Avrage: {average}</li>
      </ul>
    </div>
  );

}

export default StudentCard