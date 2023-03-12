import { PageInfo } from './../typings.d'

export const fetchPageInfo = async () => {
  console.log('process.env.NEXT_PUBLIC_SANITY_BASE_URL')
  console.log(process.env.NEXT_PUBLIC_SANITY_BASE_URL)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getPageInfo`
  )
  console.log('res')
  console.log(res)
  const data = await res.json()
  console.log('data')
  console.log(data)
  const pageInfo: PageInfo = data.pageInfo
  // console.log("fetching", pageInfo)
  return pageInfo
}
