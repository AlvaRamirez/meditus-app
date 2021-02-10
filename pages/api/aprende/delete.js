import { db } from "lib/firebase";
const deleteCardAprende= async (id) => {

   try { return await db
    .collection("aprende")
    .doc(id)
    .delete()
       
   } catch (error) {
       console.log(error)
   }

  }
  export default deleteCardAprende