import React from 'react';

const Blog = () => {
    const posts = [
        {
            date: '15. LIPANJ 2024',
            title: 'ZLATNA BERBA 2024',
            excerpt: 'Ovogodišnja berba u Blatu obećava vrhunsku kvalitetu. Sunčani sati i idealni uvjeti stvorili su savršenu bazu za naša nova vina.',
            img: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1000&auto=format&fit=crop'
        },
        {
            date: '02. SVIBANJ 2024',
            title: 'TAJNE NAŠEG PODRUMA',
            excerpt: 'Otkrijte kako nastaju naša odležana crna vina. Proces zrenja u barrique bačvama daje vinima Dine karakterističnu dubinu i aromu.',
            img: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=1000&auto=format&fit=crop'
        },
        {
            date: '20. OŽUJAK 2024',
            title: 'EVENT: KUŠANJE VINA',
            excerpt: 'Pridružite nam se na ekskluzivnom kušanju novih etiketa. Doživite sinergiju dalmatinske tradicije i moderne enologije u srcu našeg podruma.',
            img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop'
        }
    ];

    return (
        <section className="section-padding blog-section" id="blog">
            <div className="container">
                <div className="text-center">
                    <div className="section-subtitle">Naše priče</div>
                    <h2 className="section-title">NOVOSTI IZ VINOGRADA</h2>
                </div>
                <div className="blog-grid">
                    {posts.map((post, index) => (
                        <div key={index} className="blog-item">
                            <div className="blog-img">
                                <img src={post.img} alt={post.title} />
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">{post.date}</span>
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <a href="#" className="blog-link">PROČITAJ VIŠE</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
