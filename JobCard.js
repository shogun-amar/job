import React, { useState } from 'react';

function JobCard({ job }) {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className='job'>
            <div className="job-card">
                <div className="job-card-header">
                    <img src={job.logoUrl} alt={job.companyName} />
                    <div>
                        <p className='grey-color bold'> {job.companyName} </p>
                        <p>{job.jobRole}</p>
                        <p className='location'> {job.location}</p>
                    </div>
                </div>
                <div className='grey-color'> Estimated Salary: ₹ {job.minJdSalary} - {job.maxJdSalary}LPA <img src='https://cdn-icons-png.flaticon.com/128/5610/5610944.png' alt=''/></div>
                <div className="job-card-details">
                    <p><strong>About Company</strong></p>
                    {showFullDescription ? (
                        <p> {job.jobDetailsFromCompany} </p>
                    ) : (
                        <p className="faded-text"> {job.jobDetailsFromCompany.substring(0, 100)}... <span className="expand" onClick={toggleDescription}>more</span></p>
                    )}
                    <a href={job.jdLink}><center> View Job </center></a>   
                </div>
                <div className='exp'>
                    <p className="grey-color"><strong>Minimum Experience</strong></p> 
                    <p>{job.minExp} years </p>
                </div> 
                <div className="buttons">
                    <button className="job-apply-btn"><img src='https://cdn-icons-png.flaticon.com/128/616/616494.png' alt='' /> Easy Apply</button> 
                    <button className='ref-btn'> Unlock Referral Asks </button>
                </div>
            </div>
        </div>    
    );
}

export default JobCard;
