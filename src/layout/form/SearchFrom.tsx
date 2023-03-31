import React, { useState } from "react";
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
import { errorStyle } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import {
  addCards,
  setAll,
  resetSearch,
} from "../../redux/cardSlice/searchSlice";

type Props = {
  setLoading: React.Dispatch<React.SetStateAction<any>>;
};

export default function From(props: Props) {
  const setLoading = props.setLoading;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const search = useAppSelector((state: RootState) => state.searchStore);
  const [image, setImage] = useState(search.image);

  const typeOfCard = [
    "Creature",
    "Land",
    "Enchantment",
    "Instant",
    "Sorcery",
    "Any",
  ];

  async function randomImage(values: any) {
    setImage(await routes.randomImage(values.type));
  }

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{ ...search }}
      validate={(values) => {
        const errors = { cost: "", power: "", toughness: "", req: "" };

        if (
          values.type !== "Land" &&
          !values.cost &&
          !values.power &&
          !values.toughness
        ) {
          errors.cost =
            errors.power =
            errors.toughness =
              "Please fill in one of the required fields";
          return errors;
        }
      }}
      onSubmit={async (values) => {
        setLoading(true);
        const cards = await routes.search(values);
        if (cards.length === 0) {
          alert("No cards found");
          setLoading(false);
        } else {
          dispatch(addCards(cards));
          dispatch(setAll(values));
          navigate("/result");
          setLoading(false);
        }
      }}
      onReset={async (values) => {
        setImage("");
        dispatch(resetSearch());
      }}
    >
      {(formProps) => (
        <Form>
          <FormContainer>
            <Grid>
              <section>
                <label htmlFor="name">Name</label>
                <Field name="name" />
              </section>
              <section>
                <label htmlFor="type">Type</label>
                <Field as="select" name="type">
                  {typeOfCard.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </Field>
              </section>
              <section>
                {formProps.values.type !== "Land" ? (
                  <>
                    <label htmlFor="cost">Cost</label>
                    <Field
                      style={errorStyle(formProps.errors, "cost")}
                      name="cost"
                    />
                  </>
                ) : (
                  ""
                )}
              </section>
              <section>
                <label htmlFor="image">Image</label>
                {image ? (
                  <PreviewImage
                    src={image}
                    onLoad={() => formProps.setFieldValue("image", image)}
                  />
                ) : (
                  <EmptyCard />
                )}
              </section>
              <section>
                <NewImageButton
                  type="button"
                  onClick={() => randomImage(formProps.values)}
                >
                  New Image
                </NewImageButton>
              </section>
              <section>
                <label htmlFor="desc">Description</label>
                <Field name="desc" />
              </section>
              <section>
                {["Creature", "Any"].includes(formProps.values.type) ? (
                  <>
                    <label htmlFor="power">Power</label>
                    <Field
                      style={errorStyle(formProps.errors, "power")}
                      type="number"
                      name="power"
                      disabled={
                        ["Any", "Creature"].includes(formProps.values.type)
                          ? false
                          : true
                      }
                    />
                  </>
                ) : (
                  ""
                )}
              </section>
              <section>
                {["Any", "Creature"].includes(formProps.values.type) ? (
                  <>
                    <label htmlFor="toughness">Toughness</label>
                    <Field
                      style={errorStyle(formProps.errors, "toughness")}
                      type="number"
                      name="toughness"
                      disabled={
                        ["Any", "Creature"].includes(formProps.values.type)
                          ? false
                          : true
                      }
                    />
                  </>
                ) : (
                  ""
                )}
              </section>
              <section>
                <Reset type="reset">Clear</Reset>
              </section>
              <section>
                <ErrorMessage name="cost" />
                <Submit type="submit">Submit</Submit>
              </section>
            </Grid>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
}
