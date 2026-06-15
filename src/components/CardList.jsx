import Card from "./card";
const CardList = () => {
     const users = [
        {id:1, name:"Mohd Sadiq",img:"https://i.pinimg.com/736x/e1/4a/83/e14a8371f954ca9c153ba39cb4af9b87.jpg",bio:"Hello, I am Sadiq. I am a software developer with a passion for creating innovative solutions. With expertise in various programming languages and frameworks.", hobbies:["coding","gaming","traveling"]},
        {id:2, name:"Zeeshan",img:"https://i.pinimg.com/736x/97/00/19/9700195ee1212e3be61c0294fdc80a0a.jpg",bio:"Hi, I'm Zeeshan, a passionate software developer with a love for coding and problem-solving. With experience in various programming languages and frameworks.", hobbies:["coding","gaming","traveling"]},
        {id:3, name:"Mohd Salman",img:"https://i.pinimg.com/736x/0c/76/9f/0c769f55b0bf8735acc9eb63efabff99.jpg",bio:"Hey there! I'm Salman, a passionate software developer with a knack for problem-solving. With experience in various programming languages and frameworks.", hobbies:["coding","gaming","traveling"]},
        {id:4, name:"Mohd Noman",img:"https://i.pinimg.com/736x/03/8f/73/038f73465c299bb43e810271a8b73d56.jpg",bio:"Hello, I am Noman. I am a software developer with a passion for creating innovative solutions. With expertise in various programming languages and frameworks.", hobbies:["coding","gaming","traveling"]},
        {id:5, name:"Mohd Asif", hobbies:["coding","gaming","traveling"]},
    ]
  return (
    <>
        {users.map((user,idx,f) => (
            <div key={user.id}>
            <Card  user={user} />
            </div>
        ))}
    </>
  )
}

export default CardList