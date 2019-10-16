import React from 'react';
import styled from 'styled-components';

const NewsItemsBlock = styled.div `
    display: flex;
    .thumbnail {
        margin-right: 1rem;
        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }

    .conetents {
        h2 {
            margin: 0;
            a { 
                color: black;
            }
        }

        p{
            margin: 0;
            line-height: 1.5;
            white-space: normal;
        }
    }

    & + & {
        margin-top: 3rem;
    }
`;

const NewsItem = ({article}) => {
    const { title, description, url, urlTolmage } = article;
    return (
        <NewsItemsBlock>
            {urlTolmage && (
                <div className = "thumbnail">
                    <a href = {url} target = "_blank" rel = "noopener noreferrer">
                        <img src = {urlTolmage} alt = "thumbnail" />
                    </a>
                </div>
            )}
            <div className = "contents">
                <h2>
                    <a href = {url} target = "_blank" rel = "noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemsBlock>
    );
};

export default NewsItem;
