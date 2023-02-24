import { useState } from "react";

const CreateForm = ({ dispatch }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setUrl(value);
    setError(false); // Reset the error state when the input is changed
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (url.trim() === "") {
      setError(true);
      return;
    }

    dispatch({ type: "ADD", data: url });
    setUrl(""); // Clear the input field after submission
  };

  return (
    <>
      <form className="main__form" onSubmit={handleSubmit}>
        <input
          className="main__input"
          type="text"
          value={url}
          onChange={handleChange}
          placeholder="Ingrese su URL"
        />
        <button className="main__button">Crear URL</button>
      </form>
      {error && (
        <p className="main__input-error">Por favor, ingrese una URL válida</p>
      )}
    </>
  );
};

export default CreateForm;
