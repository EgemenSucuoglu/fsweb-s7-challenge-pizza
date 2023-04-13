import React from "react";
import styled from "styled-components";
import Order from "./Order";

const SCForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
  padding: 30px 0 30px 0;
`;
const SCBox = styled.p`
  width: 40%;
  background-color: #0e141f;
  padding: 20px;
  margin: 5px;
`;
const SCSubmit = styled.button`
  padding: 10px;
  cursor: pointer;
  font-weight: 700;
`;
const SCLabel = styled.label`
  color: white;
  font-weight: 700;
`;
const SCError = styled.p`
  color: red;
  font-weight: 500;
  font-size: 12px;
`;
const SCText = styled.span`
  color: white;
  font-weight: 700;
  margin-right: 4px;
`;

const SCOrder = styled.div`
  width: 40%;
  padding: 20px;
  margin: 5px;
  color: white;
  font-weight: 500;
  font-size: 20px;
`;
export default function Form(props) {
  const {
    handleChange,
    formData,
    handleSubmit,
    errors,
    buttonDisable,
    newOrder,
  } = props;

  return (
    <>
      <SCForm id="pizza-form" onSubmit={handleSubmit} data-cy="form-submit">
        <SCBox>
          <p>
            <SCLabel
              htmlFor="name-input"
              className="name--label"
              data-cy="isim-label"
            >
              Name:{" "}
            </SCLabel>
            <input
              id="name-input"
              name="isim"
              type="text"
              placeholder="name"
              value={formData.isim}
              onChange={handleChange}
              data-cy="isim-input"
            />
          </p>
          <SCError data-cy="isim-error">{errors.isim}</SCError>
        </SCBox>
        <SCBox>
          <p>
            <SCLabel
              htmlFor="adress-input"
              className="name--label"
              data-cy="adres-label"
            >
              Adress:{" "}
            </SCLabel>
            <input
              id="adress-input"
              name="adress"
              type="text"
              placeholder="adress"
              value={formData.adress}
              onChange={handleChange}
              data-cy="adres-input"
            />
          </p>
          <SCError data-cy="adres-error">{errors.adress}</SCError>
        </SCBox>
        <SCBox>
          <p>
            <SCText>Types of Pizza:</SCText>
            <select
              id="typesOfPizza"
              name="types"
              value={formData.types}
              onChange={handleChange}
              data-cy="typesOfPizza-input"
            >
              <option value="">** Please Select Type**</option>
              <option value="margherita">Margherita Pizza</option>
              <option value="cheese">Cheese Pizza</option>
              <option value="meat">Meat Pizza</option>
              <option value="veggie">veggieeggie Pizza</option>
            </select>
          </p>
          <SCError data-cy="typesOfPizza-error">{errors.types}</SCError>
        </SCBox>
        <SCBox>
          <p>
            <SCText>Pizza Size:</SCText>
            <select
              id="size-dropdown"
              name="boyut"
              value={formData.boyut}
              onChange={handleChange}
              data-cy="size-select"
            >
              <option value="">** Please Select Size**</option>
              <option value="mini">Mini 6"</option>
              <option value="small">Small 10"</option>
              <option value="medium">Medium 12"</option>
              <option value="large">Large 14"</option>
              <option value="jumbo-large">Jumbo Large 16"</option>
            </select>
          </p>
          <SCError data-cy="size-error">{errors.boyut}</SCError>
        </SCBox>
        <SCBox>
          <SCLabel htmlFor="numberOfOrders" data-cy="özel-label">
            Number of orders:{" "}
          </SCLabel>
          <input
            id="numberOfOrders"
            name="siparisSayisi"
            type="number"
            value={formData.siparisSayisi}
            onChange={handleChange}
            data-cy="siparisSayisi-input"
          />
          <SCError data-cy="siparisSayisi-error">
            {errors.siparisSayisi}
          </SCError>
        </SCBox>
        <SCBox>
          <p>
            <SCSubmit
              type="submit"
              id="order-button"
              disabled={buttonDisable}
              data-cy="buttonOrder"
            >
              Add to Orders
            </SCSubmit>
          </p>
        </SCBox>
        <SCOrder>
          <Order newOrder={newOrder} />
        </SCOrder>
      </SCForm>
    </>
  );
}
