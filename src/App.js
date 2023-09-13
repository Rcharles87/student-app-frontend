import { useEffect, useState } from "react";
import "./App.css";
import StudentList from "./componenets/StudentList/StudentList";
import Loading from "./componenets/Loading/Loading.js";
import Error from "./componenets/Error/Error.js";
import Container from "./componenets/Container/Container.js";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("<App/> useEffect() fired");
    async function fetchData() {
      try {
        setError("");
        setLoading(true);
        const res = await fetch(`${API_URL}/students`);
        const json = await res.json();
        console.log("<App/> useEffet() fetched data", json);
        const { data, error } = json;
        if (res.ok) {
          setStudentData(data);
          setLoading(false);
        } else {
          setError(error);
          setLoading(false);
        }
      } catch (err) {
        console.log(`<App/> useEffect error: ${err.message}`);
        setLoading(false);
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return <StudentList studentData={studentData} />;
    }
  };
  console.log(
    `<App /> rendered! error = ${error} loading = ${loading} num of students = ${studentData.length}`
  );
  return (
    <div className="App">
      <Container center={Boolean(error || loading)} scroll={false}>
        {renderContent()}
      </Container>
    </div>
  );
}

export default App;
