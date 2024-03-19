import React from "react";

function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img src="https://th.bing.com/th/id/OIP.pGv7RUz8w_nqFwha7_H1swHaHa?rs=1&pid=ImgDetMain" />
      </div>

      <h1>Home Component</h1>
      <div className="cart-wrapperx">
        <div className="img-wrapper item">
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-config-202402?wid=820&hei=498&fmt=jpeg&qlt=90&.v=1708371033110" />
        </div>
        <div className="text-wrapper item">
          <span>Macbook</span>
          <span>Price: $1200.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
