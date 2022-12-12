import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutImg from "../assets/3.jpg";

function Addp() {
    return (
        <>
            <Navbar/>
            <Hero
                cName="hero-contact"
                heroImg={AboutImg}
                title="Add New Partners"
                text="Use the information in the database to register new partners for access to Partner Dashboard"
                btnClass="hide"
            />
            <div className="form-container">
                <form>
                    <label>Partner Name</label>
                    <input placeholder="Company Name"/>
                    <label>Email</label>
                    <input placeholder="Email"/>
                    <label>Password</label>
                    <input placeholder="Enter Your Password"/>
                    <label>Confirm Password</label>
                    <input placeholder="Please Confirm Your Password"/>
                    <button>Register</button>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default Addp;