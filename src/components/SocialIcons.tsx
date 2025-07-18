import { Github, Instagram, Linkedin, Globe } from 'lucide-react';

function SocialIcons() {
  const socialLinks = [
    { name: 'Github', icon: <Github />, link: 'https://github.com/NIKSH02' },
    { name: 'LinkedIn', icon: <Linkedin />, link: 'https://www.linkedin.com/in/nikhil-sharma-1aa669294/' },
    { name: 'Instagram', icon: <Instagram />, link: 'https://www.instagram.com/nikhil_sharma_0206/#' },
    { name: 'Website', icon: <Globe />, link: 'https://portfolio-delta-cyan-etc6viwsjz.vercel.app/' },
  ];

  return (
    <div className="social-icons">
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <a
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialIcons;
