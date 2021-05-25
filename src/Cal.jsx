import React, { useState } from "react";
import "./Cal.css";

const Cal = () => {
  const [output, setoutput] = useState("");

  const dataHandaler = (event) => {
    event.preventDefault();
    setoutput(output.concat(event.target.name));
  };

  const resetHandaler = (event) => {
    event.preventDefault();
    setoutput("");
  };
  const backspaceHandaler = (event) => {
    event.preventDefault();
    setoutput(output.slice(0, -1));
  };
  const keyHandaler = (event) => {
    setoutput(event.target.value);
  };

  const caldataHandaler = (event) => {
    event.preventDefault();
    try {
      setoutput(eval(output).toString());
    } catch (error) {
      setoutput("Error Plz enter right value");

      setTimeout(() => {
        setoutput("");
      }, 1000);
    }
  };

  return (
    <div>
      <form>
        <div className="container">
          <input
            type="text"
            placeholder="Let's Calculate"
            value={output}
            onChange={keyHandaler}
          />
          <div className="col">
            <div className="row">
              <button name="7" onClick={dataHandaler}>
                7
              </button>
              <button name="8" onClick={dataHandaler}>
                8
              </button>
              <button name="9" onClick={dataHandaler}>
                9
              </button>
              <button name="+" onClick={dataHandaler}>
                +
              </button>
            </div>
            <div className="row">
              <button name="4" onClick={dataHandaler}>
                4
              </button>
              <button name="5" onClick={dataHandaler}>
                5
              </button>
              <button name="6" onClick={dataHandaler}>
                6
              </button>
              <button name="-" onClick={dataHandaler}>
                -
              </button>
            </div>
            <div className="row">
              <button name="1" onClick={dataHandaler}>
                1
              </button>
              <button name="2" onClick={dataHandaler}>
                2
              </button>
              <button name="3" onClick={dataHandaler}>
                3
              </button>
              <button name="/" onClick={dataHandaler}>
                /
              </button>
            </div>
            <div className="row">
              <button name="0" onClick={dataHandaler}>
                0
              </button>
              <button name="." onClick={dataHandaler}>
                .
              </button>
              <button name="=" onClick={caldataHandaler}>
                =
              </button>
              <button name="*" onClick={dataHandaler}>
                *
              </button>
            </div>
            <div className="row">
              <button name="C" onClick={resetHandaler}>
                C
              </button>
              <button name="backClear" onClick={backspaceHandaler}>
                ❌
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Cal;
