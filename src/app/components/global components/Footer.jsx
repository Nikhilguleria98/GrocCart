import Link from 'next/link'
import React from 'react'

const Footer = () => {

    const linksSection = [
        {
            title: "Quick Links",
            links: ["Home", "Best Seller", "Offers & Deals", "Contact Us"],
            href: "/"
        },
        {
            title: "Need Help ?",
            links: ["Delivery Information", "Return & Refund Policy", "Payment Methods", "Contact Us"]
        },
        {
            title: "Follow Us",
            links: ["Facebook", "Instagram", "Twitter"]
        },
    ]

    return (
        <div className='bg-green-100/50 mt-20'>
        <div className='w-full flex flex-col md:flex-row  p-5'>
            <div className='w-full md:w-[60%] md:pl-[6%]'>
                <Link href='/' className='text-rose text-2xl font-semibold'>
                    Groc<span className='text-green-500'>Cart</span>
                </Link>
                <p className='max-w-96 text-gray-500 mt-5'>We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.</p>

            </div>
            <div className='w-full md:w-[40%] '>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-[10%]'>
                    {
                        linksSection.map((section, index) => (
                            <div key={index} className=''>
                                <h3 className='font-semibold mb-5'>{section.title}</h3>
                                <ul  >
                                    {
                                        section.links.map((link, index) => (
                                            <li key={index} className='text-sm whitespace-nowrap text-gray-500 mt-1'>{link} {link.href}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
            <div className='flex flex-col items-center mt-10'>
                <div className='h-[0.5px] w-[87%] bg-gray-400 '></div>
                <div className='my-5 text-gray-700'>Copyright {new Date().getFullYear()} © GrocCart.dev All Right Reserved.</div>
            </div>
        </div>
    )
}

export default Footer
