import React from "react";
import promo from "../../Context/Promodata/index";
import Promo from "../../Context/Promodata";

function PromoCard() {
  function createPromoCard(createPromo) {
    return (
      <Promo
        title={createPromo.title}
        price={createPromo.price}
        content1={createPromo.content1}
        content2={createPromo.content2}
        content3={createPromo.content3}
      />
    );
  }

  return (
    <div>
      <div className="Group-Promo">{promo.map(createPromoCard)}</div>
    </div>
  );
}

export default PromoCard;
