import HomeBannerStyle from "./HomeBanner.style";
import { FaCheck } from "react-icons/fa6";
import { useEffect, useState } from "react";

import bannerShape1 from "../../../assets/images/main-demo/banner-shape1.png";
import bannerShape2 from "../../../assets/images/main-demo/banner-shape2.png";
import bannerShape3 from "../../../assets/images/main-demo/banner-shape3.png";
import getDemoSvg from "../../../assets/images/main-demo/get-demo.svg";
import arrowRightSvg from "../../../assets/images/icons/arrow-right.svg";
// Healthcare professional and hospital images (using placeholder URLs until actual images are added)
const doctorImg = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=face";
const hospitalImg = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=500&fit=crop&crop=center";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { useTranslation } from "react-i18next";

const HomeBanner = () => {
    const { t } = useTranslation();
    const [scrollY, setScrollY] = useState(0);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Throttle scroll events for better performance
        let ticking = false;
        const throttledHandleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", throttledHandleScroll, { passive: true });
        window.addEventListener("resize", handleResize);

        // Initial call
        handleResize();

        return () => {
            window.removeEventListener("scroll", throttledHandleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Calculate responsive image movement based on scroll and screen size
    const getResponsiveMovement = () => {
        const maxMovement = windowWidth > 1200 ? 150 :
                          windowWidth > 991 ? 80 : 
                          windowWidth > 767 ? 60 : 40;
        const scrollMultiplier = windowWidth > 1200 ? 5 : 
                               windowWidth > 991 ? 6 : 7;
        return Math.min(scrollY / scrollMultiplier, maxMovement);
    };
    
    const imageMovement = getResponsiveMovement();
    const showFloatingImages = windowWidth > 991; // Only show floating images on desktop

    return (
        <HomeBannerStyle 
            className="hero-section"
            style={{
                transform: `translateY(${Math.min(scrollY / 15, 30)}px)`,
                boxShadow: `
                    0 20px 60px rgba(106, 173, 216, ${0.15 + Math.min(scrollY / 2000, 0.1)}),
                    0 0 40px rgba(106, 173, 216, ${0.1 + Math.min(scrollY / 3000, 0.1)}),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `
            }}
        >
            {/* Secondary Neon Orb */}
            <div 
                className="neon-orb-secondary"
                style={{
                    transform: `translate(${Math.sin(scrollY / 100) * 20}px, ${Math.cos(scrollY / 150) * 15}px)`
                }}
            ></div>

            {/*<div className="bg-shape">*/}
            {/*    <div className="shape-img img-1">*/}
            {/*        <ScrollAnimate delay={250}><img src={bannerShape1} alt="shape1" /></ScrollAnimate>*/}
            {/*    </div>*/}
            {/*    <div className="shape-img img-2">*/}
            {/*        <ScrollAnimate delay={220}><img src={bannerShape2} alt="shape2" /></ScrollAnimate>*/}
            {/*    </div>*/}
            {/*    <div className="shape-img img-3">*/}
            {/*        <ScrollAnimate delay={240}><img src={bannerShape3} alt="shape3" /></ScrollAnimate>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="container">
                <div className="hero-layout">
                    {/* Healthcare Images with Scroll Animation - Desktop Only */}
                    {showFloatingImages && (
                        <div className="floating-images">
                            <div 
                                className="doctor-image scroll-animate"
                                style={{ transform: `translate(-${imageMovement}px, ${Math.min(scrollY / 3, 1000)}px)` }}
                            >
                                <ScrollAnimate delay={100}>
                                    <img src={doctorImg} alt="Healthcare Professional" />
                                    <div className="image-label">
                                        <span>{t("home.banner.healthcareProfessional")}</span>
                                    </div>
                                </ScrollAnimate>
                            </div>
                            
                            <div 
                                className="hospital-image scroll-animate"
                                style={{ transform: `translateX(${imageMovement}px)` }}
                            >
                                <ScrollAnimate delay={150}>
                                    <img src={hospitalImg} alt="Healthcare Facility" />
                                    <div className="image-label">
                                        <span>{t("home.banner.healthcareFacility")}</span>
                                    </div>
                                </ScrollAnimate>
                            </div>
                        </div>
                    )}

                    {/* Main Text Card */}
                    <div className="text-card">
                        <div className="card-decorations">
                            <div className="decoration decoration-1"></div>
                            <div className="decoration decoration-2"></div>
                            <div className="decoration decoration-3"></div>
                        </div>

                        <div className="hero-content">
                            <div className="hero-content-text">
                                <ScrollAnimate>
                                    <h1 className="uig-banner-title">
                                        <span className="title-line">
                                            <span className="title-part-1">{t("home.banner.title1")}</span>
                                            <span className="hero-badge">{t("home.banner.titleBadge")}</span>
                                        </span>
                                        <span className="title-part-2">{t("home.banner.title2")}</span>
                                    </h1>
                                </ScrollAnimate>

                                <ScrollAnimate delay={200}>
                                    <p className="hero-description">
                                        {t("home.banner.description")}
                                    </p>
                                </ScrollAnimate>
                            </div>

                            <div className="hero-content-actions">
                                <div className="hero-content-button">
                                    <ScrollAnimate delay={250}>
                                        <a href="/sign-up" className="bg-blue-btn primary-cta">
                                            <span className="btn-inner">
                                                <span className="btn-normal-text">{t("home.banner.cta")}</span>
                                                <span className="btn-hover-text">{t("home.banner.cta")}</span>
                                            </span>
                                        </a>
                                    </ScrollAnimate>

                                    <ScrollAnimate delay={280}>
                                        <a href="/about-us" className="bg-white-btn secondary-cta">
                                            <span className="btn-inner">
                                                <span className="btn-normal-text">{t("home.banner.learnMore")}</span>
                                                <span className="btn-hover-text">{t("home.banner.learnMore")}</span>
                                            </span>
                                        </a>
                                    </ScrollAnimate>
                                </div>

                                <ScrollAnimate delay={300}>
                                    <ul className="hero-content-list">
                                        <li>
                                            <div className="list-item">
                                                <FaCheck />
                                                <p className="wt-700">{t("home.banner.feature1")}</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list-item">
                                                <FaCheck />
                                                <p className="wt-700">{t("home.banner.feature2")}</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list-item">
                                                <FaCheck />
                                                <p className="wt-700">{t("home.banner.feature3")}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </ScrollAnimate>
                            </div>
                        </div>
                    </div>

                    {/* Mobile/Tablet Images Layout */}
                    {!showFloatingImages && (
                        <div className="hero-mobile-images">
                            <ScrollAnimate delay={350}>
                                <div className="mobile-image">
                                    <img src={doctorImg} alt="Healthcare Professional" />
                                    <div className="image-label">
                                        <span>{t("home.banner.healthcareProfessional")}</span>
                                    </div>
                                </div>
                            </ScrollAnimate>
                            
                            <ScrollAnimate delay={380}>
                                <div className="mobile-image">
                                    <img src={hospitalImg} alt="Healthcare Facility" />
                                    <div className="image-label">
                                        <span>{t("home.banner.healthcareFacility")}</span>
                                    </div>
                                </div>
                            </ScrollAnimate>
                        </div>
                    )}

                    {/* Demo Button (Floating) */}
                    {/*<div className="floating-demo">*/}
                    {/*    <ScrollAnimate delay={400}>*/}
                    {/*        <a href="#demo" className="get-demo-btn">*/}
                    {/*            <img src={getDemoSvg} alt="get-demo" />*/}
                    {/*            <span className="icon">*/}
                    {/*                <img src={arrowRightSvg} alt="icon" />*/}
                    {/*            </span>*/}
                    {/*        </a>*/}
                    {/*    </ScrollAnimate>*/}
                    {/*</div>*/}
                </div>
            </div>
        </HomeBannerStyle>
    );
};

export default HomeBanner;
