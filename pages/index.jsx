import React from 'react';
import Layout from '../components/pages-styles/Layout';

const Index = ({posts}) => {
  return (
    <Layout>
      <div>
      <h1>
            Home Page
      </h1>
      <br></br>
      <input type='button' name='myButton' value="Hello Bootstrap Looks Good" className='btn btn-danger' />
    </div>
    <br></br>
    {/* <ul>
      {posts.map(post => (
          <li key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.content}</p>
          </li>
      ))}
    </ul> */}
    </Layout>
  );
};

export default Index;

// export async function getStaticProps(){
//   const response = await fetch('http://localhost:3000/data/posts.json');
//   const posts = await response.json();
//   return {
//     props:{
//       posts,
//     }
//   }
// }