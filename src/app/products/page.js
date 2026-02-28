'use client';
import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import styles from './page.module.css';

function ProductsContent() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get('category') || 'all';
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <>
            {/* Page Header */}
            <section className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Our Products</h1>
                    <p className={styles.subtitle}>
                        Discover our curated collection of premium stationery, gifts, school supplies, and art materials
                    </p>
                </div>
            </section>

            {/* Filters & Products */}
            <section className={`section ${styles.productsSection}`}>
                <div className="container">
                    {/* Search & Filter Bar */}
                    <div className={styles.toolbar}>
                        <div className={styles.searchWrapper}>
                            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <path d="M21 21l-4.35-4.35" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={styles.searchInput}
                                id="product-search"
                            />
                        </div>
                        <div className={styles.filters}>
                            <button
                                className={`${styles.filterBtn} ${activeCategory === 'all' ? styles.filterActive : ''}`}
                                onClick={() => setActiveCategory('all')}
                            >
                                All
                            </button>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    className={`${styles.filterBtn} ${activeCategory === cat.slug ? styles.filterActive : ''}`}
                                    onClick={() => setActiveCategory(cat.slug)}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className={styles.resultsBar}>
                        <span className={styles.resultsCount}>
                            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                        </span>
                    </div>

                    {/* Product Grid */}
                    {filteredProducts.length > 0 ? (
                        <div className={styles.productGrid}>
                            {filteredProducts.map((product, index) => (
                                <div key={product.id} className={styles.productItem} style={{ animationDelay: `${index * 0.08}s` }}>
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <div className={styles.emptyIcon}>🔍</div>
                            <h3>No products found</h3>
                            <p>Try adjusting your search or filter criteria</p>
                            <button className="btn btn-primary" onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}>
                                View All Products
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={
            <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p>Loading products...</p>
            </div>
        }>
            <ProductsContent />
        </Suspense>
    );
}
