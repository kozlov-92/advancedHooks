import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammablActionsExample = () => {
    const labelRef = useRef();
    const handleClick = () => {
        console.log(labelRef.current);
        labelRef.current.focus();
    };
    const handleClickWidth = () => {
        labelRef.current.style.width = "100px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
                <Divider />
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    ref={labelRef}
                    className="form-control"
                    type="email"
                    id="email"
                />
                <button className="btn btn-primary " onClick={handleClick}>
                    Фокус label
                </button>
                <button
                    className="btn btn-secondary "
                    onClick={handleClickWidth}
                >
                    Изменить ширину input
                </button>
            </SmallTitle>
        </CardWrapper>
    );
};

export default ProgrammablActionsExample;
