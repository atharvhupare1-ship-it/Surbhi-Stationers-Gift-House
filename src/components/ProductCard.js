import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                    loading="lazy"
                />
                {product.featured && (
                    <span className={styles.badge}>Featured</span>
                )}
                <div className={styles.overlay}>
                    <span className={styles.viewBtn}>View Details</span>
                </div>
            </div>
            <div className={styles.content}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>
            </div>
        </div>
    );
}
