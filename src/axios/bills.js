import axios from "axios";

export const getAllBills = async () => {
  try {
    const res = await axios.get("http://localhost:8080/bills/get-bills");
    const data = await res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getBillsByEmail = async (email) => {
  try {
    const res = await axios.get(
      `http://localhost:8080/bills/get-bill-by-email/${email}`
    );
    const data = await res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
