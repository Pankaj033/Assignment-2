import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>CPRG 306: Web Development 2 - Assignments</h1>

        <li><Link href="/week-2">Week-2 page</Link></li>
        <li><Link href="/week-3">Week-3 page</Link></li>
        <li><Link href="/week-4">Week-4 page</Link></li>
        <li><Link href="/week-5">Week-5 page</Link></li>
        <li><Link href="/week-6">Week-6 page</Link></li>
        <li><Link href="/week-7">Week-7 page</Link></li>
        <li><Link href="/week-8">Week-8 page</Link></li>
        <li><Link href="/week-10">Week-10 page</Link></li>


      </div>
    </main>
  )
}