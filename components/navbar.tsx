import React from 'react'
import Link from 'next/link'

import MainNav from './MainNav'
import Container from '@/components/ui/Container'
import { getCategories } from '@/actions/getCategories'
import NavbarActions from '@/components/NavbarActions'

const NavBar = async (): Promise<JSX.Element> => {
  const categories = await getCategories();

  return (
    <div className="border-b">
        <Container>
            <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                    <p className="font-bold text-xl">
                        Store
                    </p>
                </Link>
                <MainNav data={categories}/>
                <NavbarActions />
            </div>
        </Container>
    </div>
  )
}

export default NavBar