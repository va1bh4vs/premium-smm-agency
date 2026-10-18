import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full py-5 px-6 md:px-12 flex items-center justify-between glass">
      <Link href="/">
        <a className="text-2xl font-bold" aria-label="Velvet Social">
          <span className="text-white">Velvet</span><span className="text-brand ml-1">Social</span>
        </a>
      </Link>
      <nav className="hidden md:flex gap-8 items-center text-sm">
        <Link href="/services"><a>Services</a></Link>
        <Link href="/portfolio"><a>Portfolio</a></Link>
        <Link href="/pricing"><a>Pricing</a></Link>
        <Link href="/blog"><a>Blog</a></Link>
        <Link href="/contact"><a className="ml-4 py-2 px-4 bg-brand rounded-md font-medium">Book a Free Consultation</a></Link>
      </nav>

      <button className="md:hidden p-2" onClick={()=>setOpen(!open)} aria-label="Open menu">
        <Menu />
      </button>

      {open && (
        <div className="absolute right-4 top-20 bg-[#08060b] p-4 rounded-md glass w-64 md:hidden">
          <nav className="flex flex-col gap-3">
            <Link href="/services"><a onClick={()=>setOpen(false)}>Services</a></Link>
            <Link href="/portfolio"><a onClick={()=>setOpen(false)}>Portfolio</a></Link>
            <Link href="/pricing"><a onClick={()=>setOpen(false)}>Pricing</a></Link>
            <Link href="/contact"><a className="py-2 px-3 bg-brand rounded" onClick={()=>setOpen(false)}>Book Consultation</a></Link>
          </nav>
        </div>
      )}
    </header>
  );
}
