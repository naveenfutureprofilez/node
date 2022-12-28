import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
export default function Navigation(){

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

    const navigation = [
        { name: 'Products', href: '/products', current: true },
        { name: 'Add Products', href: '/add_products', current: false },
        { name: 'Reports', href: '#', current: false },
    ];


    return <>
            {navigation.map((item) => (
                <Link className='text-white' to={item.href} >{item.name}</Link>
            ))} 
    </>
}