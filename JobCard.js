import React from 'react';

function JobCard({ job }) {
    return (
      <div className="job-card">
        <div>
            <img src={job.logoUrl} alt={job.companyName} />
            <span>
                <h3>{job.jobRole}</h3>
                <p> {job.companyName}</p>
                <p> {job.location}</p>
            </span>
        </div>
        <div> Estimated Salary: ₹ {job.minJdSalary} - {job.maxJdSalary}LPA</div>
        <div className='jobDetails'>
            <p><strong>About Company</strong></p>
            <p> {job.jobDetailsFromCompany.substring(0, 100)}View Job</p>   
        </div>
         
        <p className='exp'><strong>Minimum Experience</strong> {job.minExp}</p>
        <button className='applyJobBtn'>Easy Apply</button>
        <button className='refBtn'>Unlock Refferal asks</button>
      </div>
    );
  }

  export default JobCard;