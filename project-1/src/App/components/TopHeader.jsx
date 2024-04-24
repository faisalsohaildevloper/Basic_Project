import React from "react";

const TopHeader = ({ value, themeHandler }) => {
  return (
    <div className="d-flex justify-content-between  align-items-center py-2 ">
      <h5>first div</h5>
      <div className={value === "dark" ? 'dark' : ''} >
    
        <select value={value} onChange={themeHandler}
          className="form-select form-select-sm" >
          
          <option value="light">light ☀️ </option> 
          <option value="dark">dark 🌙</option>
        </select>
      </div>
    </div>
  );
};

export default TopHeader;
