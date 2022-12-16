// images
import blogImg1 from "../images/blog/img-1.jpg";
import blogImg2 from "../images/blog/img-2.jpg";
import blogImg3 from "../images/blog/img-3.jpg";

import blogSingleImg1 from "../images/blog/img-4.jpg";
import blogSingleImg2 from "../images/blog/img-5.jpg";
import blogSingleImg3 from "../images/blog/img-6.jpg";



const blogs = [
    {
        id: '1',
        title: 'Wedding Bride Hair Style',
        screens: blogImg1,
        description: 'Consectetur adipiscing elit. Bibendum qunulla suspen sed consectetur. Donec porttitor consectetur cras squam sapien massa.',
        author: 'Loura Sweety',
        create_at: '25 Feb 2022',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
        thumb:'Decoration'
    },
    {
        id: '2',
        title: 'Best Coupe Photography',
        screens: blogImg2,
        description: 'Consectetur adipiscing elit. Bibendum qunulla suspen sed consectetur. Donec porttitor consectetur cras squam sapien massa.',
        author: 'David Luis',
        create_at: '23 Feb 2022',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
        thumb:'Wedding'
    },
    {
        id: '3',
        title: 'Wedding Photography Idea',
        screens: blogImg3,
        description: 'Consectetur adipiscing elit. Bibendum qunulla suspen sed consectetur. Donec porttitor consectetur cras squam sapien massa.',
        author: 'Jenefer Willy',
        create_at: '21 Feb 2022',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
        thumb:'Photography'
    },
];
export default blogs;