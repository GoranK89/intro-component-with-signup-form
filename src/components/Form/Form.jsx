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
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: surnameValue,
    isValid: surnameIsValid,
    hasError: surnameError,
    onChangeHandler: surnameInputChangeHandler,
    onBlurHandler: surnameInputBlurHandler,
    reset: surnameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailError,
    onChangeHandler: emailInputChangeHandler,
    onBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordError,
    onChangeHandler: passwordInputChangeHandler,
    onBlurHandler: passwordInputBlurHandler,
    reset: passwordReset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (nameIsValid && surnameIsValid && emailIsValid && passwordIsValid)
    formIsValid = true;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;
    console.log(
      `${nameValue}\n${surnameValue}\n${emailValue}\n${passwordValue}`
    );
    nameReset();
    surnameReset();
    emailReset();
    passwordReset();
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
        <input
          type="text"
          placeholder="Last Name"
          value={surnameValue}
          onChange={surnameInputChangeHandler}
          onBlur={surnameInputBlurHandler}
        />
        {surnameError && <InputErrorMsg errorText="Check surname" />}
        <input
          type="text"
          placeholder="Email Adress"
          value={emailValue}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailError && <InputErrorMsg errorText="Check email" />}
        <input
          type="password"
          placeholder="Password"
          value={passwordValue}
          onChange={passwordInputChangeHandler}
          onBlur={passwordInputBlurHandler}
        />
        {passwordError && <InputErrorMsg errorText="Check password" />}
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
