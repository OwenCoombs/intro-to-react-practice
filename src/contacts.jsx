import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import NavBar from "./Menus";

function ClassMates(){
   return(
<ul className="text-center">
    <li>Ryan</li>
    <li>Henergy</li>
    <li>Owen</li>
    <li>Brandon</li>
    <li>Jay</li>
    <li>Caitlin</li>
    <li>Jacinta</li>
    <li>Cody</li>
    <li>Nathen</li>
    <li>Neal</li>
    <li>Duke</li>
    <li>Eion</li>
    <li>Maddie</li>
</ul>
) 
}

function ContactPage(){
    return (
    <div>
        <NavBar />
        <div className="mt-5 text-center">
            
            <h1>Contact Us @</h1>
            <h3>Owencoombs03@gmail.com</h3>
            <ClassMates />
            
        </div>
    </div>
    )
   
}


export default ContactPage