import { getBillsByEmail } from "../axios/bills";
import { useState } from "react";

const BillFilters = ({ setBills }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bills = await getBillsByEmail(email);
    setBills(bills);
  };

  return (
    <form className="flex gap-4">
      <input
        className="rounded-lg text-cyan-950"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="bg-orange-700 p-2 rounded-lg"
        onClick={handleSubmit}
      >
        Consultar
      </button>
    </form>
  );
};

export default BillFilters;

// "ferperezvl@gmail.com"
