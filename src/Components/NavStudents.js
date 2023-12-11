import { Link } from "react-router-dom"

const NavStudents=()=>{
    return(
        <div>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/liststudents"><li>Students</li></Link>
                <Link to="/contacteuuus"><li>Contact</li></Link>
            </ul>
        </div>
    )
}

export default NavStudents