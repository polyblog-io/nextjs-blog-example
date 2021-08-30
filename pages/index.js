import { useRouter } from 'next/router'

export default function Blog() {

  const router = useRouter()

  return (
    <div>
      <h1>Blog</h1>
      <p>locale {router.locale}</p>
    </div>
  )

}