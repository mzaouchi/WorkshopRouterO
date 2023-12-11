import { useNavigate, useParams } from "react-router-dom"

const Profil=({students})=>{
    var {id} = useParams()
    var found = students.find((el,i,t)=>el.id == id)
    // console.log(found)
    const navigate = useNavigate()
    return(
        <div>
            <h1>Profil Component</h1>
            <h2>{found.name}</h2>
            <img src={found.posterURL}/>
            <h3>{found.age}</h3>
            <button onClick={()=>navigate("/")}>Home</button>
        </div>
    )
}

export default Profil