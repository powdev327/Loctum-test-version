import styled from "styled-components";

import BgImg from "../../../assets/images/bg/wave-line.png";

const HomeBannerStyle = styled.section`
  min-height: 100vh;
  padding: 120px 0px 80px 0px;
  background: 
    linear-gradient(135deg, 
      rgba(106, 173, 216, 0.25) 0%, 
      rgba(106, 173, 216, 0.15) 50%, 
      rgba(106, 173, 216, 0.3) 100%
    ),
    linear-gradient(135deg, ${({ theme }) => theme.colors.bgHero} 0%, rgba(117, 226, 224, 0.1) 100%);
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(106, 173, 216, 0.3);
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 0px 0px 50px 50px;
  display: flex;
  align-items: center;
  box-shadow: 
    0 20px 60px rgba(106, 173, 216, 0.15),
    0 0 40px rgba(106, 173, 216, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  
  /* Neon glow effect overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(106, 173, 216, 0.1) 0%, 
      transparent 50%, 
      rgba(106, 173, 216, 0.1) 100%
    );
    border-radius: inherit;
    opacity: 0.6;
    animation: neonPulse 4s ease-in-out infinite;
    pointer-events: none;
    z-index: -1;
  }

  /* Floating Neon Orbs */
  &::after {
    content: '';
    position: absolute;
    top: 20%;
    right: 10%;
    width: 120px;
    height: 120px;
    background: radial-gradient(circle, 
      rgba(106, 173, 216, 0.3) 0%, 
      rgba(106, 173, 216, 0.1) 50%, 
      transparent 70%
    );
    border-radius: 50%;
    box-shadow: 0 0 40px rgba(106, 173, 216, 0.4);
    animation: neonOrb 6s ease-in-out infinite;
    pointer-events: none;
    z-index: 0;
  }

  /* Additional floating orb */
  .neon-orb-secondary {
    position: absolute;
    bottom: 20%;
    left: 8%;
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, 
      rgba(106, 173, 216, 0.4) 0%, 
      rgba(106, 173, 216, 0.15) 50%, 
      transparent 70%
    );
    border-radius: 50%;
    box-shadow: 0 0 30px rgba(106, 173, 216, 0.35);
    animation: neonOrb 8s ease-in-out infinite;
    animation-delay: 2s;
    pointer-events: none;
    z-index: 0;
  }

  .banner-language-switcher {
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 20;
    
    .language-switcher {
      .language-toggle {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        
        &:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }
      }
      
      .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 8px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        min-width: 140px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: all 0.3s ease;
        
        &.active {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        
        button {
          color: ${({ theme }) => theme.colors.title};
          
          &:hover {
            background: rgba(0, 0, 0, 0.05);
          }
        }
      }
    }
    
    @media (max-width: 768px) {
      top: 20px;
      right: 20px;
    }
  }

  .shape-img {
    position: absolute;
    z-index: 2;
    opacity: 0.3;
    
    &.img-1 {
      top: 25%;
      left: 0;
    }
    &.img-2 {
      bottom: 0;
      left: 40%;
    }
    &.img-3 {
      bottom: 0;
      right: 12%;
    }
  }

  /* Hero Layout Container */
  .hero-layout {
    position: relative;
    width: 100%;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /* Floating Healthcare Images */
  .floating-images {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    max-width: 1400px; /* Prevent images from going too far on large screens */
    z-index: 10;
    pointer-events: none;

    .doctor-image, .hospital-image {
      position: absolute;
      transition: transform 0.3s ease-out;
      pointer-events: auto;
      
      img {
        width: min(200px, 15vw); /* Responsive width with max limit */
        height: min(250px, 18vw); /* Responsive height with max limit */
        min-width: 120px; /* Minimum size to remain visible */
        min-height: 150px;
        object-fit: cover;
        border-radius: min(20px, 2vw);
        box-shadow: 0 20px 60px rgba(28, 78, 167, 0.2);
        border: 4px solid ${({ theme }) => theme.colors.whiteColor};
        transition: transform 0.4s ease;
        
        &:hover {
          transform: scale(1.05) rotate(0deg) !important;
        }
      }

      .image-label {
        position: absolute;
        bottom: min(-10px, -1vw);
        left: 50%;
        transform: translateX(-50%);
        background: ${({ theme }) => theme.colors.healthcareSecondary};
        color: ${({ theme }) => theme.colors.whiteColor};
        padding: min(8px, 1vw) min(16px, 2vw);
        border-radius: min(20px, 2vw);
        font-size: clamp(10px, 1.2vw, 12px); /* Responsive font size with min/max limits */
        font-weight: 600;
        white-space: nowrap;
        box-shadow: 0 8px 25px rgba(41, 202, 173, 0.3);
      }
    }

    .doctor-image {
      top: min(20%, 15vh);
      right: min(-50px, -5vw);
      max-right: -20px; /* Prevent going too far off-screen */
      
      img {
        transform: rotate(5deg);
      }
    }

    .hospital-image {
      top: min(60%, 45vh);
      left: min(-50px, -5vw);
      max-left: -20px; /* Prevent going too far off-screen */
      
      img {
        transform: rotate(-3deg);
      }
    }
  }

  /* Header Background Overlay Card */
  .overlay-card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: clamp(120px, 20vh, 200px); /* Responsive header height */
    background: linear-gradient(135deg, rgba(28, 78, 167, 0.15) 0%, rgba(41, 202, 173, 0.1) 100%);
    backdrop-filter: blur(15px);
    border-radius: min(30px, 3vw) min(30px, 3vw) 0 0;
    z-index: 5;
    box-shadow: 0 8px 32px rgba(28, 78, 167, 0.1);
    transition: all 0.3s ease;
    animation: slideDownFade 0.8s ease-out;
    
    &:hover {
      backdrop-filter: blur(20px);
      box-shadow: 0 12px 40px rgba(28, 78, 167, 0.15);
      
      .overlay-pattern {
        &::before {
          opacity: 0.8;
          transform: scale(1.1);
        }
        
        &::after {
          opacity: 1;
          transform: scale(1.1);
        }
      }
    }

    .overlay-pattern {
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 20% 50%, rgba(41, 202, 173, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(28, 78, 167, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 50% 80%, rgba(117, 226, 224, 0.08) 0%, transparent 40%);
      border-radius: min(30px, 3vw) min(30px, 3vw) 0 0;
      position: relative;
      
      /* Header decorative elements */
      &::before {
        content: '';
        position: absolute;
        top: 20px;
        right: 30px;
        width: min(60px, 8vw);
        height: min(60px, 8vw);
        background: linear-gradient(135deg, rgba(41, 202, 173, 0.2) 0%, transparent 70%);
        border-radius: 50%;
        opacity: 0.6;
        animation: pulse 3s ease-in-out infinite;
        transition: all 0.3s ease;
      }
      
      &::after {
        content: '';
        position: absolute;
        bottom: 15px;
        left: 40px;
        width: min(40px, 5vw);
        height: min(40px, 5vw);
        background: linear-gradient(135deg, rgba(28, 78, 167, 0.15) 0%, transparent 70%);
        border-radius: 50%;
        opacity: 0.8;
        animation: pulse 4s ease-in-out infinite;
        animation-delay: 1.5s;
        transition: all 0.3s ease;
      }
    }
  }

  /* Mobile/Tablet Images - Hidden on Desktop */
  .hero-mobile-images {
    display: none;
  }

  /* Main Text Card */
  .text-card {
    position: relative;
    z-index: 0;
    background: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 30px;
    padding: 80px 60px 60px;
    box-shadow: 0 30px 80px rgba(28, 78, 167, 0.15);
    max-width: 800px;
    width: 100%;
    text-align: center;
    margin-top: 60px;
    backdrop-filter: blur(20px);
    border: 1px solid rgba(28, 78, 167, 0.1);

    .card-decorations {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      border-radius: 30px;
      overflow: hidden;

      .decoration {
        position: absolute;
        border-radius: 50%;
        
        &.decoration-1 {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, ${({ theme }) => theme.colors.healthcareSecondary} 0%, transparent 70%);
          top: -20px;
          right: -20px;
          opacity: 0.3;
        }

        &.decoration-2 {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, transparent 70%);
          bottom: 30px;
          left: 30px;
          opacity: 0.2;
        }

        &.decoration-3 {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, ${({ theme }) => theme.colors.healthcareAccent} 0%, transparent 70%);
          top: 40%;
          right: -10px;
          opacity: 0.25;
        }
      }
    }

    .hero-content {
      position: relative;
      z-index: 2;
    }

    .hero-content-text {
      margin-bottom: 40px;

      .uig-banner-title {
        line-height: 1.2;
        color: ${({ theme }) => theme.colors.title};
        margin-bottom: 24px;
        font-size: 3.5rem;
        font-weight: 800;

        .title-line {
          display: block;
          margin-bottom: 16px;
        }

        .title-part-1 {
          background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.healthcareSecondary} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-badge {
          display: inline-block;
          background: linear-gradient(135deg, ${({ theme }) => theme.colors.healthcareSecondary} 0%, ${({ theme }) => theme.colors.healthcareAccent} 100%);
          color: ${({ theme }) => theme.colors.whiteColor};
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 1.2rem;
          margin-left: 16px;
          transform: rotate(-2deg);
          font-weight: 700;
          box-shadow: 0 8px 25px rgba(41, 202, 173, 0.3);
        }

        .title-part-2 {
          color: ${({ theme }) => theme.colors.title};
          font-weight: 700;
        }
      }

      .hero-description {
        font-size: 1.2rem;
        line-height: 1.8;
        color: ${({ theme }) => theme.colors.textColor};
        max-width: 600px;
        margin: 0 auto;
        font-weight: 500;
      }
    }

    .hero-content-actions {
      .hero-content-button {
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
        flex-wrap: wrap;

        .primary-cta, .secondary-cta {
          min-width: 180px;
          padding: 18px 36px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          border-radius: 50px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          
          &:hover {
            transform: translateY(-3px);
          }
        }
      }

      .hero-content-list {
        display: flex;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        list-style: none;

        .list-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(28, 78, 167, 0.05);
          padding: 12px 20px;
          border-radius: 25px;
          border: 1px solid rgba(28, 78, 167, 0.1);

          svg {
            font-size: 16px;
            color: ${({ theme }) => theme.colors.healthcareSecondary};
          }

          p {
            font-size: 14px;
            color: ${({ theme }) => theme.colors.textColor};
            margin: 0;
            font-weight: 600;
          }
        }
      }
    }
  }

  /* Floating Demo Button */
  /*.floating-demo {
    position: absolute;
    bottom: 40px;
    right: 40px;
    z-index: 15;

    .get-demo-btn {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.healthcareSecondary};
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      box-shadow: 0 15px 40px rgba(41, 202, 173, 0.3);
      transition: all 0.4s ease;
      
      > img {
        width: 90px !important;
        height: 90px !important;
        animation: rotateImg 15s infinite linear;
      }
      
      .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        img {
          transition: 0.3s;
        }
      }
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 50px rgba(41, 202, 173, 0.4);
        
        .icon img {
          transform: rotate(45deg);
        }
      }
    }
  }

  @keyframes rotateImg {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes slideDownFade {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.9;
    }
  }

  /* Responsive Design */
  @media screen and (max-width: 1399px) {
    /* Adjust neon orbs for smaller screens */
    &::after {
      width: 100px;
      height: 100px;
      box-shadow: 0 0 30px rgba(106, 173, 216, 0.35);
    }
    
    .neon-orb-secondary {
      width: 70px;
      height: 70px;
      box-shadow: 0 0 25px rgba(106, 173, 216, 0.3);
    }
    .overlay-card {
      height: clamp(110px, 18vh, 180px);
      
      .overlay-pattern {
        &::before {
          top: 15px;
          right: 25px;
          width: min(50px, 7vw);
          height: min(50px, 7vw);
        }
        
        &::after {
          bottom: 12px;
          left: 35px;
          width: min(35px, 4vw);
          height: min(35px, 4vw);
        }
      }
    }
    
    .floating-images {
      max-width: 1200px;
      
      .doctor-image {
        right: min(-40px, -3vw);
        
        img {
          width: min(180px, 13vw);
          height: min(225px, 16vw);
        }
      }
      
      .hospital-image {
        left: min(-40px, -3vw);
        
        img {
          width: min(180px, 13vw);
          height: min(225px, 16vw);
        }
      }
    }
  }

  @media screen and (max-width: 1199px) {
    /* Adjust neon orbs for laptop screens */
    &::after {
      width: 80px;
      height: 80px;
      box-shadow: 0 0 25px rgba(106, 173, 216, 0.3);
    }
    
    .neon-orb-secondary {
      width: 60px;
      height: 60px;
      box-shadow: 0 0 20px rgba(106, 173, 216, 0.25);
    }
    
    .overlay-card {
      height: clamp(100px, 16vh, 160px);
      border-radius: min(25px, 2.5vw) min(25px, 2.5vw) 0 0;
      
      .overlay-pattern {
        border-radius: min(25px, 2.5vw) min(25px, 2.5vw) 0 0;
        
        &::before {
          top: 12px;
          right: 20px;
          width: min(45px, 6vw);
          height: min(45px, 6vw);
        }
        
        &::after {
          bottom: 10px;
          left: 30px;
          width: min(30px, 3.5vw);
          height: min(30px, 3.5vw);
        }
      }
    }
    
    .text-card {
      .hero-content-text {
        .uig-banner-title {
          font-size: min(3rem, 5vw);
        }
      }
    }
    
    .floating-images {
      max-width: 1000px;
      
      .doctor-image {
        right: min(-25px, -2vw);
        top: min(18%, 12vh);
        
        img {
          width: min(160px, 12vw);
          height: min(200px, 15vw);
          min-width: 100px;
          min-height: 125px;
        }
      }
      
      .hospital-image {
        left: min(-25px, -2vw);
        top: min(55%, 40vh);
        
        img {
          width: min(160px, 12vw);
          height: min(200px, 15vw);
          min-width: 100px;
          min-height: 125px;
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    padding: 100px 0px 60px;
    min-height: auto;
    
    /* Smaller neon orbs for tablet */
    &::after {
      width: 60px;
      height: 60px;
      box-shadow: 0 0 20px rgba(106, 173, 216, 0.25);
      top: 15%;
      right: 8%;
    }
    
    .neon-orb-secondary {
      width: 45px;
      height: 45px;
      box-shadow: 0 0 15px rgba(106, 173, 216, 0.2);
      bottom: 15%;
      left: 5%;
    }
    
    .overlay-card {
      height: clamp(80px, 14vh, 140px);
      border-radius: min(20px, 2vw) min(20px, 2vw) 0 0;
      
      .overlay-pattern {
        border-radius: min(20px, 2vw) min(20px, 2vw) 0 0;
        
        &::before {
          top: 10px;
          right: 15px;
          width: min(35px, 5vw);
          height: min(35px, 5vw);
        }
        
        &::after {
          bottom: 8px;
          left: 20px;
          width: min(25px, 3vw);
          height: min(25px, 3vw);
        }
      }
    }
    
    .text-card {
      padding: 60px 40px 50px;
      margin-top: 40px;
      
      .hero-content-text {
        .uig-banner-title {
          font-size: min(2.5rem, 6vw);
        }
        
        .hero-description {
          font-size: min(1.1rem, 2.2vw);
        }
      }
      
      .hero-content-actions {
        .hero-content-button {
          flex-direction: column;
          gap: 15px;
          
          .primary-cta, .secondary-cta {
            width: 100%;
            max-width: 280px;
          }
        }
        
        .hero-content-list {
          flex-direction: column;
          gap: 15px;
          align-items: center;
        }
      }
    }
    
    /* Hide floating images on tablet and show centered version */
    .floating-images {
      display: none;
    }
    
    /* Add centered mobile images */
    .hero-mobile-images {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      margin-top: 40px;
      padding: 0 20px;
      
      .mobile-image {
        flex: 1;
        text-align: center;
        
        img {
          width: min(140px, 20vw);
          height: min(175px, 25vw);
          min-width: 100px;
          min-height: 125px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 15px 40px rgba(28, 78, 167, 0.15);
          border: 3px solid ${({ theme }) => theme.colors.whiteColor};
        }
        
        .image-label {
          margin-top: 10px;
          background: ${({ theme }) => theme.colors.healthcareSecondary};
          color: ${({ theme }) => theme.colors.whiteColor};
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 11px;
          font-weight: 600;
          display: inline-block;
        }
      }
    }
    
    .floating-demo {
      position: relative;
      bottom: auto;
      right: auto;
      margin-top: 30px;
      text-align: center;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 80px 0px 40px;
    border-radius: 0px 0px 30px 30px;
    
    /* Minimal neon orbs for mobile */
    &::after {
      width: 40px;
      height: 40px;
      box-shadow: 0 0 15px rgba(106, 173, 216, 0.2);
      top: 12%;
      right: 6%;
    }
    
    .neon-orb-secondary {
      width: 30px;
      height: 30px;
      box-shadow: 0 0 10px rgba(106, 173, 216, 0.15);
      bottom: 12%;
      left: 4%;
    }
    
    .overlay-card {
      height: clamp(70px, 12vh, 120px);
      border-radius: min(15px, 2vw) min(15px, 2vw) 0 0;
      
      .overlay-pattern {
        border-radius: min(15px, 2vw) min(15px, 2vw) 0 0;
        
        &::before {
          top: 8px;
          right: 12px;
          width: min(25px, 4vw);
          height: min(25px, 4vw);
        }
        
        &::after {
          bottom: 6px;
          left: 15px;
          width: min(20px, 2.5vw);
          height: min(20px, 2.5vw);
        }
      }
    }
    
    .text-card {
      padding: 40px 20px 40px;
      border-radius: 20px;
      margin-top: 20px;
      
      .hero-content-text {
        .uig-banner-title {
          font-size: min(2rem, 7vw);
          
          .hero-badge {
            font-size: min(1rem, 3vw);
            margin-left: 8px;
            padding: 6px 12px;
          }
        }
        
        .hero-description {
          font-size: min(1rem, 3.5vw);
        }
      }
      
      .hero-content-actions {
        .hero-content-button {
          .primary-cta, .secondary-cta {
            padding: 14px 28px;
            font-size: 14px;
          }
        }
      }
    }
    
    .hero-mobile-images {
      flex-direction: column;
      align-items: center;
      gap: 30px;
      margin-top: 30px;
      
      .mobile-image {
        img {
          width: min(180px, 45vw);
          height: min(225px, 55vw);
          min-width: 140px;
          min-height: 175px;
        }
      }
    }
    
    .shape-img {
      width: 18%;
      
      &.img-2 {
        bottom: 0;
        left: -15px;
        max-width: 140px;
      }

      &.img-3 {
        bottom: 0px;
        right: -30px;
        max-width: 160px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    /* Tiny neon orbs for small mobile */
    &::after {
      width: 25px;
      height: 25px;
      box-shadow: 0 0 10px rgba(106, 173, 216, 0.15);
      top: 10%;
      right: 5%;
    }
    
    .neon-orb-secondary {
      width: 20px;
      height: 20px;
      box-shadow: 0 0 8px rgba(106, 173, 216, 0.12);
      bottom: 10%;
      left: 3%;
    }
    
    .overlay-card {
      height: clamp(60px, 10vh, 100px);
      border-radius: 12px 12px 0 0;
      
      .overlay-pattern {
        border-radius: 12px 12px 0 0;
        
        &::before {
          top: 6px;
          right: 10px;
          width: 20px;
          height: 20px;
        }
        
        &::after {
          bottom: 4px;
          left: 12px;
          width: 15px;
          height: 15px;
        }
      }
    }
    
    .text-card {
      .hero-content-text {
        .uig-banner-title {
          font-size: 1.8rem;
          
          .hero-badge {
            font-size: 0.9rem;
            margin-left: 6px;
            padding: 4px 10px;
          }
        }
      }
    }
    
    .hero-mobile-images {
      .mobile-image {
        img {
          width: 160px;
          height: 200px;
        }
        
        .image-label {
          font-size: 10px;
          padding: 4px 8px;
        }
      }
    }
  }
`;

export default HomeBannerStyle;