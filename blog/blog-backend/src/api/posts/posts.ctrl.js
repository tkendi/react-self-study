let postId = 1; //id의 값 초기화

//posts 배열 초기화
const posts = [
    {
        id: 1,
        title: '제목',
        body: '내용',
    },
];

//포스터 작성
exports.write = ctx => {
    //REST API의 Request Body는 ctx.request.body에서 조회 할 수 있다
    const {title, body} = ctx.request.body;
    postId += 1;    //기존 id를 1씩 더한다
    const post = {id: postId, title, body};
    posts.push(post);
    ctx.body = post;
};

//포스터 목록 조회
exports.list = ctx => {
    ctx.body = posts;
};


//특정 포스터 조회
exports.read = ctx => {
    const {id} = ctx.params;
    //주어진 id 값으로 포스트를 찾는다
    const post = posts.find(p => p.id.toString() === id);
    //포스트가 없을 때
    if (!post) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다'
        };
        return;
    }
    ctx.body = post;
};

//특정 포스터 제거
exports.remove = ctx => {
    const {id} = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if(index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스터는 존재하지 않습니다'
        };
        return;
    }
    //index번째 아이템 제거 한다.
    posts.splice(index, 1);
    ctx.status = 204;   //No content
};

//포스터 수정
exports.replace = ctx => {
    const {id} = ctx.params;
    //해당 id를 가진 post가 몇 번째인지 확인합니다
    const index = posts.findIndex(p => p.id.toString() === id);
    //포스트가 없으면 오류를 반환
    if(index == -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다'
        };
        return;
    }
    //id를 제외하고 기존 정보를 전부 삭제하고, 객체를 새로 만든다
    posts[index] = {
        id,
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};

//포스트 수정
exports.update = ctx => {
    const {id} = ctx.params;
    //해당 id를 가진 post가 몇번째인지 확인
    const index = posts.findIndex(p => p.id.toString() === id);
    //포스트 id가 없으면 오류를 반환
    if(index == -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다'
        };
        return;
    }
    //기존 정보를 덮어 쓴다
    posts[index] = {
        ...posts[index],
        ...ctx.request.body,
    };
    ctx.body = posts[index];
}