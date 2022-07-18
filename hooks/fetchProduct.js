// /* eslint-disable react-hooks/rules-of-hooks */
// import React, { useState, useEffect, useRef } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../utils/firebase';

// export default function fetchProduct() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [todos, setTodos] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const docRef = doc(db, 'products', 'postDate');
//         console.log('docRef ==> ', docRef);

//         const docSnap = await getDoc(docRef);
//         console.log('docSnap ==> ', docSnap);

//         if (docSnap.exists()) {
//           setTodos(docSnap.data().todos);
//           // setTodos('todos' in docSnap.data() ? docSnap.data().todos : {})

//           console.log('docSnap.exists() ===> todos : ', docSnap.data().todos);
//         } else {
//           setTodos({});

//           console.log(
//             'docSnap dont exists() ===> todos : ',
//             docSnap.data().todos
//           );
//         }
//       } catch (err) {
//         setError('Failed to load todos');
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   return { loading, error, todos, setTodos };
// }
