import React, { useEffect } from "react";
import {
  ParticleContainer,
  ExperienceSection,
  Title,
  ExperienceList,
  ExperienceItem,
  JobTitle,
  Company,
  Timeline,
  Description,
} from "./Styles/ExperienceStyles";

// Other imports and Experience component logic remain the same

// Add particles or custom floating animations (optional)
const FloatingParticles = () => {
  useEffect(() => {
    // You can add a custom particle animation library here, or simple canvas animations.
  }, []);

  return <ParticleContainer />;
};

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <FloatingParticles />
      <Title>My Experience</Title>
      <ExperienceList
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.2,
              ease: "easeInOut",
              staggerChildren: 0.4,
            },
          },
        }}
      >
        {/* Experience Items */}
        <ExperienceItem>
          <JobTitle>Associate Software Engineer</JobTitle>
          <Company>
            BOSCH Global Software Technologies, Bangalore, India
          </Company>
          <Timeline>Jul. 2023 - Present</Timeline>
          <JobTitle>DevOps Engineer</JobTitle>
          <Description>
            • Architected and maintained CI/CD pipelines, automating testing,
            building, and deployment processes, which slashed deployment time by
            60% and improved application availability by 20%.
            <br />
            • Engineered a custom Jenkins Plugin tailored to streamline internal
            processes for the community, resulting in a 40% reduction in build
            times and a 25% increase in deployment accuracy.
            <br />
            • Spearheaded the implementation and management of Docker
            containerization, leading to a 30% increase in application
            scalability and reducing deployment time by 50%.
            <br />
            • Led the implementation of auto-scaling in Kubernetes, resulting in
            a 60% reduction in manual intervention, increasing system
            responsiveness during peak loads, and saving 20 hours per week in
            operational tasks.
            <br />
            • Designed and Authored automation scripts in Python and Shell,
            enhancing daily operations by saving 20 hours weekly and elevating
            task completion rates by 35%.
            <br />
          </Description>
        </ExperienceItem>

        <ExperienceItem>
          <JobTitle>Full Stack Engineer</JobTitle>
          <Company>
            BOSCH Global Software Technologies, Bangalore, India
          </Company>
          <Description>
            • Brainstormed an accessible “docs-as-code” framework with DocHub
            aimed at simplifying document processes, allowing teams to focus on
            core activities by decreasing manual effort by 40 hours monthly.
            <br />
            • Developed an automated visualization tool integrating Sphinx with
            Graphviz and PlantUML that generated complex UML diagrams
            effortlessly, enhanced the quality of technical documentation while
            saving team members 15 hours monthly on visual tasks.
            <br />
            • Created a CI/CD-driven documentation solution, integrating Source
            Code Management (SCM) tools such as GitHub, GitLabs, and Azure
            DevOps, ensuring that documentation stays in sync with software
            releases.
            <br />
            • Deployed an innovative, secure role-based access control (RBAC)
            strategy on cloud infrastructure which facilitated controlled
            visibility into project documents across departments with zero data
            breaches reported.
            <br />
            • Implemented a fully automated CI/CD pipeline that transformed rst
            files into HTML utilizing Sphinx, resulting in seamless
            documentation publishing and reducing time spent on manual
            formatting by over 15 hours weekly.
            <br />
          </Description>
        </ExperienceItem>

        <ExperienceItem>
          <JobTitle>Google Summer of Code Contributor</JobTitle>
          <Company>Google Summer of Code 2022 - PEcAn Projects</Company>
          <Timeline>Jun. 2022 - Sept 2022</Timeline>
          <Description>
            • Refactored 10+ R packages for CRAN compliance, improving code
            quality and maintainability.
            <br />
            • Selected as a Google Summer of Code (GSoC) student for the PEcAn
            project in 2022, contributing to the integration of packages into
            CRAN (Comprehensive R Archive Network).
            <br />
            • Directed the refactoring of 10+ R packages, ensuring compliance
            with CRAN guidelines and enhancing code quality and maintainability
            by 30%.
            <br />
            • Engineered critical functions in R to eliminate non-CRAN
            dependencies, optimizing code performance and reducing software
            maintenance overhead by 40%.
            <br />
            • Optimized the download process for users by enhancing
            accessibility to PEcAn packages, simplified installation through
            ’install.packages()’ command, resulting in 40% faster download
            speeds on personal machines.
            <br />
          </Description>
        </ExperienceItem>
      </ExperienceList>
    </ExperienceSection>
  );
};

export default Experience;
