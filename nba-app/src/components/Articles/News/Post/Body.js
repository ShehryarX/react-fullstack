import React from 'react';

import styles from '../../articles.css';

const Body = (props) => {
  const { article } = props;
  
  return (
    <div className={styles.articleBody}>
      <h1>{article.title}</h1>
      <div 
        className={styles.articleImage}
        style={{
          background: `url('/images/articles/${article.image}')`
        }}
      >
      </div>
      <div className={styles.articleText}>
        {article.body}
      </div>
    </div>
  )
}

export default Body;