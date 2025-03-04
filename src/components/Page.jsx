// Page.jsx
// Wrap your page content with this element, and give it a page title with title="".
// Include a 
import pageTitle from "./Functions/pageTitleFunct"

const Page = (props) => {
  pageTitle(props.title, props.test)
  return <main className="flex-1 animate-fadein">
    {props.children}
  </main>
}

export default Page