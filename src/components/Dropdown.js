import React, { useState } from "react";
import arrowDown from "../assets/arrow-down.svg";
import "../style/Dropdown.scss";

function Dropdown({ title, children, className = "", isOpen, onToggle }) {
  const [localOpen, setLocalOpen] = useState(false);
  const controlled = typeof isOpen === "boolean";
  const open = controlled ? isOpen : localOpen;

  const toggleDropdown = () => {
    if (controlled) {
      onToggle?.();
    } else {
      setLocalOpen((prev) => !prev);
    }
  };

  return (
    <div className={`dropdown ${className}`}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>{title}</span>
        <img
          src={arrowDown}
          alt="Flèche"
          className={`arrow ${open ? "open" : ""}`}
        />
      </div>

      {open && <div className="dropdown-content">{children}</div>}
    </div>
  );
}

export default Dropdown;
