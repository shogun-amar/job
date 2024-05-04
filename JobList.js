import { useState, useEffect } from "react";
import JobCard from "./JobCard";

function JobList() {
    const [jobs, setJobs] = useState([]);
    const [filters, setFilters] = useState({
        minExp: "",
        companyName: "",
        location: "",
        remote: "",
        techStack: "",
        role: "",
        minBasePay: ""
    });

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

    const filterJobs = (job) => {
        if (job.minExp < filters.minExp ||
            (filters.companyName && !job.companyName.toLowerCase().includes(filters.companyName.toLowerCase())) ||
            (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) ||
            (filters.remote && job.remote !== filters.remote) ||
            (filters.techStack && !job.techStack.toLowerCase().includes(filters.techStack.toLowerCase())) ||
            (filters.role && !job.jobRole.toLowerCase().includes(filters.role.toLowerCase())) ||
            job.minJdSalary < filters.minBasePay) {
            return false;
        }
        return true;
    };

    const filteredJobs = jobs.filter(filterJobs);

    return (
        <div>
            <div className="filter-container">
                <input
                    type="number"
                    placeholder="Min Experience"
                    value={filters.minExp}
                    onChange={(e) => setFilters({ ...filters, minExp: e.target.value })}
                    className="filter-input"
                />
                <input
                    type="text"
                    placeholder="Company Name"
                    value={filters.companyName}
                    onChange={(e) => setFilters({ ...filters, companyName: e.target.value })}
                    className="filter-input"
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    className="filter-input"
                />
                <select
                    value={filters.remote}
                    onChange={(e) => setFilters({ ...filters, remote: e.target.value })}
                    className="filter-input"
                >
                    <option value="">Remote/on-site</option>
                    <option value="remote">Remote</option>
                    <option value="onsite">On-site</option>
                    <option value="hybrid">hybrid</option>
                </select>
                <input
                    type="text"
                    placeholder="Tech Stack"
                    value={filters.techStack}
                    onChange={(e) => setFilters({ ...filters, techStack: e.target.value })}
                    className="filter-input"
                />
                <input
                    type="text"
                    placeholder="Role"
                    value={filters.role}
                    onChange={(e) => setFilters({ ...filters, role: e.target.value })}
                    className="filter-input"
                />
                <input
                    type="number"
                    placeholder="Min Base Pay"
                    value={filters.minBasePay}
                    onChange={(e) => setFilters({ ...filters, minBasePay: e.target.value })}
                    className="filter-input"
                />
            </div>
    
            <div className="job-list">
                {filteredJobs.map(job => (
                    <JobCard key={job.jdUid} job={job} />
                ))}
            </div>
        </div>
    );
}

export default JobList;
