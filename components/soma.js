import React, { useState } from "react";
import s from "/pages/style.module.css";

function Somar() {
    const [result, result_upd] = useState(0);
    const [operando, operando_upd] = useState(0);
    const [operador, operador_upd] = useState(0);

    const setOperador = (event) => {
        operador_upd(event.target.value);
    };

    const setOperando = (event) => {
        operando_upd(event.target.value);
    };

    const setResult = () => {
        result_upd(parseInt(operando) + parseInt(operador));
    };

    const setSoma = () => {
        setResult();
        console.log(result);
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    className={`${s.valueInt} ${s.w20}`}
                    id="operando"
                    value={operando}
                    onChange={setOperando}
                />
                <input
                    className={`${s.valueInt} ${s.w20}`}
                    id="operador"
                    value={operador}
                    onChange={setOperador}
                />
            </div>
            <div>
                <button style={{ margin: "2%" }} onClick={() => setSoma()}>
                    Somar
                </button>
                <label className={`${s.valueInt} ${s.w20}`}>{result}</label>
            </div>
        </div>
    );
}

export default Somar;
