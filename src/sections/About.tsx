import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState, useCallback } from 'react';
import { isInViewport } from '@/utils/scrollAnimation';

interface AboutText {
  intro: string;
  experience: string;
}

const mobileText: AboutText = {
  intro:
    'I\’m a Full-Stack Developer passionate about building high-performance, user-friendly web applications using the MERN stack. From real-time chat systems and dynamic pricing algorithms to map-integrated platforms, I love turning complex ideas into functional, scalable solutions. My frontend toolkit includes React, Vite, and Redux, while on the backend, I work with Node.js, Express, and MongoDB to design clean, RESTful APIs.',
  experience:
    'Currently pursuing a B.E. in Information Technology, I also work with cloud platforms like AWS and Render, with experience in EC2, S3, and Lambda for scalable and serverless deployments. I\'m actively exploring geospatial technologies with NextGIS to add advanced map features to my applications. I enjoy building with a focus on performance, usability, and clean code—and I\’m always learning what\’s next.',
};

const desktopText: AboutText = {
  intro:
    'I\’m a Full-Stack Developer passionate about building high-performance, user-friendly web applications using the MERN stack. From real-time chat systems and dynamic pricing algorithms to map-integrated platforms, I love turning complex ideas into functional, scalable solutions. My frontend toolkit includes React, Vite, and Redux, while on the backend, I work with Node.js, Express, and MongoDB to design clean, RESTful APIs.',
  experience:
    'Currently pursuing a B.E. in Information Technology, I also work with cloud platforms like AWS and Render, with experience in EC2, S3, and Lambda for scalable and serverless deployments. I\'m actively exploring geospatial technologies with NextGIS to add advanced map features to my applications. I enjoy building with a focus on performance, usability, and clean code—and I\’m always learning what\’s next.',
};

const technologies = [
  'AWS/Docker',
  'Git/Render',
  'Node/RESTAPI',
  'PostgreSQL/Mongo',
  'React/Next.js',
];

const variants = {
  visible: { opacity: 1, y: -50 },
  hidden: { opacity: 0, y: 0 },
};

function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [isMobile, setIsMobile] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);

  useEffect(() => {
    // Check visibility for scroll animations
    const handleScroll = () => {
      const section = document.querySelector('.about');
      if (section && isInViewport(section) && !isVisible) {
        setIsVisible(true);
        controls.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial checks
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, controls]);

  return (
    <motion.div
      className={`about fade-in-section ${isVisible ? 'is-visible' : ''} section-transition`}
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text text-justify text-base md:text-lg leading-relaxed">
            {isMobile ? mobileText.intro : desktopText.intro}
          </p>
          <p className="about-grid-info-text text-justify text-base md:text-lg leading-relaxed indent-4">
            {isMobile ? mobileText.experience : desktopText.experience}
          </p>
          <p className="about-grid-info-text text-justify">
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <ul className="about-grid-info-list">
            {technologies.map((tech) => (
              <li key={tech} className="about-grid-info-list-item">
                <span className="highlight">{tech}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            {!imageError ? (
              <Image
                src="/etc/image.jpeg" 
                alt="Nikhil Sharma - Full Stack Engineer"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                aria-label="Profile picture of NIkhil Sharma"
                onError={() => setImageError(true)}
              />
            ) : (
              <Image
                src="/etc/image.png" 
                alt="Nikhil Sharma - Full Stack Engineer"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                aria-label="Profile picture of Nikhil Sharma"
              />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
