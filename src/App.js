import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Route, Switch, useHistory } from "react-router-dom";
import Form from "./components/Form";
import Header from "./components/Header";
import Home from "./components/Home";

const formSchema = Yup.object().shape({
  isim: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Please enter valid name"),
  adress: Yup.string()
    .min(6, "Adress must be at least 6 characters")
    .required("Please enter valid adress"),
  boyut: Yup.string().required("Please select size"),
  types: Yup.mixed()
    .oneOf(["margherita", "cheese", "meat", "veggie"], "Please select types")
    .required(),
  malzeme1: Yup.boolean(),
  malzeme2: Yup.boolean(),
  malzeme3: Yup.boolean(),
  siparisSayisi: Yup.number()
    .positive()
    .min(1, "Must be more than 1")
    .required("Please enter valid number of orders"),
});

const checkData = {
  isim: "",
  adress: "",
  types: "",
  boyut: "",
  malzeme1: false,
  malzeme2: false,
  malzeme3: false,
  siparisSayisi: "",
};

const checkErrors = {
  isim: "",
  adress: "",
  boyut: "",
  types: "",
  malzeme1: "",
  malzeme2: "",
  malzeme3: "",
  siparisSayisi: "",
};

const App = () => {
  let history = useHistory();
  function clickButton() {
    history.push("/pizza");
  }

  const [formData, setFormData] = useState(checkData);
  const [errors, setErrors] = useState(checkErrors);
  const [buttonDisable, setButtonDisable] = useState(true);

  const [newOrder, setNewOrder] = useState(null);
  function checkFormErrors(name, value) {
    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  }
  const handleChange = (event) => {
    const { value, name, type, checked } = event.target;
    let deger = value;
    if (type === "checkbox") {
      deger = checked;
    }
    checkFormErrors(name, deger);
    setFormData({
      ...formData,
      [name]: deger,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", formData)
      .then((response) => {
        setNewOrder(response.data);
        setFormData(checkData);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    formSchema
      .isValid(formData)
      .then((response) => setButtonDisable(!response));
  }, [formData]);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home clickButton={clickButton} />
        </Route>
        <Route path="/pizza">
          <Form
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            buttonDisable={buttonDisable}
            newOrder={newOrder}
          />
        </Route>
      </Switch>
    </>
  );
};
export default App;
