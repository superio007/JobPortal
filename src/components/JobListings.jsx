import React, { useState , useEffect } from "react";
import { jobs } from "../jobs.json";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
const JobListings = ({isHome = false}) => {
    // const jobListing = isHome ? jobs.slice(0, 3) : jobs;
    const [jobs , setJobs] = useState([]);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        let apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
        setLoading(false);
      }
      fetchData();
    },[]);
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          {
            loading ? <Spinner />
            :(
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job) => (    
                  <JobListing key={job.id} job={job}/>
                ))}
              </div>
            )
          }
        </div>
      </section>
    </>
  );
};

export default JobListings;


