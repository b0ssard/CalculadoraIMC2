import React from "react";

function Form() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="inputHeight" className="form-label">
          Altura (em metros)
        </label>
        <input
          type="number"
          placeholder="Ex: 1,80"
          className="form-control"
          id="inputHeight"
          aria-describedby="inputHeight"
          name="height"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputWeight" className="form-label">
          Peso (em kilogramas)
        </label>
        <input
          type="number"
          placeholder="Ex: 80"
          className="form-control"
          id="inputWeight"
          aria-describedby="inputWeight"
          name="weight"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Calcular
      </button>
    </form>
  );
}

export default Form;
