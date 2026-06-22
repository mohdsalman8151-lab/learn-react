import { useNavigate, useParams } from "react-router-dom"

export default function User(){
    const {id} = useParams()
    const navigate = useNavigate()
    console.log(useParams())
    const gotoCard = () =>{
        navigate("/counter")
    }
    return (
        <>
        <h1 className="text-2xl text-white">
            User Informations id {id}
        </h1>
        <button onClick={gotoCard}>Goto cardList</button>

        </>
    )
}