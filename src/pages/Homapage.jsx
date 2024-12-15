import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ShowallJobs from "../components/ShowallJobs";
function Homapage() {
    return (
       <>
        <Hero title="Become a React Dev" desc="Find the React job that fits your skills and needs"/>
        <HomeCards />
        <JobListings isHome={true}/>
        <ShowallJobs />
       </>
    )
} 

export default Homapage