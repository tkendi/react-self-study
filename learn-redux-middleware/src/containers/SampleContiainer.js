import React from 'react';
import {connect} from 'react-redux';
import Sample from '../components/Sample';
import {getPost, getUsers} from '../moduels/sample';

const {useEffect} = React;

const SampleContainer = ({
    getPost,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers
}) => {
    //componenetDidMount
    useEffect(() => {
        //useEffect에 파라미터로 넣는 함수는 async로 할 수 없다
        //그 내부에서 async 함수를 선언하고 호출한다
        const fn = async () => {
            try {
                await getPost(1);
                await getUsers(1);
            } catch(e) {
                console.log(e);     //에러 조회
            }
        };
        fn();
    }, [getPost, getUsers]);
    return (    
        <Sample
            post = {post}
            users = {users}
            loadingPost = {loadingPost}
            loadingUsers = {loadingUsers}
        />
    );
};

export default connect (
    ({sample, loading}) => ({
        post: sample.post,
        users: sample.users,
        loadingPost: loading.GET_POST,
        loadingUsers: loading.GET_USERS
    }),
    {
        getPost,
        getUsers
    }
)(SampleContainer);
