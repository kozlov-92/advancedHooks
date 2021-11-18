import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const [otherState, setOtherState] = useState("false");
    const prevState = useRef("");
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    const toggleOtherCount = () => {
        setOtherState(otherState === "false" ? "true" : "false");
    };
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>Prev State: {prevState.current}</p>
            <p>Current State: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherCount}>
                toggleOtherCount
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
