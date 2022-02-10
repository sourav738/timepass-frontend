import React from "react";
import EnhancedComponent from '../HigherOrderComponent/index'
import HigherOrderComponentA from '../HigherOrderComponentA'
const TestHigherOrder = () => {
    return (
        <>
            <EnhancedComponent name="code testing" />
            <HigherOrderComponentA name="code improve" />
        </>
    )
}

// Passed the originalcomponent +
export default TestHigherOrder;