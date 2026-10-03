import Link from "next/link";


export function Header() {

    return (
        <div className="flex flex-col p-2.5 gap-2.5 justify-center">
            <Link href="/about">About</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/index">Index</Link>
            <Link href="/porfolio">Porfolio</Link>
        </div>
    )
}