import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Button3D from '@/components/Button3D';

function Projects() {
  const projectsData = [
    {
      image: '/projects/project1.png',
      projectName: 'PeerMesh',
      projectLink: 'https://peermesh.onrender.com/',
      projectDescription:
        'Created a group video conferencing platform with live video, screen sharing,and real-time chat using WebRTC and Socket.io.Enabled dynamic peer-to-peer signaling for seamless call quality.',
      projectTech: ['WebSockets', 'React', 'MongoDB', 'Node'],
      projectExternalLinks: {
        github: 'https://github.com/NIKSH02/PeerMesh',
        externalLink: 'https://peermesh.onrender.com/',
      },
    },
    {
      image: '/projects/project5.png',
      projectName: 'Vendorverse',
      projectLink: 'https://vendorverse-eight.vercel.app/',
      projectDescription:
        'A web-based full-stack web application connecting street food vendors with local suppliers via real-time communication tools also implemented city-based group chat for vendors. ',
      projectTech: ['React', 'Node.js', 'Socket.IO','Tailwind CSS'],
      projectExternalLinks: {
        github: 'https://github.com/NIKSH02/VendorVerse',
        externalLink: 'https://vendorverse-eight.vercel.app/',
      },
    },
    {
      image: '/projects/project4.png',
      projectName: 'QuickCourt',
      projectLink: 'https://quicksport.vercel.app/',
      projectDescription:
        'A web-based full-stack web application connecting street food vendors with local suppliers via real-time communication tools also implemented city-based group chat for vendors. ',
      projectTech: ['React', 'Node.js', 'Socket.IO', 'Mapbox API', 'Razor Pay', 'Weather API'],
      projectExternalLinks: {
        github: 'https://github.com/NIKSH02/Odoo-final-deployment-',
        externalLink: 'https://quicksport.vercel.app/',
      },
    },
    {
      image: '/projects/project2.jpeg',
      projectName: 'Wanderlust',
      projectLink: 'https://major-project-1-cey8.onrender.com/listing',
      projectDescription:
        'Designed front-end using EJS, Bootstrap, and custom CSS to display listings with images, prices, maps, and reviews. Integrated Mapbox for interactive exploration.',
      projectTech: ['Node.js', 'REST API', 'EJS', 'Mapbox SDK'],
      projectExternalLinks: {
        github: 'https://github.com/NIKSH02/Major-project',
        externalLink: 'https://major-project-1-cey8.onrender.com/listing',
      },
    },
  ];

  return (
    <div id="work" className="projects" style={{ paddingTop: '170px' }}>
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I&apos;ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image" onClick={() => window.open(projectLink, '_blank')}>
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill loading="lazy" alt={projectName} quality={100} />
                  </div>
                </div>
                <motion.div
                  className="project-info"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="project-info-title">
                    <span
                      className="cursor-pointer"
                      onClick={() => window.open(projectLink, '_blank')}
                    >
                      {projectName}
                    </span>
                  </h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <motion.li
                        className="project-info-tech-list-item"
                        key={tech}
                        whileHover={{ y: -2, color: 'var(--theme-color)' }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="project-info-links mt-4">
                    <Button3D
                      text="View Project"
                      link={projectLink}
                      color="primary"
                      className="mr-3"
                    />
                    <Button3D
                      text="GitHub"
                      link={projectExternalLinks.github}
                      color="secondary"
                      icon={<Github size={16} />}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          },
        )}
      </div>
    </div>
  );
}

export default Projects;
