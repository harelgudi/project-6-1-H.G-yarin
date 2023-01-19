import React from 'react'

const Carousel = () => {
    return (
        <div><div id="carouselExample" className="carousel slide">
            <div className="carousel-inner d-flex">
                <div className="carousel-item active">
                    <img src="https://cdn.mos.cms.futurecdn.net/HexHbb8H3c2A9WpLBdtLHV.jpg" className="img1 d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/04/marvel-cinematic-universe.jpg" className="img3 d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://images.thedirect.com/media/article_full/bwnew.jpg" className="img3 d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://eu-images.contentstack.com/v3/assets/bltbc1876152fcd9f07/blt8a0b49bb2cb02f2f/62a5d03229ab715301b383d7/Captain_America.jpg" className="img3 d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://images.indianexpress.com/2022/08/Marvel.jpg" className="img3 d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://images.thedirect.com/media/article_full/bwnew.jpg" className="img3 d-block w-100" alt="..."></img>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div></div>
    )
}

export default Carousel