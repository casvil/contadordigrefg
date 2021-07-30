import React from "react";
import { Formik } from "formik";

import "./counterForm.css";
import stopwatch from "../../stopwatch.svg";

export const CounterForm = ({ onFormSubmit }) => (
  <div className="App-counter-form--wrapper">
    <Formik
      initialValues={{ hours: 0, minutes: 0, seconds: 0 }}
      onSubmit={(values) => {
        const count =
          values.hours * 3600 + values.minutes * 60 + values.seconds;

        onFormSubmit(count);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className="App-counter-form" onSubmit={handleSubmit}>
          <img
            src={stopwatch}
            className="App-counter-form-stopwatch"
            alt="logo"
            height={20}
            width={20}
          />
          <div className="input-labeled">
            <input
              className="input count-input"
              type="number"
              name="hours"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.hours}
              min={0}
            />
          </div>
          <div className="input-labeled">
            <input
              className="input count-input"
              type="number"
              name="minutes"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.minutes}
              min={0}
              max={60}
            />
          </div>
          <div className="input-labeled">
            <input
              className="input count-input"
              type="number"
              name="seconds"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.seconds}
              min={0}
              max={60}
            />
          </div>
          {errors.hours && touched.minutes && errors.seconds}
          <button type="submit" className="input" disabled={!values}>
            Save
          </button>
        </form>
      )}
    </Formik>
  </div>
);
