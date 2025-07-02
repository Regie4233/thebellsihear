import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-p-yellow px-2 p-1 md:px-22 flex flex-row items-center justify-between sticky top-0 z-50">
        <Link className="h-[55px] w-[55px] relative" href="/">
            <Image src={'/assets/footer/logo.png'} alt="logo" fill sizes="100vw" style={{"objectFit": "contain"}} />
        </Link>
        <Link href="/episodes" className="rounded-full text-md md:text-xl bg-p-blue text-white px-8 py-2">
          Episodes  
        </Link>
    </nav>    
)
}
