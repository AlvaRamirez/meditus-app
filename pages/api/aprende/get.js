import { db } from "lib/firebase";
export default async () => {
   return db.collection("aprende")
    .get()
    .then(function(querySnapshot) {
        let data=[];
        
        querySnapshot.forEach(function(doc) {
            data=[...data,doc.data()]
        });
       
        return data

    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
     
    });
  }
  