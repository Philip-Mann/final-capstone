// import { useState } from 'react';
// import FacebookLogin from 'react-facebook-login';

// const Facebook = () => {
//     const [data, setData] = useState({});
// 	const [login, setLogin] = useState(false);
//     const [picture, setPicture] = useState('');


//     const responseFacebook = response => {
//         setData(response);
//         setPicture(response.picture.data.url);
//         if (response.accessToken) {
//             setLogin(true);
//         } else {
//             setLogin(false);
//         }
//     }

//     return (
//         <>
//             <FacebookLogin 
//                 appId="565627141232325"
//                 autoLoad={true}
//                 fields="name, email, picture"
//                 scope="public_profile, user_friends, user_actions.books"
//                 callback={responseFacebook}
//             />
//             {!login && <p>no</p>}
//             {login && <p>yes</p>}
//             {login && (
//                 <>
//                 {data && data.name}
//                 {data && data.email}
//                 <img src={picture} alt="test" />
//                 </>
//             )}
//         </>
//     )
// }

// export default Facebook;