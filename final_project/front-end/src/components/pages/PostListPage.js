import React from 'react'
import HeaderContainer from '../common/HeaderContainer'
import PostList from '../posts/PostList'

const PostListPage = () => {
    return (
        <React.Fragment>
            <HeaderContainer />
            <PostList />
        </React.Fragment>
    )
}

export default PostListPage