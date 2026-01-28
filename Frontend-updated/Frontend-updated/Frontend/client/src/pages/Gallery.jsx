import React, { useState } from "react";
import '../style/gallery.css';

const Gallery = () => {
    const images = [
        // Events (1-20)
        ...Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            category: "Events",
            image: `/images/docs/event${i + 1}.png`,
            desc: "Memorable moments from our community events."
        })),

        // Campus (1-13)
        ...[
            { id: 21, file: "campus1.jpg" },
            { id: 22, file: "campus2.jpg" },
            { id: 23, file: "campus3.jpg" },
            { id: 24, file: "campus4.jpg" },
            { id: 25, file: "campus5.jpg" },
            { id: 26, file: "campus6.jpg" },
            { id: 27, file: "campus7.jpg" },
            { id: 28, file: "campus8.jpg" },
            { id: 29, file: "campus9.png" },
            { id: 30, file: "campus10.jpg" },
            { id: 31, file: "campus11.png" },
            { id: 32, file: "campus12.png" },
            { id: 33, file: "campus13.png" },
        ].map(item => ({
            id: item.id,
            category: "Campus",
            image: `/images/docs/${item.file}`,
            desc: "Exploring the state-of-the-art C-DAC Hyderabad campus."
        })),

        // Workshops
        {
            id: 41,
            category: "Workshops",
            image: "/images/docs/workshop1.png",
            desc: "Hands-on technical session."
        },
        {
            id: 42,
            category: "Workshops",
            image: "/images/docs/workshop2.png",
            desc: "Expert-led training session."
        },
        {
            id: 43,
            category: "Workshops",
            image: "/images/docs/workshop3.png",
            desc: "Leadership and management skills."
        },
        {
            id: 44,
            category: "Workshops",
            image: "/images/docs/workshop4.png",
            desc: "Brainstorming and innovation challenge."
        },
        {
            id: 45,
            category: "Workshops",
            image: "/images/docs/workshop5.jpg",
            desc: "Advanced technical deep dive."
        },
        {
            id: 46,
            category: "Workshops",
            image: "/images/docs/workshop6.png",
            desc: "Collaborative problem solving session."
        }
    ];

    const [activeImage, setActiveImage] = useState(null);
    const [filter, setFilter] = useState("All");

    const filteredImages = filter === "All"
        ? images
        : images.filter(img => img.category === filter);

    const categories = ["All", "Events", "Campus", "Workshops"];

    return (
        <div className="container my-5">
            <div className="gallery-box">
                <div className="text-center mb-5">
                    <h2 className="gallery-title">Our Memories</h2>
                    <p className="gallery-subtitle">
                        A glimpse of moments, achievements, and experiences at C-DAC
                    </p>

                    {/* Filter Tabs */}
                    <div className="gallery-filters mt-4 d-flex justify-content-center flex-wrap gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry Grid */}
                <div className="masonry-grid">
                    {filteredImages.map((img) => (
                        <div className="masonry-item" key={img.id}>
                            <div
                                className="gallery-card"
                                onClick={() => setActiveImage(img)}
                            >
                                <img src={img.image} alt={img.category}
                                    onError={(e) => e.target.src = '/images/docs/azadi.png'} />

                            </div>
                        </div>
                    ))}
                </div>

                {/* LIGHTBOX / SLIDER */}
                {activeImage && (
                    <div className="gallery-lightbox" onClick={() => setActiveImage(null)}>
                        <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                            <button
                                className="lightbox-close"
                                onClick={() => setActiveImage(null)}
                            >
                                ✕
                            </button>

                            <img src={activeImage.image} alt={activeImage.category}
                                onError={(e) => e.target.src = '/images/docs/azadi.png'} />

                            <div className="lightbox-caption">

                                <p>{activeImage.desc}</p>
                                <span className="badge bg-warning text-dark">{activeImage.category}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
