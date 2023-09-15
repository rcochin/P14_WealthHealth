import { Link } from "react-router-dom";
import CreateEmployee from "../../components/CreateEmployee/CreateEmployee";
import './Home.css';

function Home() {

    return ( 
        <main>
            <h1>HRnet</h1>
            <Link to="/employee-list">View Current Employees</Link>
            <h2>Create Elployee</h2>
            <CreateEmployee />
        </main>
    )
}

export default Home;