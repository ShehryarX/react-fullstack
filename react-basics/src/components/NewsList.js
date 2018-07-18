import React from 'react';
import NewsListItem from './NewsListItem';

const NewsList = (props) => {

    const items = props.news.map((item) => {
        return (
            <NewsListItem key={item.id} item={item} />
        );
    });

    return (
        <div>{items}</div>  
    );
}

export default NewsList;    