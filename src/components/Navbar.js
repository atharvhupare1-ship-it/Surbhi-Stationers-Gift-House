'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/products', label: 'Products' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>S</span>
                    <div className={styles.logoText}>
                        <span className={styles.logoName}>Surbhi</span>
                        <span className={styles.logoSub}>Stationer & Gift House</span>
                    </div>
                </Link>

                <div className={`${styles.navLinks} ${isOpen ? styles.navOpen : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://maps.app.goo.gl/MwgZXoMMoqTRSPDH8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn-outline ${styles.navLocation}`}
                    >
                        📍 Location
                    </a>
                    <Link href="/contact" className={`btn btn-primary ${styles.navCta}`}>
                        Get in Touch
                    </Link>
                </div>

                <button
                    className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}
        </nav>
    );
}
