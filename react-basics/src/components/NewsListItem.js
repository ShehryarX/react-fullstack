import React from 'react';
import classes from '../css/styles.css';

const NewsListItem = ({item}) => {
    return (
        <div className={classes.newsItem}>
            <h3>{item.title}</h3>
            <div>{item.feed}</div>
        </div>
    );
}

export default NewsListItem;