import { db } from "lib/firebase";
const deleteCardExperimenta= async (id) => {

   try { return await db
    .collection("cards")
    .doc(id)
    .delete()
       
   } catch (error) {
       console.log(error)
   }

  }
  export default deleteCardExperimenta