import { Skill } from './../typings.d'

export const fetchSkills = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getSkills`
  )
  const data = await res.json()
  const skills: Skill[] = data.skills
  // console.log("fetching", skills)
  return skills
}
