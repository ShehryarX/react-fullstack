import React from 'react';

import { Link } from 'react-router-dom';

const Posts = () => {
    return (
        <div>   
            <Link to='/posts/1'> posts 1</Link><br/>
            <Link to='/posts/2'>posts 2</Link><br/>
            <Link to='/posts/3'>posts 32</Link><br/>
        </div>  
    );
}

export default Posts; 