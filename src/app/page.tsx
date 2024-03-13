import Link from "next/link"

const Home = () => {
  return (
    <>
      <nav>
        <Link href='/login/signin'>Login</Link>
        <Link href='/login/signup'>SignUp</Link>
      </nav>
    </>
  )
}

export default Home



