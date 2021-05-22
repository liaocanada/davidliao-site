import React from 'react';

const TextBox = ({ title, contents, button }) => {
    return (
        <div id="home-textbox" className="col-sm-6">
        <table className="table">
          <tbody>
            <tr><th><h3>{title.toUpperCase()}</h3></th></tr>
            <tr><td>{contents}</td></tr>
            <tr><td id="button-cell">{button}</td></tr>
          </tbody>
        </table>
      </div>
    );
}

export default TextBox;
