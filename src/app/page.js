import HeroBanner from '@/components/HeroBanner';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import { products, categories } from '@/data/products';
import styles from './page.module.css';

const allCategories = [
  { name: 'School Stationery', emoji: '📚', color: '#4CAF50' },
  { name: 'Office Stationery', emoji: '🖊️', color: '#2196F3' },
  { name: 'Cosmetics', emoji: '💄', color: '#E91E63' },
  { name: 'Cutlery', emoji: '🍴', color: '#FF9800' },
  { name: 'Science Projects Materials', emoji: '🔬', color: '#9C27B0' },
  { name: 'Decorative & Crafting Items', emoji: '🎨', color: '#F44336' },
  { name: 'Adhesives & Tools', emoji: '🔧', color: '#607D8B' },
  { name: 'Painting & Drawing Items', emoji: '🖌️', color: '#FF5722' },
  { name: 'Birthday Decoration Items', emoji: '🎂', color: '#E040FB' },
  { name: 'Xerox & Printing', emoji: '🖨️', color: '#00BCD4' },
];

export default function Home() {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Surbhi Note */}
      <div className={styles.storeNote}>
        <div className="container">
          <p>💡 Come one time to Surbhi in life — you&apos;ll never go to another stationery &amp; gift shop again, because <strong>all products are already present at Surbhi!</strong></p>
        </div>
      </div>

      {/* All Categories Available */}
      <section className={`section ${styles.allCategories}`}>
        <div className="container">
          <div className="section-header">
            <h2>All Categories Available In Our House</h2>
            <p>Everything you need, all under one roof</p>
          </div>
          <div className={styles.allCatGrid}>
            {allCategories.map((cat, index) => (
              <div
                key={cat.name}
                className={styles.allCatTile}
                style={{
                  '--tile-color': cat.color,
                  animationDelay: `${index * 0.08}s`,
                }}
              >
                <span className={styles.allCatEmoji}>{cat.emoji}</span>
                <span className={styles.allCatName}>{cat.name}</span>
              </div>
            ))}
          </div>
          <div className={styles.allCatNote}>
            <span className={styles.allCatNoteIcon}>🏪</span>
            <p>All items are available in <strong>Surbhi Stationers &amp; Gift House</strong></p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={`section ${styles.featured}`}>
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Handpicked premium products loved by our customers</p>
          </div>
          <div className={styles.productGrid}>
            {featuredProducts.map((product, index) => (
              <div key={product.id} className={styles.productItem} style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Store Note */}
      <div className={styles.storeNote}>
        <div className="container">
          <p>🏪 We can&apos;t show you 500+ products on our website — <strong>Come to Surbhi Stationer &amp; Gift House</strong> to see our complete collection!</p>
        </div>
      </div>

      {/* Categories */}
      <section className={`section ${styles.categories}`}>
        <div className="container">
          <div className="section-header">
            <h2>Shop by Category</h2>
            <p>Browse our wide range of products organized just for you</p>
          </div>
          <div className={styles.categoryGrid}>
            {categories.map((category, index) => (
              <div key={category.id} className={styles.categoryItem} style={{ animationDelay: `${index * 0.1}s` }}>
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`section ${styles.whyUs}`}>
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us</h2>
            <p>We&apos;re committed to delivering the best shopping experience</p>
          </div>
          <div className={styles.features}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏆</div>
              <h3>Premium Quality</h3>
              <p>Only the finest brands and products, carefully curated for you</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💰</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing without compromising on quality</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📦</div>
              <h3>Wide Selection</h3>
              <p>500+ products across stationery, gifts, school & art supplies</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>😊</div>
              <h3>Trusted Service</h3>
              <p>30+ years of happy customers in Kolhapur</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Visit Our Store Today</h2>
            <p>Come explore our complete collection at our store in Kolhapur. We&apos;d love to help you find exactly what you need!</p>
            <div className={styles.ctaInfo}>
              <div className={styles.ctaItem}>
                <span className={styles.ctaIcon}>📍</span>
                <span>Shop No.15, Pratibhanagar Market, Near Sai Mandir, Kolhapur</span>
              </div>
              <div className={styles.ctaItem}>
                <span className={styles.ctaIcon}>📞</span>
                <a href="tel:+919850898349">+91 98508 98349</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
