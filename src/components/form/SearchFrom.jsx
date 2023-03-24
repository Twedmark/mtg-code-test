import React, { useState, useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  FormContainer,
  Grid,
  PreviewImage,
  Reset,
  Submit,
  NewImageButton,
} from "./styles";
import EmptyCard from "../../assets/EmptyCard";
import routes from "../../services/service";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { addCards } from "../../cardSlice/cardSlice";
import { getElementError } from "@testing-library/react";

export default function From() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const fromRef = useRef(null);
  const [image, setImage] = useState(""),
    [loading, setLoading] = useState(false),
    [currentType, setCurrentType] = useState("Creature");

  const typeOfCard = [
    "Creature",
    "Land",
    "Enchantment",
    "Instant",
    "Sorcery",
    "Any",
  ];

  async function randomImage() {
    console.log(currentType);
    setImage(
      await routes.randomImage(
        fromRef.current.values.type === "Any" ? "" : fromRef.current.values.type
      )
    );
  }

  function DoThis() {
    let test = document.getElementById("type").value;

    console.log(test);
    // setCurrentType(fromRef.current.values.type);
  }

  return (
    <Formik
      innerRef={fromRef}
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{
        name: "",
        type: "Creature",
        cost: "",
        image: "",
        desc: "",
        power: "",
        toughness: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.cost && !values.power && !values.toughness) {
          errors.ErrorMessage = "You need to fill at least one field";
        }
        return errors;
      }}
      onSubmit={async (values) => {
        setLoading(true);

        let searchQuery = "";
        if (values.type !== "Any") searchQuery += `type=${values.type}`;
        if (values.cost) searchQuery += `+cmc=${values.cost.replace(" ", "")}`;
        if (values.desc)
          searchQuery += `+otag=${values.desc.replace(" ", "-")}`;
        if (values.power) searchQuery += `+pow=${values.power}`;
        if (values.toughness) searchQuery += `+tou=${values.toughness}`;

        const cards = await routes.search(searchQuery);
        if (cards.length === 0) {
          alert("No cards found");
        } else {
          dispatch(addCards(cards));
          navigate("/result");
          setLoading(false);
        }
      }}
    >
      {({ errors }) => (
        <Form>
          <FormContainer>
            <Grid>
              <section>
                <label htmlFor="name">Name</label>
                <Field id="name" name="name" />
              </section>
              <section>
                <label htmlFor="type">Type</label>
                <Field as="select" name="type" id="type" onChange={DoThis}>
                  {typeOfCard.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </Field>
              </section>
              <section>
                {currentType !== "Land" ? (
                  <>
                    <label htmlFor="cost">Cost</label>
                    <Field id="cost" name="cost" />
                  </>
                ) : (
                  ""
                )}
              </section>
              <section>
                <label htmlFor="image">Image</label>
                <div style={{ minHeight: "100px", minWidth: "100px" }}>
                  {image ? <PreviewImage src={image} /> : <EmptyCard />}
                </div>
              </section>
              <section>
                <NewImageButton type="button" onClick={randomImage}>
                  New Image
                </NewImageButton>
              </section>
              <section>
                <label htmlFor="desc">Description</label>
                <Field id="desc" name="desc" />
              </section>
              <section>
                {["Creature", "Any"].indexOf(currentType) ? (
                  ""
                ) : (
                  <>
                    <label htmlFor="power">Power</label>
                    <Field type="number" id="power" name="power" />
                  </>
                )}
              </section>
              <section>
                {["Creature", "Any"].indexOf(currentType) ? (
                  ""
                ) : (
                  <>
                    <label htmlFor="toughness">Toughness</label>
                    <Field type="number" id="toughness" name="toughness" />
                  </>
                )}
              </section>
              <section>
                <Reset type="reset">Clear</Reset>
              </section>
              <section>
                <Submit type="submit">Submit</Submit>
              </section>
            </Grid>
          </FormContainer>
          {errors.ErrorMessage ? <div>{errors.ErrorMessage}</div> : ""}
          <ErrorMessage name="cost" />
        </Form>
      )}
    </Formik>
  );
}
