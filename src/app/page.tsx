import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">

        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/85 w-4/5 sm:max-w-96 mx-auto text-white">
          <h1 className="text-4xl font-bold">Lasse Juusela</h1><br />
          <h2 className="text-2xl">Programming and online marketing services</h2>
          <address>
            Location: Helsinki, Finland<br />
          </address>
          <p>
            This website is made with Next.js to showcase my web development skills.<br />
            To continue, first you need to login with your email or google account.<br />
            This is to showcase authentication and security features on my website.<br />
            Inside you will discover my marketing and programming services and see my portfolio projects.<br/><br/>
            <Link href='/login' className="hover:underline">Login here</Link>
          </p>
        </div>

      </main>

    </div>
  );
}
