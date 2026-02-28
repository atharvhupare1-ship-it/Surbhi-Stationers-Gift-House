import Link from 'next/link';
import styles from './CategoryCard.module.css';

export default function CategoryCard({ category }) {
    return (
        <Link
            href={`/products?category=${category.slug}`}
            className={styles.card}
        >
            <div className={styles.imageWrapper}>
                <img
                    src={category.image}
                    alt={category.name}
                    className={styles.image}
                    loading="lazy"
                />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
                <h3 className={styles.name}>{category.name}</h3>
                <p className={styles.description}>{category.description}</p>
                <span className={styles.explore}>
                    Explore
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </span>
            </div>
        </Link>
    );
}
