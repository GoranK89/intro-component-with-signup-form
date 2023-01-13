import useInput from "../../hooks/use-input";

import CtaBanner from "../CtaBanner";
import InputErrorMsg from "./InputErrorMsg";

const Form = () => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameError,
    onChangeHandler: nameInputChangeHandler,
    onBlurHandler: nameInputBlurHandler,
    reset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (nameIsValid) formIsValid = true;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;
    console.log(nameValue);
    reset();
  };

  return (
    <div className="form__container">
      <CtaBanner />
      <form className="form" onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="First Name"
          value={nameValue}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameError && <InputErrorMsg errorText="Check name" />}
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email Adress" />
        <input type="password" placeholder="Password" />
        <button disabled={!formIsValid}>Claim your free trial</button>
        <p className="form-terms">
          <span className="form-terms--text">
            By clicking this button you are agreeing to our
          </span>
          <a href="#" className="form-terms--link">
            Terms and Services
          </a>
        </p>
      </form>
    </div>
  );
};

export default Form;
