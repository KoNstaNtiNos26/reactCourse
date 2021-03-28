import React from "react";
import Comment from "./comment";

const Container = ({texts}) => {
    return (<>{texts.map(text => <Comment comment = {text} />)}
            </>);
}

export default Container;