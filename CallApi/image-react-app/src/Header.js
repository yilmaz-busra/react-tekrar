import React, { useState } from "react";

function Header({ search }) {
  const [value, setValue] = useState("");
  const handleSubmitForm = (event) => {
    event.preventDefault();
    search(value);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="headerdiv">
      <form className="form-css" onSubmit={handleSubmitForm}>
        <p>Aradığınız Görseli Girin</p>
        <input value={value} onChange={handleChange} />
      </form>
    </div>
  );
}

export default Header;
