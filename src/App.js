import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = "https://course-api.com/react-tabs-project";
/*
function App() {
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJob = async () => {
    const response = await fetch(url);
    const newjob = await response.json();
    setJob(newjob);
    setLoading(false);
  };

  useEffect(() => {
    fetchJob();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h2>loading...</h2>
      </section>
    );
  }
  const { company, duties, dates, title } = job[0];
  return (
    <section className="section">
      <div className="title">
        <h2>eperience</h2>
        <div className="underline"></div>
      </div>
      <article className="job-info">

        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty, index) => {
          return (
            <div className="job-desc" key={index}>
              <FaAngleDoubleRight className="job-icon" />
              <p>{duty}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default App;
*/

const App = () => {
  const [loading, setloading] = useState(true);
  const [job, setjob] = useState([]);
  const [value, setvalue] = useState(0);

  const fetchJob = async () => {
    const response = await fetch(url);
    const newJob = await response.json();
    console.log(newJob);
    setjob(newJob);
    setloading(false);
  };

  useEffect(() => {
    fetchJob();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h2>loading....</h2>
      </section>
    );
  }
  const { duties, dates, company, title } = job[value];
  return (
    <section className="section">
      <div className="title">
        <h2>eperience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn cntainer */}
        <div className="btn-container">
          {job.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setvalue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duties}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default App;
