import SocialCard from './SocialCard'

export default function SocialGrid() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
      <SocialCard image="/rocket.svg" title="linkedin" url="/esa" />
      <SocialCard image="/rocket.svg" title="linkedin" url="/esa" />
      <SocialCard image="/rocket.svg" title="linkedin" url="/esa" />
      <SocialCard image="/rocket.svg" title="linkedin" url="/esa" />
    </div>
  )
}
