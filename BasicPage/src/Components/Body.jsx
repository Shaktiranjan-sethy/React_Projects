import React from "react";

function Body() {
    return (
        <main className="body container">
            <div className="body_text">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES.
                </p>
                <div className="body_btn">
                    <button>Shop now</button>
                    <button className="scnd_btn">Category</button>
                </div>
                <div className="shopping">
                    <p>Also avialable On</p>

                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon-logo" />
                        <img src="/images/flipkart.png" alt="flipkart-logo" />
                    </div>
                </div>
            </div>
            <div className="body_img">
            <img src="/images/hero-image.png" alt="hero-image" />
            </div>
        </main>
    )
}
export default Body