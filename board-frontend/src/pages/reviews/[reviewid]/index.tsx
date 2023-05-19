import BoardContent from "@/components/BoardContent";
import Link from "next/link";
import { List } from 'semantic-ui-react'


export default function Review() {
  return (
    <main className="teams-main">
      <nav className="teams-navbar">
        <Link className="teams-navlink" href="/">Home</Link>
        <Link className="teams-navlink" href="/reviews">Reviews</Link>
      </nav>
      <div className="teams-body-container">
        <BoardContent />
      </div>
    </main>
  )
}