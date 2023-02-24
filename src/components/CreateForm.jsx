import { useState } from "react";

const CreateForm = ({ dispatch }) => {
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    setUrl(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "ADD", data: url });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={url} onChange={handleChange} />
        <button>Crear URL</button>
      </form>
    </>
  );
};

export default CreateForm;
