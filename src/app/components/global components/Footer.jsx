import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const linksSection = [
        {
            title: "Quick Links",
            links: ["Home", "Best Seller", "Offers & Deals", "Contact Us"],
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
            <div className='max-w-7xl mx-auto px-5 py-10'>
                {/* Logo & Description */}
                <div className='w-full flex flex-col md:flex-row gap-10'>
                    <div className='w-full md:w-[60%]'>
                        <Link href='/' className='text-rose text-2xl font-semibold'>
                            Groc<span className='text-green-500'>Cart</span>
                        </Link>
                        <p className='max-w-96 text-gray-500 mt-5'>
                            We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.
                        </p>
                    </div>

                    {/* Link Sections */}
                    <div className='w-full md:w-[40%]'>
                        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-6'>
                            {linksSection.map((section, index) => (
                                <div key={index}>
                                    <h3 className='font-semibold mb-4'>{section.title}</h3>
                                    <ul>
                                        {section.links.map((link, i) => (
                                            <li key={i} className='text-sm text-gray-500 mt-1'>
                                                {link}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <div className='mt-10 w-full'>
                    <div className='border-t border-gray-400'></div>
                </div>

                {/* Bottom Copyright */}
                <div className='flex flex-col items-center mt-5'>
                    <div className='text-gray-700'>
                        © {new Date().getFullYear()} GrocCart.dev – All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
