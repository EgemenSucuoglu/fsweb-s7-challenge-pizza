import React from "react";
import styled from "styled-components";

const SCOrder = styled.p`
  background: green;
  color: white;
  padding: 10px;
  text-align: center;
`;
export default function Order(props) {
  const { newOrder } = props;
  return (
    <>
      {newOrder && (
        <SCOrder data-cy="new-order">
          Siparişiniz başarıyla oluşturulmuştur.
          {newOrder.id} numaralı sipariş {newOrder.isim} isimli müşterimizin{" "}
          {newOrder.adress} adresine gönderilmek üzere hazırlanıyor.
        </SCOrder>
      )}
    </>
  );
}
