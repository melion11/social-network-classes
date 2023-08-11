import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import {StateType} from "../../redux/redux-store";


type LoginProps = {

}

class Login extends React.Component<any, LoginProps> {
    handleSubmit(values: any){

    };

     render() {
         return (
             <div>
                 <LoginForm onSubmit={this.handleSubmit} />
             </div>
         );
     }


};

const mapStateToProps = (state: StateType) => ({

});



export default connect(mapStateToProps, {})(Login);




// import React from 'react';
// import { connect } from 'react-redux';
// import LoginForm from './LoginForm';
// import {StateType} from "../../redux/redux-store";
// import {login, LoginRequest} from "../../redux/auth-Reducer";
//
// interface LoginProps {
//     userId: number | null;
//     error: string | null;
//     login: (requestData: LoginRequest) => void;
// }
//
// const Login: React.FC<LoginProps> = ({ userId, error, login }) => {
//     const handleSubmit = (values: LoginRequest) => {
//         const { email, password, rememberMe } = values;
//         login({ email, password, rememberMe });
//     };
//
//     if (userId) {
//         return <div>You are logged in as user {userId}</div>;
//     }
//
//     return (
//         <div>
//             {error && <div>{error}</div>}
//             <LoginForm onSubmit={handleSubmit} />
//         </div>
//     );
// };
//
// const mapStateToProps = (state: StateType) => ({
//     userId: state.auth.id,
//     error: state.auth.error
// });
//
//
//
// export default connect(mapStateToProps, {login})(Login);