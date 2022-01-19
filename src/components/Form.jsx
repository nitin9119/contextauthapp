import "./Form.css";

function Form({ onSubmit, children, title }) {
  return (
    <form className="myForm" onSubmit={onSubmit}>
      <h3>{title}</h3>
      {children}
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export { Form };
