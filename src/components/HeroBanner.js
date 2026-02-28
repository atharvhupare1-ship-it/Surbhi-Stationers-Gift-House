import Link from 'next/link';
import styles from './HeroBanner.module.css';

export default function HeroBanner() {
    return (
        <section className={styles.hero}>
            <div className={styles.bgImage} style={{ backgroundImage: 'url(/hero-banner.png)' }} />
            <div className={styles.overlay} />

            {/* Decorative elements */}
            <div className={styles.decorCircle1} />
            <div className={styles.decorCircle2} />
            <div className={styles.decorLine} />

            <div className={`container ${styles.content}`}>

                <h1 className={styles.title}>
                    Surbhi Stationer <br />
                    <span className={styles.highlight}>& Gift House</span>
                </h1>
                <p className={styles.subtitle}>
                    Your one-stop destination for premium stationery, thoughtful gifts, school supplies, and art materials. Quality you can trust, prices you&apos;ll love.
                </p>
                <div className={styles.actions}>
                    <Link href="/products" className="btn btn-primary">
                        Explore Products
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                    <Link href="/contact" className="btn btn-yellow">
                        Contact Us
                    </Link>
                </div>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>500+</span>
                        <span className={styles.statLabel}>Products</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>30+</span>
                        <span className={styles.statLabel}>Years Serving</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>1000+</span>
                        <span className={styles.statLabel}>Happy Customers</span>
                    </div>
                </div>
                <p className={styles.note}>
                    You need to come to Surbhi if you want products — 99% chances you get your products, 1% chance you don&apos;t!
                </p>
            </div>
        </section>
    );
}
