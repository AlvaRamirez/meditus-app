import { db } from "lib/firebase";
const createCardAprende= async (data) => {

   try { return await db
    .collection("aprende")
    .doc()
    .set(data)
       
   } catch (error) {
       console.log(error)
   }

  }
  export default createCardAprende
  