import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Header = () => {
  const [age, setAge] = useState("");
  const [bgColor, setBgColor] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      setBgColor("active-header");
    } else {
      setBgColor("");
    }
  });
  return (
    <header className={`header ${bgColor}`}>
      <section className="head">
        <div className="header d-flex justify-content-between align-items-center ">
          <div className="logo d-flex align-items-center">
            <Link to="/">
              <img width={160} src="/images/PickBazar.webp" alt="" />
            </Link>
            <div className="select ms-4">
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Age</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="search d-none">
            <input
              className="form-control"
              type="text"
              placeholder="Search your products from here"
            />
            <i className="fas fa-search"></i>
          </div>
          <nav>
            <ul className="d-flex list-unstyled align-items-center m-0">
              <li>
                <Link to="/shops">Shops</Link>
              </li>
              <li>
                <Link to="/offers">Offers</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <button className="btnsell">Become a Seller</button>
              <button className="btnjoin">Join</button>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
