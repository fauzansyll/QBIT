import { useState } from "react";
import { AboutMe } from "../../temp/data";
import "./About.css";

const About = () => {
  const [data] = useState(AboutMe);
  console.log("About me", data);

  const organizations = data.map((item) => item.organizations);
  const experiences = data.map((item) => item.experiences);

  console.log("Organisasi", organizations);

  return (
    <div className="main">
      <p>About</p>
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.nama}</p>
          <p>{item.alamat}</p>
          <p>{item.sd}</p>
          <p>{item.smp}</p>
          <p>{item.sma}</p>
          <p>{item.sarjana}</p>
        </div>
      ))}
      {organizations.map((item) => {
        return item.map((org, idx) => {
          return (
            <div key={idx}>
              <p>{org.organization_name}</p>
              <p>{org.role}</p>
            </div>
          );
        });
      })}
      {experiences.map((item) => {
        return item.map((exp, idx) => {
          return (
            <div key={idx}>
              <p>{exp.role}</p>
              <p>{exp.company}</p>
              <p>{exp.experience_year}</p>
            </div>
          );
        });
      })}
    </div>
  );
};

export default About;
