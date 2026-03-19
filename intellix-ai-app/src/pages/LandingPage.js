
import React, { useState, useEffect } from 'react';
import { Bot, Workflow, BarChart3, Code2, ArrowRight, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
// import { Button } from '../components/ui/button';
// import { Input } from '../components/ui/input';
// import { Textarea } from '../components/ui/textarea';
import { mockData } from '../mock';
import { toast } from 'sonner';

const iconMap = {
    bot: Bot,
    workflow: Workflow,
    chart: BarChart3,
    code: Code2
};

const LandingPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Mock submission - will be replaced with actual API call
        setTimeout(() => {
            toast.success('Message sent successfully! We\'ll get back to you soon.');
            setFormData({ name: '', email: '', company: '', message: '' });
            setIsSubmitting(false);
        }, 1000);
    };

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="landing-page">
            {/* Navigation Header */}
            <nav className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    <div className="nav-logo">
                        <Sparkles className="h-6 w-6" />
                        <span className="company-name">IntellX AI</span>
                    </div>
                    <div className="nav-links">
                        <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
                        <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                        <button onClick={() => scrollToSection('contact')} className="nav-link-cta">Contact</button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-background"></div>
                <div className="hero-content">
                    <div className="hero-badge">
                        <Sparkles className="h-4 w-4" />
                        <span>IntellX, AI-Powered Solutions</span>
                    </div>
                    {/* <h1 className="hero-title">{mockData.hero1.title}</h1>
                    <p className="hero-subtitle">{mockData.hero1.subtitle}</p> */}
                    <h1 className="hero-title">{mockData.hero2.title}</h1>
                    <p className="hero-subtitle">{mockData.hero2.subtitle}</p>
                    <div className="hero-cta-group">
                        <button
                            size="lg"
                            className="hero-cta primary"
                            onClick={() => scrollToSection('contact')}
                        >
                            {mockData.hero1.cta}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <button
                            size="lg"
                            variant="outline"
                            className="hero-cta secondary"
                            onClick={() => scrollToSection('services')}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section" id="services">
                <div className="section-container">
                    <div className="section-header">
                        <div className="section-badge">What We Do</div>
                        <h2 className="section-title">Our Services</h2>
                        <p className="section-subtitle">Comprehensive AI solutions tailored to transform your business operations</p>
                    </div>
                    <div className="services-grid">
                        {mockData.services.map((service, index) => {
                            const IconComponent = iconMap[service.icon];
                            return (
                                <div key={service.id} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="service-icon-wrapper">
                                        <div className="service-icon">
                                            <IconComponent className="h-7 w-7" />
                                        </div>
                                    </div>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                    <div className="service-link">
                                        <span>Learn more</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section" id="about">
                <div className="section-container">
                    <div className="about-content">
                        <div className="section-badge">Why Choose Us</div>
                        <h2 className="section-title">{mockData.about.title}</h2>
                        <p className="about-description">{mockData.about.description}</p>
                    </div>
                    <div className="stats-container">
                        <div className="stats-grid">
                            {mockData.about.stats.map((stat, index) => (
                                <div key={index} className="stat-item">
                                    <div className="stat-card">
                                        <div className="stat-value">{stat.value}</div>
                                        <div className="stat-label">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section" id="contact">
                <div className="section-container">
                    <div className="contact-header">
                        <div className="section-badge">Get In Touch</div>
                        <h2 className="section-title">{mockData.contact.title}</h2>
                        <p className="contact-description">{mockData.contact.description}</p>
                    </div>

                    <div className="contact-content">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="john@company.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Company Name</label>
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Your Company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Project Details</label>
                                <textarea
                                    name="message"
                                    placeholder="Tell us about your automation needs and goals..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="form-input"
                                />
                            </div>
                            <button
                                type="submit"
                                size="lg"
                                className="submit-button"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </button>
                        </form>

                        <div className="contact-sidebar">
                            <div className="contact-info-card">
                                <h3 className="contact-info-title">Contact Information</h3>
                                <div className="contact-info-list">
                                    <div className="contact-info-item">
                                        <div className="contact-icon">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="contact-label">Email</div>
                                            <div className="contact-value">ninad.abhyankar88@gmail.com</div>
                                        </div>
                                    </div>
                                    <div className="contact-info-item">
                                        <div className="contact-icon">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="contact-label">Phone</div>
                                            <div className="contact-value">+91-7337358747</div>
                                        </div>
                                    </div>
                                    <div className="contact-info-item">
                                        <div className="contact-icon">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="contact-label">Location</div>
                                            <div className="contact-value">India</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Sparkles className="h-6 w-6" />
                        <span className="footer-company-name">IntellX AI</span>
                    </div>
                    <p className="footer-text">© 2026 AI Automation Agency. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;


// **Key Features:**
// - Fixed navigation with glassmorphism effect
// - Smooth scroll navigation
// - Hero section with dual CTAs
// - Animated service cards
// - Stats showcase
// - Contact form with validation
// - Responsive design
// - Apple-inspired minimal aesthetic

// Replace `[Your Company Name]` with your actual company name in lines 65, 273.