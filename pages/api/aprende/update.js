import { db } from "lib/firebase";

const updateCardAprende = async (id, data) => {
  try {
    return await db.collection("aprende").doc(id).set(data);
  } catch (error) {
    console.log(error);
  }
};

export default updateCardAprende;
