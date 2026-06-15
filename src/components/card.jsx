import {CircleUserRound} from "lucide-react";
import {useState } from "react";
import Button from "./button";
import '../styles/card.css'
function Card({user}) {
    const {name="Guest", img="https://i.pinimg.com/736x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg",bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit.",hobbies= []} = user || {};
    const [isFollowing, setIsFollowing] = useState(false);
    function handleFollow(){
        setIsFollowing(!isFollowing);

    }
    return (
        <div className="w-[350px]  bg-gray-400 hover:bg-gray-100 hover:shadow-lg hover:text-red-950 rounded-[20px] translate duration-300 ease-in-out p-5 shadow-md m-5 text-black">
            <img src={img} alt="" className="w-[200px]  object-cover shadow-xl/20 rounded-full  translate-x-[27%]"/>
            <h1 className="text-2xl p-2.5 font-bold flex items-center gap-2"> <CircleUserRound /> <span>{name}</span></h1>
            <p className="text-base text-black p-2.5">{bio}</p>
            <div className="flex flex-wrap gap-2 p-2.5">
                {hobbies.map((hobby, index) => (
                    <span key={index} className="bg-gray-300 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {hobby}
                    </span>
                ))}

            </div>

            <Button 
                className="bg-gray-900 text-white  px-4 py-2 rounded hover:bg-gray-700 transition duration-300 ease-in-out"
                label={isFollowing ? 'Unfollow' : 'Follow'}
                handleClick={handleFollow}
            />
        </div>
    )
}
export default Card;