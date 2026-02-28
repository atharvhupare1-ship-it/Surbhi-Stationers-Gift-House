'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <>
            {/* Page Header */}
            <section className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Contact Us</h1>
                    <p className={styles.subtitle}>
                        We&apos;d love to hear from you! Visit our store or reach out through any of the channels below.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className={`section ${styles.contactSection}`}>
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Left: Info Cards */}
                        <div className={styles.infoColumn}>
                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>📍</div>
                                <div>
                                    <h3>Our Store</h3>
                                    <p>Shop No.15, Pratibhanagar Market,<br />Near Sai Mandir, Kolhapur</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>📞</div>
                                <div>
                                    <h3>Phone</h3>
                                    <p><a href="tel:+919850898349">+91 98508 98349</a></p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>🕐</div>
                                <div>
                                    <h3>Store Hours</h3>
                                    <p>Mon – Sat: 9:30 AM – 2:00 PM &amp; 4:30 PM – 9:30 PM<br />Sunday: 10:00 AM – 2:00 PM &amp; 5:00 PM – 9:30 PM</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>✉️</div>
                                <div>
                                    <h3>Email</h3>
                                    <p>surbhistationer@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form + Map */}
                        <div className={styles.formColumn}>
                            {/* Contact Form */}
                            <div className={styles.formCard}>
                                <h2 className={styles.formTitle}>Send us a Message</h2>
                                <p className={styles.formSubtitle}>Have a question? Fill the form and we&apos;ll get back to you.</p>

                                {submitted && (
                                    <div className={styles.successMsg}>
                                        <span>✅</span> Thank you! We&apos;ll get back to you soon.
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="contact-name">Your Name</label>
                                        <input
                                            type="text"
                                            id="contact-name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="contact-email">Email Address</label>
                                        <input
                                            type="email"
                                            id="contact-email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="contact-message">Message</label>
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Write your message here..."
                                            rows="5"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary" id="contact-submit">
                                        Send Message
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
