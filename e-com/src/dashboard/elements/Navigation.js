import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
export default function Navigation(){

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

    const navigation = [
        { name: 'Sign Up', href: '/signup', current: true },
        { name: 'Products', href: '/products', current: false },
        { name: 'Add Products', href: '/add_products', current: false },
        { name: 'Reports', href: '#', current: false },
    ];

    return <>
            {navigation.map((item) => (
                <Link className='text-white text-uppercase ' to={item.href} >{item.name}</Link>
            ))} 
    </>
}