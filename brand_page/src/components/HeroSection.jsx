const HeroSection = () => {
    return (
        <main className="hero container">

            <div className="hero-content" >

                <h1>
                    YOUR FEET DESERVES THE BEST
                </h1>

                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ab nisi debitis voluptatum eum similique.
                    Assumenda soluta dignissimos porro, et est sint rem hic aperiam
                    quisquam saepe. Exercitationem, inventore
                </p>

                <div className="btn">
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>

                <div className="shop">
                    <p> also available on</p>

                    <div className="icons">
                        <img src="./images/amazon.png" alt="amazon" />
                        <img src="./images/flipkart.png" alt="flipcart" />
                    </div>
                </div>

            </div>

            <div className="hero-img">
                <img src="./images/shoe_image.png" alt="shoe" />
            </div>
        </main>
    )
}
export default HeroSection