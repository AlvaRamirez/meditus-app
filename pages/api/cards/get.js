import { db } from "lib/firebase";
const getCards = async () => {
  return db
    .collection("cards")
    .get()
    .then(function (querySnapshot) {
      let data = [];

      querySnapshot.forEach(function (doc) {
        data = [...data, { ...doc.data(), id: doc.id }];
      });

      return data;
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
};

const getCard = async (id) => {
  return db.collection("cards").doc(id).get().then(function(querySnapshot){
    return querySnapshot.data();
  }).catch(function(error){
      console.log('error in getCard', error);
  });
};

export { getCard, getCards };