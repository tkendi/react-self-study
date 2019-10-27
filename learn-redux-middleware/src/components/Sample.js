import React from 'react';

<<<<<<< HEAD
const Sample = ({ loadingPost, loadingUsers, post, users }) => {
=======
const Sample = ({loadingPost, loadingUsers, post, usrs}) => {
>>>>>>> 3dd7a1be6e4285c5b174b04dff6aadd9803d322c
    return (
        <div>
            <section>
                <h1>포스트</h1>
                {loadingPost && '로딩 중...'}
                {!loadingPost && post && (
                    <div>
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                    </div>
                )}
            </section>
            <hr />
            <section>
                <h1>사용자 목록</h1>
                {loadingUsers && '로딩 중...'}
<<<<<<< HEAD
                {!loadingUsers && users && (
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>
=======
                {loadingUsers && usrs && (
                    <ul>
                        {loadingUsers.map(user => (
                            <li key = {user.id}>
>>>>>>> 3dd7a1be6e4285c5b174b04dff6aadd9803d322c
                                {user.username} ({user.email})
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

<<<<<<< HEAD
export default Sample;
=======
export default Sample;
>>>>>>> 3dd7a1be6e4285c5b174b04dff6aadd9803d322c
