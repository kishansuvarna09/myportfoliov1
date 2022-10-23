import React from "react";
import { BiCheck } from "react-icons/bi";

type List = {
  item: string;
};

interface Props {
  list: List[];
}

const ServiceList = ({ list }: Props) => {
  return (
    <ul className="service__list">
      {list.map((value) => (
        <li>
          <BiCheck className="service__list-icon" />
          <p>{value.item}</p>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
