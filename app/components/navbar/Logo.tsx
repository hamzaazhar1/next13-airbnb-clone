'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer h-[300] " 
      src="/images/harmony2.png" 
      height="100" 
      width="250" 
      alt="Logo" 
    />
   );
}
 
export default Logo;
