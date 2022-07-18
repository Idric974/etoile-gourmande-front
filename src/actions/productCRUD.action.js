import { collection, getDocs } from 'firebase/firestore';
import db from '../../utils/firebaseDada';

export const READ_ALL_PRODUCT = 'READ_ALL_PRODUCT';

let data;

export const readProducts = () => {
  return async (dispatch) => {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));

      let product = [];

      querySnapshot.forEach((doc) => {
        // console.log('doc.id ===> ', doc.id);
        //console.log('doc.data() ===>', doc.data());

        product.push(
          (data = {
            description: doc.data().description,
            imageUrl: doc.data().imageUrl,
            postDate: doc.data().postDate,
            price: doc.data().price,
            productName: doc.data().productName,
            productId: doc.id,
          })
        );

        // console.log('product :', product);

        dispatch({
          type: READ_ALL_PRODUCT,
          payload: product,
        });
      });
    } catch (err) {
      return console.log(
        "%c ❌ ERREUR : post.action ==> READ_ALL_PRODUCT ==> création d'un produit :",
        'color: red',
        err
      );
    }
  };
};
