import UserData from "./userData";

export default function Header(){
    console.log("Header component rendered");
    return(
        <div className="bg-yellow-500 ">
            <h1 className="text-white text-2xl font-bold">Crystal Beauty Clear</h1>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis, id iusto culpa esse adipisci voluptatum repudiandae dolorem qui quaerat accusantium quia placeat quasi, quisquam perferendis deserunt necessitatibus, doloremque provident!</p>
            <UserData/>
        </div>
    )
}