import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (
        <button className="btn btn-primary mx-2" onClick={onLogOut}>
            LogOut
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};
const MemoiziedLogOutButton = React.memo(LogOutButton);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.getItem("auth");
    }, [props]);

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                Initial render
            </button>
            <MemoiziedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
