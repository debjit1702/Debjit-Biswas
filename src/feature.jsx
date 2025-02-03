import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import ReactTypingEffect from 'react-typing-effect';

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(158, 255, 0, 0.2);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;
  
  a {
    color: #fff;
    font-family: 'Daisyogre', monospace;
    font-size: 1.5rem;
    text-decoration: none;
    position: relative;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;
    
    &:hover {
      color: #beff05;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: #9eff00;
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
    
    &.active {
      color: #9eff00;
      
      &::after {
        width: 100%;
      }
    }
  }
`;

const Container = styled.div`
  background: #000;
  color: #fff;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  font-family: 'Daisyogre', monospace;
`;

const Grid = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(transparent 0%, rgba(0,255,0,0.05) 2%, transparent 3%),
    linear-gradient(90deg, transparent 0%, rgba(0,255,0,0.05) 2%, transparent 3%);
  background-size: 50px 50px;
  transform: perspective(500px) rotateX(60deg);
  transform-origin: 50% 100%;
  z-index: 1;
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 2rem;
  position: relative;
  z-index: 2;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  padding: 3rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
`;

const TextContent = styled.div`
  flex: 1;
`;

const Intro = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 2rem;
  color: #888;
  margin-bottom: 0.5rem;
`;

const LittleIntro = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 1.3rem;
  color: #888;
  margin-bottom: 0.5rem;
  `;

const Name = styled.h1`
  font-family: 'Daisyogre', monospace;
  font-size: 70px;
  color: #9eff00;
  margin: 0;
  line-height: 1;
  letter-spacing: 2px;
`;

const Title = styled.div`
  font-family: 'Daisyogre', monospace;
  font-size: 30px;
  color:rgb(223, 55, 139);
  margin: 1rem 0;
`;

const Bio = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 15px;
  color:rgb(9, 50, 234);
  line-height: 1.6;
  font-weight: 700;
  margin-top: 2rem;
  max-width: 500px;
  text-align: left;
`;

const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    background:rgb(4, 55, 240);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid #9eff00;
    border-radius: 30px;
    z-index: -1;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;
  
  a {
    color: #fff;
    font-size: 2rem;
    transition: all 0.3s ease;
    
    &:hover {
      color: #9eff00;
      transform: translateY(-3px);
    }
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Space Mono', monospace;
  font-size: 4rem;
  color: #9eff00;
  margin-bottom: 2rem;
`;

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const bioParagraph = "I am a Web3 Full-Stack Developer with a passion for Smart Contract & Web development. With a keen eye for detail, I specialize in transforming designs into dynamic, high-quality Full Stack projects, leveraging the latest technologies and frameworks.";

  return (
    <Container>
      <Navigation>
        <NavLinks>
          {['HOME', 'ABOUT', 'CAREER', 'PROJECTS', 'LINKS'].map((link) => (
            <a 
              key={link}
              href={`#${link.toLowerCase()}`}
              className={activeSection === link.toLowerCase() ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.toLowerCase());
              }}
            >
              {link}
            </a>
          ))}
        </NavLinks>
      </Navigation>

      <Grid />

      <Section id="home">
        <Content>
          <Header>
            <TextContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Intro>hey, i'm</Intro>
                <Name>DEBJIT BISWAS</Name>
                <Title>WEB3 FULL-STACK DEVELOPER</Title>
                <Bio>
                  <ReactTypingEffect
                    text={[bioParagraph]}
                    speed={20}
                    eraseDelay={1000000}
                    typingDelay={0}
                  />
                </Bio>
              </motion.div>
            </TextContent>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ProfileImage>
                <img src="/profile.jpg" alt="Debjit Biswas" />
                <SocialLinks>
                  <motion.a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                  >
                    <FaInstagram />
                  </motion.a>
                  <motion.a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                  >
                    <FaTwitter />
                  </motion.a>
                </SocialLinks>
              </ProfileImage>
            </motion.div>
          </Header>
        </Content>
      </Section>

      {['about', 'career', 'projects', 'links'].map((section) => (
        <Section key={section} id={section}>
          <Content>
            <SectionTitle>{section.toUpperCase()}</SectionTitle>
            <Bio>
            <LittleIntro>A lil bit about me…</LittleIntro>
              {section === 'about' && (
                "Hey there 👋🏻 being a CS-undergrad I Love Building & had the opportunity to work on various projects through Participating In Various Hackathons & Freelance Works.I'm Known for my risk taking & problem solving abilities. Besides I'm passionate about various Technical Communities & Coding Bootcamps where i mentor Aspiring developers."
              )}
              {section === 'career' && (
                "As Parell Williams said, 'Creativity without business is Victimization. Business without creativity is waste of f**king time.'"
              )}
              {section === 'projects' && "Project showcase coming soon..."}
              {section === 'links' && "Connect with me on social media!"}
            </Bio>
          </Content>
        </Section>
      ))}
    </Container>
  );
}

export default App;