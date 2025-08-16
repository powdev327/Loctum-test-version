import FeaturesStyleWrapper from "./Features.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Feature images - using relevant healthcare/business images
const aiMatchingImage = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center";
const marketplaceImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center";
const growthImage = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=center";

const HomeOneFeatures = () => {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
  
  // Intersection observer refs for each feature card
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: false });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: false });
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Get features data from translations with images
  const featuresData = [
    {
      id: 1,
      ref: ref1,
      inView: inView1,
      image: aiMatchingImage,
      imageAlt: "AI-Powered Smart Matching - Healthcare professionals connecting",
      cardTitle: t('home.homeFeatures.feature1.title'),
      cardText: t('home.homeFeatures.feature1.text'),
      delay: 200,
    },
    {
      id: 2,
      ref: ref2,
      inView: inView2,
      image: marketplaceImage,
      imageAlt: "Seamless Marketplace - Healthcare business transactions",
      cardTitle: t('home.homeFeatures.feature2.title'),
      cardText: t('home.homeFeatures.feature2.text'),
      delay: 300,
    },
    {
      id: 3,
      ref: ref3,
      inView: inView3,
      image: growthImage,
      imageAlt: "Growth & Affiliation Program - Business expansion",
      cardTitle: t('home.homeFeatures.feature3.title'),
      cardText: t('home.homeFeatures.feature3.text'),
      delay: 400,
    },
  ];
  
  return (
    <FeaturesStyleWrapper className="feature-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ScrollAnimate delay={200}>
              <SectionTitle
                subtitle={t('home.homeFeatures.subtitle')}
                title={t('home.homeFeatures.title')}
                parentClass="section-title-wrapper text-center"
              />
            </ScrollAnimate>
          </div>
        </div>

        <div className="features-list">
          {featuresData?.map((feature, index) => (
            <div 
              key={feature.id}
              ref={index === 0 ? null : feature.ref}
              className={`feature-item ${index === 0 ? 'fixed-card slide-up' : (feature.inView ? 'slide-up' : '')} ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              {/* Feature Image */}
              <div className="feature-image">
                <div className="image-wrapper">
                  <img 
                    src={feature.image} 
                    alt={feature.imageAlt}
                    loading="lazy"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>

              {/* Feature Content */}
              <div className="feature-content">
                <div className="content-wrapper">
                  <div className="feature-number">
                    <span>{String(feature.id).padStart(2, '0')}</span>
                  </div>
                  <h3 className="feature-title">{feature.cardTitle}</h3>
                  <p className="feature-description">{feature.cardText}</p>
                  <div className="feature-decoration">
                    <div className="decoration-line"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FeaturesStyleWrapper>
  );
};

export default HomeOneFeatures;
