const Form = () => {
  return (
    <form className="form">
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email Adress" />
      <input type="password" placeholder="Password" />
      <button>Claim your free trial</button>
      <p className="form-terms">
        <span className="form-terms--text">
          By clicking this button you are agreeing to our
        </span>
        <a href="#" className="form-terms--link">
          Terms and Services
        </a>
      </p>
    </form>
  );
};

export default Form;
