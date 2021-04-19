import React from "react";
import { useDispatch } from "react-redux";
import { orderBy } from "../../redux/actions";

const Order = () => {
  const dispatch = useDispatch();
  // ordenamiento alfabetico
  const onOrderChange = (e) => {
    dispatch(orderBy(e.target.value));
  };
  return (
    <>
      <select onChange={onOrderChange}>
        <option default>Order By</option>
        <option value="az">A - Z</option>
        <option value="za">Z - A</option>
        <option value="lowest">Rating lowest</option>
        <option value="highest">Rating highest</option>
      </select>
    </>
  );
};

export default Order;
