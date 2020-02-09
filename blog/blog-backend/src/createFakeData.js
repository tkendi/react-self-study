import Post from './models/post';

export default function createFakeData() {
    //0, ,1, ..39로 이루어진 배여을 생성한 후 포스트 데이터로 변환
    const posts = [...Array(40).keys()].map(i => ({
        title: `포스트#${i}`,
        //https://www.lipsum.om에서 복사한 200자 이상의 텍스트
        body: 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla elit, scelerisque id finibus at, sagittis sit amet augue. Donec egestas vel metus at fermentum. Maecenas viverra tortor non diam fringilla, vitae accumsan diam vehicula. Maecenas at maximus nisl. Phasellus iaculis accumsan mi, ut volutpat enim feugiat vitae. Vestibulum fringilla odio nec leo sollicitudin, ac interdum tellus iaculis. Ut lacus quam, aliquet nec ligula sagittis, iaculis fermentum quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam eleifend ex eu porttitor cursus. Nam ultricies magna in tortor aliquam, et viverra massa bibendum. Maecenas maximus, justo sed aliquet porttitor, eros risus placerat ipsum, nec tincidunt est magna ac ex',
            tags:['가짜', '데이터'],
    }));
    Post.insertMany(posts, (err, docs) => {
        console.log(docs);
    })
}