import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerWave}>
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 55C960 40 1056 20 1152 15C1248 10 1344 20 1392 25L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" fill="var(--color-primary)" />
                </svg>
            </div>

            <div className={styles.footerContent}>
                <div className={`container ${styles.footerGrid}`}>
                    {/* Brand */}
                    <div className={styles.footerBrand}>
                        <div className={styles.brandLogo}>
                            <span className={styles.brandIcon}>S</span>
                            <div>
                                <h3>Surbhi</h3>
                                <p className={styles.brandSub}>Stationer & Gift House</p>
                            </div>
                        </div>
                        <p className={styles.brandDesc}>
                            Your one-stop destination for premium stationery, thoughtful gifts, school supplies, and art materials in Kolhapur.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.footerSection}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/products">All Products</Link></li>
                            <li><Link href="/products?category=stationery">Stationery</Link></li>
                            <li><Link href="/products?category=gifts">Gift Items</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className={styles.footerSection}>
                        <h4>Categories</h4>
                        <ul>
                            <li><Link href="/products?category=stationery">Stationery</Link></li>
                            <li><Link href="/products?category=gifts">Gift Items</Link></li>
                            <li><Link href="/products?category=school">School Supplies</Link></li>
                            <li><Link href="/products?category=art">Art & Craft</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={styles.footerSection}>
                        <h4>Contact Us</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <span className={styles.contactIcon}>📍</span>
                                <span>Shop No.15, Pratibhanagar Market, Near Sai Mandir, Kolhapur</span>
                            </li>
                            <li>
                                <span className={styles.contactIcon}>📞</span>
                                <a href="tel:+919850898349">+91 98508 98349</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`container ${styles.footerBottom}`}>
                    <p>&copy; {new Date().getFullYear()} Surbhi Stationer & Gift House. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
