/** @jsx jsx */
import { jsx } from "theme-ui"

type ProjectCardProps = {
  link?: string
  title?: string
  bg: string
}

const ProjectCard = ({ link, title, bg }: ProjectCardProps) => (
  <a
    href={link}
    target={link == null ? undefined : '_blank'}
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: bg || `none`,
      backgroundSize: `cover`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
    <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      {title}
    </div>
    <div sx={{ height: '300px' }}/>
  </a>
)

export default ProjectCard
