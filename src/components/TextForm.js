import React, { useState } from "react";

function TextForm(props) {
    let btnColor = "primary";
    let style = null;
    if (props.mode !== null) {
        btnColor = props.mode.mode;
        style = props.mode.style;
    }
    const [text, setText] = useState("Enter your text here...");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCmClick = () => {
        let newText = text.toLowerCase();
        newText = newText.trim();

        for (let index = 1; index < newText.length; index++) {
            if (newText.charAt(index) !== ' ' && newText.charAt(index - 1) === ' ') {
                newText = newText.substring(0, index) + newText.charAt(index).toUpperCase() + newText.substring(index + 1, newText.length);
            }
        }
        setText(newText);
    }

    const handleReverseClick = () => {
        let newText = "";
        for (let index = 0; index < text.length; index++) {
            newText = text.charAt(index) + newText;
        }
        setText(newText);
    }

    const handleExtraSpaceClick = () => {
        let newText = text.replace(/ +/g, " ");
        newText = newText.trim();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("copied to clipboard", "success");
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div className="container my-3">
            <div className="mb-3" style={style}>
                <label htmlFor="myTextBox" className="form-label"><h2>{props.labelHeading}</h2></label>
                <textarea className="form-control" style={style} value={text} id="myTextBox" rows="8" onChange={handleChange}></textarea>
            </div>
            <button type="button" disabled={text.length === 0} className={`btn btn-${btnColor} mx-1 my-1`} onClick={handleUpClick}>UpperCase</button>
            <button type="button" disabled={text.length === 0} className={`btn btn-${btnColor} mx-1 my-1`} onClick={handleLoClick}>LowerCase</button>
            <button type="button" disabled={text.length === 0} className={`btn btn-${btnColor} mx-1 my-1`} onClick={handleCmClick}>camelCase</button>
            <button type="button" disabled={text.length === 0} className={`btn btn-${btnColor} mx-1 my-1`} onClick={handleReverseClick}>Reverse</button>
            <button type="button" disabled={text.length === 0} className={`btn btn-${btnColor} mx-1 my-1`} onClick={handleExtraSpaceClick}>Remove Extra Spaces</button>
            <button type="button" disabled={text.length === 0} className={`btn btn-${btnColor} mx-1 my-1`} onClick={handleCopyClick}>Copy text</button>
            <button type="button" disabled={text.length === 0} className={`btn btn-${btnColor} mx-1 my-1`} onClick={handleClearClick}>Clear</button>
        </div>
    );
}

export default TextForm;