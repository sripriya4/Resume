import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
};

const skills = [
  'Frontend: React, TypeScript',
  'Backend: NestJS',
  'Database: MongoDB',
  'Testing: Jest, Vitest',
  'DevOps & CI/CD: Jenkins',
  'Version Control: Git, GitHub',
  'API Development: REST, Swagger',
  'Problem-solving & debugging',
  'Code optimization & best practices',
  'Team collaboration & communication',
  'Agile & Scrum methodology',
];

const resumeSections = [
  {
    title: 'Summary',
    content: (
      <p>
        Results-driven MERN Stack Developer skilled in building and optimizing scalable web applications.
        Proficient in front-end and back-end development using React, TypeScript, NestJS, and MongoDB.
        Experienced in RESTful APIs, CI/CD pipelines, unit testing, and agile methodologies. Strong focus on
        performance optimization, code quality, and problem-solving.
      </p>
    ),
  },
  {
    title: 'Skills',
    content: (
      <ListGroup variant="flush">
        {skills.map(skill => (
          <ListGroup.Item key={skill}>✅ {skill}</ListGroup.Item>
        ))}
      </ListGroup>
    ),
  },
  {
    title: 'Experience',
    content: (
      <div>
        <h6>Software Engineer – Societe Generale Global Solution Centre (03/2023 – Present)</h6>
        <p>
          Working on INDX, a business data dictionary platform similar to a search engine, building features using React, TypeScript, NestJS, and MongoDB.
        </p>
        <ul>
          <li>Developed scalable APIs and optimized user experience with smooth data retrieval.</li>
          <li>Implemented unit tests using Jest and Vitest for high code quality.</li>
          <li>Managed CI/CD pipelines using Jenkins for seamless deployments.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Education',
    content: (
      <p>
        <strong>Bachelor of Engineering: Computer Science</strong><br />
        BMS Institute of Technology, Bangalore, India<br />
        Graduated: 06/2023
      </p>
    ),
  },
];




const App: React.FC = () => {
  return (
    <Container className="my-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="shadow-lg">
          <Card.Body>
            <motion.div
              className="text-center mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>Sripriya Ravindra</h1>
              <p className="text-muted">
                Bangalore, India 561203<br />
                sripriyar2001@gmail.com | 9108205548
              </p>
            </motion.div>

            {resumeSections.map((section, i) => (
              <motion.section
                key={section.title}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={sectionVariant}
                className="mb-4"
              >
                <h4 className="text-primary">{section.title}</h4>
                {section.content}
              </motion.section>
            ))}
          </Card.Body>
        </Card>
      </motion.div>
    </Container>
  );
};

export default App;
