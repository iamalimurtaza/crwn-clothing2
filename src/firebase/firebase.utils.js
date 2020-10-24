import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCsJQLKqbx7cO0073A_mxtsI_Md_mkAzd4',
	authDomain: 'crwn-clothing2-project.firebaseapp.com',
	databaseURL: 'https://crwn-clothing2-project.firebaseio.com',
	projectId: 'crwn-clothing2-project',
	storageBucket: 'crwn-clothing2-project.appspot.com',
	messagingSenderId: '486731446212',
	appId: '1:486731446212:web:160e6e52acac6c9a7cd691',
	measurementId: 'G-S0PJRHWNZ0',
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = firebase.firestore.FieldValue.serverTimestamp();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log(`Error creating user: ${error}`);
		}
	}
	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
