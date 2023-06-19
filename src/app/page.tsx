import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex gap-4">
      <Link href={'/login'}>Login</Link>        
      <Link href={'/signup'}>signup</Link>        
    </main>
  )
}
