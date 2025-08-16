import styled from "styled-components";

const FeaturesStyleWrapper = styled.section`
  padding: 120px 0;
  background: #f8f9fa;
  position: relative;
  overflow: hidden;
  background-attachment: fixed;

  .section-title-wrapper {
    margin-bottom: 80px;
    
    h2 {
      font-size: 48px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.title};
      margin-bottom: 20px;
      line-height: 1.2;
    }
    
    .subtitle {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 15px;
    }
  }

  .features-list {
    display: flex;
    flex-direction: column;
    gap: 120px;
  }

  .feature-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    
    &.reverse {
      .feature-image {
        order: 2;
      }
      .feature-content {
        order: 1;
      }
    }
  }

  .feature-image {
    position: relative;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    
    .image-wrapper {
      position: relative;
      border-radius: 24px;
      overflow: hidden;
      background: #ffffff;
      box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.08),
        0 8px 16px rgba(0, 0, 0, 0.04),
        0 4px 8px rgba(0, 0, 0, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.8);
      transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      
      &:hover {
        transform: translateY(-15px) scale(1.02);
        box-shadow: 
          0 40px 80px rgba(0, 0, 0, 0.12),
          0 20px 40px rgba(0, 0, 0, 0.08),
          0 8px 16px rgba(0, 0, 0, 0.04);
      }
      
      img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
      
      .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, 
          ${({ theme }) => theme.colors.primary}15 0%, 
          ${({ theme }) => theme.colors.healthcareSecondary}15 100%);
        opacity: 0;
        transition: opacity 0.4s ease;
      }
      
      &:hover .image-overlay {
        opacity: 1;
      }
      
      &:hover img {
        transform: scale(1.08);
      }
      
      &::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(135deg, 
          ${({ theme }) => theme.colors.primary}20 0%, 
          ${({ theme }) => theme.colors.healthcareSecondary}20 100%);
        border-radius: 26px;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.4s ease;
      }
      
      &:hover::before {
        opacity: 1;
      }
    }
  }

  .feature-content {
    padding: 50px;
    background: #ffffff;
    border-radius: 24px;
    box-shadow: 
      0 15px 35px rgba(0, 0, 0, 0.06),
      0 6px 15px rgba(0, 0, 0, 0.04),
      0 3px 8px rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(0, 0, 0, 0.04);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
    
    &:hover {
      transform: translateY(-8px);
      box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.1),
        0 12px 25px rgba(0, 0, 0, 0.06),
        0 6px 12px rgba(0, 0, 0, 0.04);
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, 
        ${({ theme }) => theme.colors.primary} 0%, 
        ${({ theme }) => theme.colors.healthcareSecondary} 100%);
      border-radius: 24px 24px 0 0;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    
    &:hover::before {
      opacity: 1;
    }
    
    .content-wrapper {
      max-width: 500px;
      position: relative;
      z-index: 2;
    }
    
    .feature-number {
      display: inline-block;
      margin-bottom: 24px;
      
      span {
        font-size: 16px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary};
        background: linear-gradient(135deg, 
          ${({ theme }) => theme.colors.primary}15 0%, 
          ${({ theme }) => theme.colors.healthcareSecondary}15 100%);
        padding: 10px 18px;
        border-radius: 30px;
        letter-spacing: 1px;
        border: 1px solid ${({ theme }) => theme.colors.primary}20;
        transition: all 0.3s ease;
      }
    }
    
    &:hover .feature-number span {
      background: linear-gradient(135deg, 
        ${({ theme }) => theme.colors.primary}25 0%, 
        ${({ theme }) => theme.colors.healthcareSecondary}25 100%);
      border-color: ${({ theme }) => theme.colors.primary}40;
      transform: scale(1.05);
    }
    
    .feature-title {
      font-size: 36px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.title};
      margin-bottom: 24px;
      line-height: 1.3;
      transition: color 0.3s ease;
      
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    
    .feature-description {
      font-size: 18px;
      line-height: 1.7;
      color: ${({ theme }) => theme.colors.textColor};
      margin-bottom: 30px;
      font-weight: 400;
    }
    
    .feature-decoration {
      .decoration-line {
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, 
          ${({ theme }) => theme.colors.primary} 0%, 
          ${({ theme }) => theme.colors.healthcareSecondary} 100%);
        border-radius: 2px;
        transition: width 0.4s ease;
      }
    }
    
    &:hover .decoration-line {
      width: 120px;
    }
  }

  /* Tablet Styles */
  @media screen and (max-width: 1024px) {
    padding: 80px 0;
    
    .section-title-wrapper {
      margin-bottom: 60px;
      
      h2 {
        font-size: 40px;
      }
    }
    
    .features-list {
      gap: 80px;
    }
    
    .feature-item {
      gap: 60px;
    }
    
    .feature-content {
      padding: 40px;
      
      .feature-title {
        font-size: 32px;
      }
      
      .feature-description {
        font-size: 16px;
      }
    }
    
    .feature-image .image-wrapper img {
      height: 350px;
    }
  }

  /* Mobile and Tablet Portrait - Vertical Layout */
  @media screen and (max-width: 768px) {
    padding: 60px 0;
    
    .section-title-wrapper {
      margin-bottom: 50px;
      
      h2 {
        font-size: 32px;
      }
      
      .subtitle {
        font-size: 16px;
      }
    }
    
    .features-list {
      gap: 60px;
    }
    
    .feature-item {
      grid-template-columns: 1fr;
      gap: 40px;
      text-align: center;
      
      &.reverse {
        .feature-image {
          order: 1;
        }
        .feature-content {
          order: 2;
        }
      }
    }
    
    .feature-image .image-wrapper {
      img {
        height: 280px;
      }
    }
    
    .feature-content {
      padding: 30px;
      margin: 0 15px;
      
      .content-wrapper {
        max-width: 100%;
      }
      
      .feature-title {
        font-size: 28px;
        margin-bottom: 20px;
      }
      
      .feature-description {
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 25px;
      }
      
      .feature-decoration {
        display: flex;
        justify-content: center;
      }
    }
  }

  /* Small Mobile */
  @media screen and (max-width: 480px) {
    padding: 40px 0;
    
    .section-title-wrapper {
      margin-bottom: 40px;
      
      h2 {
        font-size: 28px;
      }
      
      .subtitle {
        font-size: 14px;
      }
    }
    
    .features-list {
      gap: 50px;
    }
    
    .feature-item {
      gap: 30px;
    }
    
    .feature-image .image-wrapper {
      img {
        height: 240px;
      }
    }
    
    .feature-content {
      padding: 25px;
      margin: 0 10px;
      
      .feature-number span {
        font-size: 14px;
        padding: 8px 14px;
      }
      
      .feature-title {
        font-size: 24px;
        margin-bottom: 16px;
      }
      
      .feature-description {
        font-size: 15px;
        line-height: 1.5;
        margin-bottom: 20px;
      }
    }
  }

  /* Individual card animations - only cards move, not container */
  .feature-item {
    /* Fixed card - always visible (first card) */
    &.fixed-card {
      .feature-image {
        opacity: 1;
        transform: translateY(0);
        transition: none;
      }
      
      .feature-content {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        
        &:hover {
          transform: translateY(-8px);
        }
      }
    }
    
    /* Scroll-based cards (second and third cards) */
    &:not(.fixed-card) {
      &.slide-up {
        .feature-image {
          opacity: 1;
          transform: translateY(0);
        }
        
        .feature-content {
          opacity: 1;
          transform: translateY(0);
          
          &:hover {
            transform: translateY(-8px);
          }
        }
      }
      
      &:not(.slide-up) {
        .feature-image {
          opacity: 0;
          transform: translateY(100px);
        }
        
        .feature-content {
          opacity: 0;
          transform: translateY(100px);
        }
      }
    }
  }
`;

export default FeaturesStyleWrapper;
