const HeroSection=()=>
{
    return(
        <main className="hero-container">
            <div className="hero-content">
                <h1>YOUT FEET DESERVE THE BEST</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam delectus consequatur inventore. Harum porro quaerat deleniti officiis distinctio, et eligendi, nesciunt similique repellendus id sapiente eos nihil debitis possimus.</p>
                <div className="hero-btn">
                    <button className="red">Shop now</button>
                    <button>Category</button>
                </div>
                
                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="logo" width="20px" height="20px" />
                        <img src="/images/flipkart.jpg" alt="logo" width="30px" height="30px" />

                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoe.jpg" alt="shoe " width="500px" height="500px" className="centre-img"/> </div>
        </main>
            
        
    );

};

export default HeroSection;