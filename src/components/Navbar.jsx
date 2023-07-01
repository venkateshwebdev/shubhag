import MainNavbar from "./MainNavbar";
import MiniNavbar from "./MiniNavbar";

const Navbar = () => {
    return (
        <div className="nav-container">
            <MiniNavbar />
            <MainNavbar />
        </div>
    );
}
 
export default Navbar;