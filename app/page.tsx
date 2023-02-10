
import { ProjectContainer, DescriptionContainer, Features, TeamMember, Contact } from '@/components'

export default function Home() {
  return (
    <main className="m-10">
      <ProjectContainer />
      <DescriptionContainer />
      <Features />
      <TeamMember />
      <Contact />
    </main>
  )
}
