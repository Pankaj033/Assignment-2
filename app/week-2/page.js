import Image from 'next/image'
import Link from 'next/link'
import StudentInfo from './student-info'

export default function Home() {
  return (
    <main>
      <h1>Shopping List</h1>
      <Link href="https://github.com/Pankaj033"><StudentInfo /> </Link>
    </main>
  )
}
