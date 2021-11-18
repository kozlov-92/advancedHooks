import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const [otherState, setOtherState] = useState(false);
    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current++;
    });
    const toggleOtherCount = () => {
        setOtherState(!otherState);
    };

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количесва рендеров</SmallTitle>
            <Divider />
            <p>RenderCount: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleOtherCount}>
                toggleOtherCount
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
