import firebase, { firestore } from 'firebase/app';

import 'firebase/firestore';

firestore.collection('users')
.doc('SOzjyDgaBlwqZPkxKEj2')
.collection('cartItems')
.doc('Pv3d0wfeleA85SiFq9uT')
firebase.doc('/users/SOzjyDgaBlwqZPkxKEj2/cartItems/Pv3d0wfeleA85SiFq9uT')
firestore.collection('/users/SOzjyDgaBlwqZPkxKEj2/cartItems')