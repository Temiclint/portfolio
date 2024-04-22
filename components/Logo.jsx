
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes";

const Logo = () => {
  return <Link href='/'>
<Image src="/direadelajalogotransparent.png" width={60}
height={60} priority alt="" />
</Link>
}

export default Logo

