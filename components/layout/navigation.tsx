'use client'

import Image from "next/image"
import Logo from '@/public/images/logo.svg'
import { Button } from "@/components/ui/button"


export function Navigation() {

  return (
      <nav className="">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="">
              {/* logo */}
              <Image
                loading="lazy"
                src={Logo}
                width={40}
                height={40}
                alt="Eventro Logo"
                className="h-5 w-auto"
              />
            </div>

            {/* authentication buttons */}
            <div className="flex items-center gap-2">
              <Button variant="ghost">Login</Button>
              <Button className="rounded-full bg-gradient-primary hover:opacity-90 transition-all">Sign up</Button>
            </div>
            
          </div>
        </div>
      </nav>
  )
}
