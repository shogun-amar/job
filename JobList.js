import { useState, useEffect } from "react";
import JobCard from "./JobCard";

function JobList() {
    const [jobs, setJobs] = useState([]);
  
    useEffect(() => {
        const fetchJobs = async () => {
          try {
            const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify()
            });
            const data = await response.json();
            console.log("Fetched data:", data); 
            setJobs(data.jdList);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchJobs();
      }, []);

    return (
        <div className="job-list">
          {jobs.map(job => (
            <JobCard key={job.jdUid} job={job} />
          ))}
        </div>
      );
    }

    export default JobList;