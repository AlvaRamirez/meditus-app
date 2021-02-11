import { db } from "lib/firebase";

const updateCardExperimenta = async (id, data) => {
  try {
    return await db.collection("cards").doc(id).set(data);
  } catch (error) {
    console.log(error);
  }
};
export default updateCardExperimenta;
