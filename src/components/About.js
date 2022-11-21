import React from "react";

function About(props) {
    let style = null;
    if (props.mode != null) {
        style = props.mode.style;
    }
    return (
        <div className="accordion container my-2" id="accordionExample">
            <div className="accordion-item" style={style}>
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        About TextUtils
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        This <strong>TextUtils</strong> website can be used to manipulate any text and can perform many operations which includes converting into uppercase, converting to lowercase, converting to camelcase, removing extra spaces, reverse whole text, copy text.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;