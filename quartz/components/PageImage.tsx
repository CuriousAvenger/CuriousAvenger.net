import {QuartzComponentConstructor, QuartzComponentProps} from "./types"

export default (() => {
  function PageImage(props: QuartzComponentProps) {
    return (
        <img src="/static/profile.png" class="page-image desktop-only" alt="Profile Picture"/>
    )
  }

  return PageImage
}) satisfies QuartzComponentConstructor 