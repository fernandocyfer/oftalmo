import styles from '../../styles/home.module.sass'
import { useState, useEffect } from 'react'

function PostList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://americasoftalmocenter.com/wp-json/wp/v2/posts?per_page=2&?_embed'
      )
      const data = await response.json()
      setPosts(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <div className={styles.boxGeral}>
        {posts.map(post => (
          <div className="row">
            <div className={styles.boxxx}>
              <div key={post.id} className={styles.postsBox}>
                <img
                  src={post.uagb_featured_image_src.full[0]}
                  alt={post.title.rendered}
                />
                <p>{post.categories[0].name}</p>
                <h2>{post.title.rendered}</h2>
                <p className={styles.postDate}>
                  {new Date(post.date).toLocaleDateString()}
                </p>
                <p className={styles.postExcerpt}>
                  {' '}
                  {post.excerpt.rendered.substring(3, 245)}...
                </p>
                <a className={styles.postReadMore} href={post.link}>
                  Leia mais...
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostList
