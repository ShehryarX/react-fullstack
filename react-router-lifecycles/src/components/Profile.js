import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import Card from '../hoc/Card';
import Auth from '../hoc/Auth';

const Profile = (props) => {
    const redirect = () => {
        // props.history.push('/');
    }

    return (
        <Auth>
            <Card>   
                <Link to={{
                    pathname: `${props.match.url}/posts`
                }}>Take me to /profile/posts</Link>
            </Card>
        </Auth>  
    );
}

export default Profile;