import React from "react";

const ProductDetailCard = ({ product }) => {
  return (
    <div>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2></h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="MP-container">
        <div className="MP-box">
          <div className="MP-images">
            <div className="MP-img-holder active">
              <img src="images/paket1.png" />
            </div>
          </div>
          <div className="MP-basic-info">
            <h1>{product.name}</h1>
            <div class="MP-rate">
              <i className="filled fa fa-star"></i>
              <i className="filled fa fa-star"></i>
              <i className="filled fa fa-star"></i>
              <i className="filled fa fa-star"></i>
              <i className="filled fa fa-star"></i>
            </div>
            <span>$8.999</span>
          </div>
          <div className="MP-description">
            <h3
              style={{ fontSize: "16px", color: "black", fontWeight: "bolder" }}
            >
              Paket İçeriği
            </h3>
            <p></p>
            <h3 style={{ fontSize: "16px", fontWeight: "bolder" }}>
              Bir Günde Neleri Çalıştırır
            </h3>
            <p> ggfhgf</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
