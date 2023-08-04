
import axios from 'axios';
import Link from 'next/link';

const Blog = ({ posts }) => {
function posts({posts}) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title.rendered}</h2>
          <p>{post.date}</p>
          <p>{post.excerpt.rendered.substring(3, 203)}...</p> {/* Extrai o resumo do post */}
          <Link href={`/post/${post.slug}`}>
            <a>Leia mais</a>
          </Link>
        </div>
      ))}
    </div>
  );
};
}

export async function getStaticProps() {
  const res = await axios.get('https://americasoftalmocenter.com/wp-json/wp/v2/posts?_embed&per_page=10');
  const posts = res.data;

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
