import React from "react";
import BillCard from "./BillCard";
import { getAllBills } from "../axios/bills";
import BillFilters from "./BillFilters";
import { useState } from "react";

const data = await getAllBills();

const Bills = () => {
  const [bills, setBills] = useState(data);
  //MANEJAR EL ERROR BIEN, NO SEAS CULIA
  return (
    <>
      <h1 className="text-indigo-100">Gastos</h1>

      <BillFilters setBills={setBills} />
      {bills.length === undefined ? (
        <div className="p-4 flex text-indigo-100 gap-4 items-center">
          {data?.map((bill) => (
            <BillCard key={bill._id} bill={bill} />
          ))}
        </div>
      ) : (
        <div className="p-4 flex text-indigo-100 gap-4 items-center">
          {bills?.map((bill) => (
            <BillCard key={bill._id} bill={bill} />
          ))}
        </div>
      )}
    </>
  );
};

export default Bills;
