import UserData from "./userData";

export default function Header(){
    console.log("Header component rendered");
    return(
        <div className="bg-yellow-500 ">
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
            <a href="https://www.google.com">Google</a>
        </div>
    )
}