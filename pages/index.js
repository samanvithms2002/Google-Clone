import Head from 'next/head'
import Avatar from '../components/Avatar'
import Image from "next/image"
import 'tailwindcss/tailwind.css'
import {MicrophoneIcon,SearchIcon,ViewGridIcon} from "@heroicons/react/solid"
import Footer from '../components/Footer'
import {useRef} from "react"
import { useRouter} from "next/router"

export default function Home() {
  const router=useRouter();
  const searchInputRef=useRef(null)
  const search=(e)=>{
    e.preventDefault();
    const term=searchInputRef.current.value;
    if(!term){
      return
    }

    router.push(`/search?term=${term}`)
  }
  return (
    <div className="flex flex-col justify-center h-screen ">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className="flex w-full p-5 justify-between text-lg text-gray-700">
      {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
      {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
          
            <Avatar
             url="https://yt3.ggpht.com/yti/ANoDKi7AwgXkY4hiaejHm8vC9wMLIrCMEhNZvX3YktnqnA=s108-c-k-c0x00ffffff-no-rj"
             />

        </div>
      </header>
      {/* body */}

      <form className="flex flex-col items-center mt-44 flex-grow ">
        <Image 
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}

        />
        <div className="flex w-full  mt-5 border border-gray-200 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full  
        px-5 py-3 items-center sm:max-w-xl">
          <SearchIcon className="h-5 mr-3 text-gray-700" />
          <input ref={searchInputRef} type="text" className="flex-grow  focus:outline-white " />
          <MicrophoneIcon className="h-5 text-gray-700 "/>
        </div>

        <div className="flex flex-col w-1/2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-4">
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={search} className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
