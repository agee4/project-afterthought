// Page.jsx
// Wrap your page content with this element, and give it a page title with title="".
// Include a
import type { ReactNode } from "react"
import pageTitle from "./Functions/pageTitleFunct"

const Page = ({
  title,
  titlewrapper,
  children,
}: {
  title?: string
  titlewrapper?: boolean
  children: ReactNode | ReactNode[]
}) => {
  pageTitle(title, titlewrapper)
  return <main className="animate-fadein flex-1">{children}</main>
}

export default Page
