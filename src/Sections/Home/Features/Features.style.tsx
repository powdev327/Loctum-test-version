import styled from "styled-components";

const FeaturesStyleWrapper = styled.section`
  padding: 100px 0 50px 0;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.bgHero} 0%, ${({ theme }) => theme.colors.whiteColor} 100%);

  .features-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    align-items: stretch; /* Ensures all cards stretch to the same height */
  }

  .feature-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 20px;
    padding: 40px;
    min-height: 100%;
    box-shadow: 0px 15px 40px rgba(28, 78, 167, 0.08);
    position: relative;
    transition: all 0.4s ease-in-out;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid rgba(28, 78, 167, 0.08);

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0px 25px 60px rgba(28, 78, 167, 0.15);
      border-color: ${({ theme }) => theme.colors.healthcareSecondary};
      
      .feature-card-icon img {
        transform: scale(1.1);
      }
      
      h5 {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    .feature-card-shape {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.15;
      transition: opacity 0.4s ease-in-out;

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }

    &:hover .feature-card-shape {
      opacity: 0.25;
    }

    .feature-card-icon {
      margin-bottom: 15px;

      img {
        width: 50px;
        height: 50px;
        transition: 0.3s;
      }
    }

    .feature-card-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%; /* Ensures text stays properly aligned */
    }

    h5 {
      font-size: 22px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.title};
      margin-bottom: 15px;
      min-height: 50px; /* Ensures all titles are aligned */
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 0.3s ease;
    }

    p {
      font-size: 16px;
      line-height: 28px;
      color: ${({ theme }) => theme.colors.textColor};
      max-width: 90%;
      margin: auto;
      flex-grow: 1;
      font-weight: 500;
    }
  }

  /* Responsive Design */
  @media screen and (max-width: 991px) {
    .feature-card {
      padding: 30px;
    }
    .feature-card-icon {
      margin-bottom: 15px;
    }
    .feature-card-text {
      h5 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
        line-height: 24px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 40px 0px 0px 0px;

    .feature-card {
      padding: 25px;
      h5 {
        font-size: 17px;
      }
      p {
        font-size: 14px;
        line-height: 22px;
      }
    }
    .feature-card-icon {
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 480px) {
    .feature-card {
      padding: 20px;
      h5 {
        font-size: 16px;
      }
      p {
        font-size: 13px;
        line-height: 22px;
      }
    }
    .feature-card-icon {
      margin-bottom: 10px;
      img {
        width: 35px;
        height: 35px;
      }
    }
  }

`;

export default FeaturesStyleWrapper;
