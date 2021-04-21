import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { orderBy, orderByDesc } from "../../redux/actions";

const Order = () => {
  const dispatch = useDispatch();
  // ordenamiento alfabetico
  const onOrderChange = (e) => {
    if (e.target.value === "az" || e.target.value === "highest") {
      dispatch(orderBy(e.target.value));
    } else {
      dispatch(orderByDesc(e.target.value));
    }
  };

  return (
    <div className="select">
      <select name="slct" id="slct" onChange={onOrderChange}>
        <option defaultValue>Order By</option>
        <option value="az">A - Z</option>
        <option value="za">Z - A</option>
        <option value="lowest">Rating lowest</option>
        <option value="highest">Rating highest</option>
      </select>
    </div>
  );
};

export default Order;
