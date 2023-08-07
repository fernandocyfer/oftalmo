import styles from '../../styles/cardPostBlog.module.sass'
import postImageDefault from '../../public/images/post1.svg'
import authorImageDefault from '../../public/images/authorPhoto.svg'
import Image from 'next/image'

const CardPostBlog = ({ post }) => {
  return (
    <div className={styles.cardPostBlog}>
      <div className={styles.cardPostBlogImage}>
        <Image src={post ? post.image : postImageDefault} />
        <span className={styles.catPost}>
          {post ? post.category : 'Nome da categoria'}
        </span>
      </div>
      <div className={styles.cardPostBlogContent}>
        <h4>{post ? post.title : 'Lorem ipsum dolor sit amet consectetur.'}</h4>
        <p>
          {post
            ? post.content
            : 'Lorem ipsum dolor sit amet consectetur. Ut quisque donec aliquam velit nunc. Quisque vitae sagittis turpis nec lectus. Eget sit sagittis habitant mauris malesuada urna lectus et.'}
        </p>
        <div className={styles.authorPhotoContainer}>
          <div className={styles.authorPhoto}>
            <Image src={post ? post.authorPhoto : authorImageDefault} />
          </div>
          <span>{post ? post.author : 'Nome Sobrenome'}</span>
          <a href={post ? post.link : ''} target="_blank" rel="noreferrer">
            Continue lendo &gt;
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardPostBlog
