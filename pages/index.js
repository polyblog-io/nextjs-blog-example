import Link from 'next/link'
import { useRouter } from 'next/router'
import getArticlesFromCDN from '@polyblog/polyblog-js-client/getArticlesFromCDN'

export async function getStaticProps({locale}) {

  const articles = await getArticlesFromCDN({
    organizationId: 'c398463407b5c12f27f9aed4',
    project: 'polyblog',
    locale, 
    published: true,
    sortDirection: 'DESC',
  })

  return {
    props: {
      articles
    }
  }

}

export default function Blog({articles}) {
  
  const router = useRouter()

  return (
    <div>
      <h1>Blog</h1>
      <p>locale {router.locale}</p>
      {articles?.map(article => (
        <Link key={article._id} href={article.slugLocalized}>
          <a>
            <div>{article.title}</div>
            <div>{article.subtitle}</div>
          </a>
        </Link>
      ))}
    </div>
  )

}