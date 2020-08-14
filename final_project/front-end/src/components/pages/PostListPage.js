import React from 'react'
import HeaderContainer from '../common/HeaderContainer'
import PostListContainer from '../../containers/posts/PostListContainer'

const PostListPage = () => {
    return (
        <React.Fragment>
            <HeaderContainer />
            <PostListContainer />
        </React.Fragment>
    )
}

export default PostListPage