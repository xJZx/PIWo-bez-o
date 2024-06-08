import { addDoc, collection, query, where, serverTimestamp, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { firestore, auth } from "./init";

export const createHotel = async (newTodo) => {

  const tempTodo = {
    ...newTodo, // {id: ..., text: ... }
    userId: auth?.currentUser.uid,
    created: serverTimestamp()
  }
  const hotelCollection = collection(firestore, "todos");
  const docRef = await addDoc(hotelCollection, tempTodo);
  console.log("Document added:", docRef.id);
}

export const readHotels = async () => {
  const hotels = [];

  const hotelCollection = collection(firestore, "todos");
  const user = auth?.currentUser;

  console.log({ user })
  if (!user) {
    return hotels;
  }

  const q = query(hotelCollection, where("userId", "==", user.uid));
  const results = await getDocs(q);

  results.forEach(doc => {
    // todos.push(doc.data()) // pobiera sam obiekt
    hotels.push({ id: doc.id, ...doc.data() }); // pobiera obiekt i jego Firestore'owe ID
  })

  return hotels;
}


// UWAGA:
// jako ID można przyjąć pole, jakie się samemu nada - patrz linijka 7
// albo ID documentu, który generuje Firestore
export const updateHotel = async (hotelId, updatedHotel) => {
  // UWAGA: jeżeli sp©óbujesz zmienić obiekt nienależący do aktualnego użytkownika
  // i masz reguły na Firestore, to Ci wyskoczy error.
  const hotelDocRef = doc(firestore, "hotels", hotelId);
  try {
    await updateDoc(hotelDocRef, updatedHotel);
    console.log("Hotel updated:", hotelId);
  } catch (error) {
    console.error("Error updating hotel:", error);
  }
}


export const deleteHotel = async (hotelId) => {
  // tak samo jak updateTodo
  const hotelDocRef = doc(firestore, "hotels", hotelId);
  try {
    await deleteDoc(hotelDocRef);
    console.log("Hotel deleted:", hotelId);
  } catch (error) {
    console.error("Error deleting hotel:", error);
  }
}