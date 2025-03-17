import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaPython, FaFileDownload } from 'react-icons/fa';
import { SiGmail, SiEthereum, SiJavascript, SiNodedotjs, SiPostgresql, SiTensorflow } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import ReactTypingEffect from 'react-typing-effect';
import { TbCurrencySolana } from "react-icons/tb";


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

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
    overflow-x: auto;
    width: 100%;
    padding: 0.5rem;
    justify-content: start;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
  
  a {
    color: #fff;
    font-family: 'Daisyogre', monospace;
    font-size: 1.5rem;
    text-decoration: none;
    position: relative;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;
    white-space: nowrap;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0.3rem 0.6rem;
    }
    
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

  @media (max-width: 768px) {
    padding: 5rem 1rem 1rem;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  padding: 3rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
`;

const TextContent = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Intro = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 2rem;
  color: #888;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LittleIntro = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 1.3rem;
  color: #888;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Para2 = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 1.3rem;
  color: #888;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Name = styled.h1`
  font-family: 'Daisyogre', monospace;
  font-size: 70px;
  color: #9eff00;
  margin: 0;
  line-height: 1;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const Title = styled.div`
  font-family: 'Daisyogre', monospace;
  font-size: 30px;
  color: rgb(223, 55, 139);
  margin: 1rem 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Bio = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 15px;
  color: rgb(9, 50, 234);
  line-height: 1.6;
  font-weight: 700;
  margin-top: 2rem;
  max-width: 500px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    margin: 1rem auto;
    font-size: 14px;
  }
`;

const AboutBio = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 15px;
  color: #fff;
  line-height: 1.6;
  font-weight: 700;
  margin-top: 2rem;
  max-width: 500px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 14px;
  }

  span.greeting {
    color: #ffa500;
    font-size: 23px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  
  span.meeting {
    color: rgb(223, 55, 139);
    font-size: 23px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const AboutContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const AboutImage = styled.div`
  width: 400px;
  height: 500px;
  position: relative;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    filter: grayscale(100%);
    transition: filter 0.3s ease;
    
    &:hover {
      filter: grayscale(0%);
    }
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

const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    background: rgb(4, 55, 240);
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
  margin-top: 1.3rem;
  justify-content: center;
  
  a {
    color: #fff;
    font-size: 1.3rem;
    transition: all 0.3s ease;
    
    &:hover {
      color: #9eff00;
      transform: translateY(-3px);
    }

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

const TechStack = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
  
  svg {
    font-size: 2rem;
    color: #9eff00;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      color: rgb(223, 55, 139);
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: #1a1a1a;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectTag = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: ${props => {
    switch(props.type) {
      case 'AI':
        return '#dc2626';
      case 'FULL STACK':
        return '#7c3aed';
      default:
        return '#2563eb';
    }
  }};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  text-align: left;
`;

const ProjectName = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ProjectYear = styled.span`
  color: #6b7280;
  font-size: 0.875rem;
`;

const ProjectDescription = styled.p`
  color: #9ca3af;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  line-height: 1.5;
`;

const CareerTimeline = styled.div`
  position: relative;
  padding: 2rem 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
  overflow-x: auto;
  padding-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }

  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(158, 255, 0, 0.1);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #9eff00;
    border-radius: 4px;
  }
`;

const TimelineItem = styled(motion.div)`
  flex: 0 0 auto;
  width: 350px;
  position: relative;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    width: 100%;
  }

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    background: #9eff00;
    border-radius: 50%;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(158, 255, 0, 0.3);
  }
`;

const TimelineContent = styled.div`
  background: rgba(30, 30, 30, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  width: 100%;
  border: 1px solid rgba(158, 255, 0, 0.2);
  margin-top: 1rem;
  
  &:hover {
    border-color: #9eff00;
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }
`;

const TimelineDate = styled.div`
  font-family: 'Space Mono', monospace;
  color: #9eff00;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-family: 'Daisyogre', monospace;
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const TimelineCompany = styled.div`
  display: inline-block;
  background: rgba(158, 255, 0, 0.1);
  color: #9eff00;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const TimelineDescription = styled.p`
  color: #888;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const CompanyImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 1rem;
`;

const ProjectSection = styled(Section)`
  text-align: center;
`;

const ProjectHeader = styled.div`
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 1.8rem;
  background: linear-gradient(to right, rgb(9, 50, 234), #4f46e5);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectSubtitle = styled.p`
  font-size: 1.2rem;
  font-family: 'Space Mono', monospace;
  color: #fff;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;
const AddressContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const AddressBox = styled.div`
  background: rgba(30, 30, 30, 0.9);
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid rgba(158, 255, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #9eff00;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
`;

const AddressIcon = styled.div`
  font-size: 2rem;
  color: #9eff00;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const AddressInfo = styled.div`
  flex: 1;
`;

const AddressLabel = styled.div`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-family: 'Space Mono', monospace;
`;

const AddressValue = styled.div`
  color: #9eff00;
  font-size: 0.9rem;
  font-family: 'Space Mono', monospace;
  word-break: break-all;
`;

const DownloadButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #9eff00;
  color: #000;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-family: 'Space Mono', monospace;
  font-weight: bold;
  margin-top: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #beff05;
    transform: translateY(-3px);
  }

  svg {
    font-size: 1.2rem;
  }
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

  const careerData = [
    {
      date: "Jan 2024 - Present",
      title: "Freelance Web3 Developer",
      company: "Superteam",
      description: "worked on multiple Web3 projects & Task Bounties",
      image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,anim=false,background=white,quality=75,width=620,height=310/event-covers/jv/f07932b7-4c87-494a-8157-df45c64e36c7"
    },
    {
      date: "Nov 2024 - Present",
      title: "Technical Mentor",
      company: "Rezime Edtech",
      description: "Trained 40+ Aspiring Developers & Built AI Powered SAAS Application Frontend",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop"
    },
    {
      date: "Jul 2024 - Oct 2024",
      title: "Software Developer Intern",
      company: "Maribus Solar",
      description: "Developed and maintained enterprise web applications",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
    },
  ];

  const projectData = [
    {
      name: "AuraNest",
      year: "2024",
      description: "Ai-Powered Room Re-Designing Fullstack SAAS Application",
      image: "https://i.pinimg.com/736x/ca/3c/38/ca3c38fbc14025226411554e05442b2a.jpg",
      tag: "FULL STACK",
    },
    {
      name: "WeFundr",
      year: "2024",
      description: "A decentralized crowdfunding platform",
      image: "https://i.pinimg.com/736x/ed/f9/78/edf9789758bb3e8f9ca87e125f58ef9c.jpg",
      tag: "WEB3"
    },
    {
      name: "ZooNet",
      year: "2023",
      description: "A CNN model to Recognize animal Species in the wildlife",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
      tag: "AI"
    },
    {
      name: "SplitChain",
      year: "2023",
      description: "Diving Expences Efficiently with DeFi",
      image: "https://i.pinimg.com/736x/00/73/26/00732600d7601236747d26b267ab5ce2.jpg",
      tag: "Web3"
    },
    {
      name: "EasyStudy",
      year: "2023",
      description: "An AI LMS Platform for Students & Aspirants",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop",
      tag: "FULL STACK"
    },
    {
      name: "StreamHive",
      year: "2023",
      description: "A Hub For All Streamers",
      image: "https://i.pinimg.com/736x/95/e5/e1/95e5e1e21398e7ff7585bda334f535e9.jpg",
      tag: "FULL STACK"
    }
  ];

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
                    href="https://github.com/debjit1702" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/debjit-biswas-350783215/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=debjitb689@gmail.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                  >
                    <SiGmail />
                  </motion.a>
                  <motion.a 
                    href="https://x.com/_debjit1702" 
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

      <Section id="about">
        <Content>
          <AboutContent>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <AboutImage>
                <img src="/about.jpg" alt="About Debjit" />
              </AboutImage>
            </motion.div>
            <AboutBio>
              <LittleIntro>A lil bit about me…</LittleIntro>
              <span className="greeting">Hey there 👋🏻</span> being a CS-undergrad I Love Building & had the opportunity to work on various projects through Participating In Various Hackathons & Freelance Works. <br /> <br />
              <span className="meeting">I Known</span> for my risk taking & problem solving abilities. Besides I'm passionate about various Technical Communities & Coding Bootcamps where i mentor Aspiring developers.<br /> <br /> <br /> <br />
              <Para2>Experiance With</Para2>
              <TechStack>
                <motion.div whileHover={{ y: -5 }}>
                  <RiReactjsLine title="React.js" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }}>
                  <FaPython title="Python" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }}>
                <SiEthereum title="Ethereum" /> 
                </motion.div>
                <motion.div whileHover={{ y: -5 }}>
                  <SiJavascript title="Javascript" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }}>
                  <SiPostgresql title="PostgreSQL" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }}>
                  <SiNodedotjs title="Node.js" />
                </motion.div>
                <motion.div whileHover={{ y: -5 }}>
                  <SiTensorflow title="TensorFlow" />
                </motion.div>
              </TechStack>
            </AboutBio>
          </AboutContent>
        </Content>
      </Section>

      <Section id="career">
        <Content>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title style={{ textAlign: 'center', marginBottom: '3rem' }}>
              Career Journey
            </Title>
            <CareerTimeline>
              {careerData.map((item, index) => (
                <TimelineItem
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <TimelineContent>
                    <TimelineDate>{item.date}</TimelineDate>
                    <TimelineTitle>{item.title}</TimelineTitle>
                    <TimelineCompany>{item.company}</TimelineCompany>
                    <TimelineDescription>{item.description}</TimelineDescription>
                    <CompanyImage src={item.image} alt={item.company} />
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CareerTimeline>
          </motion.div>
        </Content>
      </Section>

      <Section id="projects">
        <Content>
          <ProjectHeader>
            <ProjectTitle>Projects</ProjectTitle>
            <ProjectSubtitle>
              I've built some stuff... some used by tens of thousands of people daily... while you're here check it out
            </ProjectSubtitle>
          </ProjectHeader>
          <ProjectGrid>
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectImage src={project.image} alt={project.name} />
                <ProjectTag type={project.tag}>{project.tag}</ProjectTag>
                <ProjectInfo>
                  <ProjectName>{project.name}</ProjectName>
                  <ProjectYear>{project.year}</ProjectYear>
                  <ProjectDescription>{project.description}</ProjectDescription>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </Content>
      </Section>

      <Section id="links">
        <Content>
          <Bio>Connect with me !</Bio>
          <SocialLinks>
            <motion.a 
              href="https://github.com/debjit1702" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/debjit-biswas-350783215/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=debjitb689@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              <SiGmail />
            </motion.a>
            <motion.a 
              href="https://x.com/_debjit1702" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              <FaTwitter />
            </motion.a>
          </SocialLinks>

          <AddressContainer>
            <AddressBox>
              <AddressIcon>
                <SiEthereum />
              </AddressIcon>
              <AddressInfo>
                <AddressLabel>Ethereum Address</AddressLabel>
                <AddressValue>0x1aD7Cb72E37cBC082e45C5bcA4dB7556896Bb6fE</AddressValue>
              </AddressInfo>
            </AddressBox>

            <AddressBox>
              <AddressIcon>
                <TbCurrencySolana />
              </AddressIcon>
              <AddressInfo>
                <AddressLabel>Solana Address</AddressLabel>
                <AddressValue>2v1qKA6W3S3cSWYwzNXMaNjd8tSWV7BxurkDbrXcPBgg</AddressValue>
              </AddressInfo>
            </AddressBox>

            <DownloadButton
  href="/Debjit's_resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <FaFileDownload />
  Download CV
</DownloadButton>

          </AddressContainer>
        </Content>
      </Section>
    </Container>
  );
}

export default App;