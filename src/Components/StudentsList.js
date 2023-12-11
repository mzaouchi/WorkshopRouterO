import StudentCard from "./StudentCard"

const StudentsList=({students})=>{
    return(
        <div className="cards">
            {
                students.map((el,i,t)=> <StudentCard el={el}/>)
            }
        </div>
    )
}

export default StudentsList