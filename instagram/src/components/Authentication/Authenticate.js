import React from 'react';
import LoginPage from './Login/Login';
import PostsPage from '../PostContainer/PostsPage';

const Authenticate= Page => 
    class extends React.Component {
        constructor() {
            super();
            this.state = {loggedIn: false, userIn: ""}
        }

        componentDidMount () {
            const username = localStorage.getItem('username');
            const password = localStorage.getItem('password');
            
            if(username && password && this.state.loggedIn === false) {
                this.setState({loggedIn: true, userIn: username});
            }
        }
        componentWillUnmount () {
            localStorage.removeItem('username')
            localStorage.removeItem('password')
        }

        render() {

            return (
                //is user logged  ? yes then produce the normal App page content.  no? make them login with the loginPage
                this.state.loggedIn ? 
                
                <PostsPage userIn={this.state.userIn} logOut = {this.state.handleLogOut}/>
                :
                <LoginPage />
                
            )
        }
}





export default Authenticate; 