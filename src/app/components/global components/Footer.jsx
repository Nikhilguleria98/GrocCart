import Link from 'next/link'
import React from 'react'

const Footer = () => {

const linksSection =[
    {
        title: "Quick Links",
        links:["Home", "Best Seller","Offers & Deals","Contact Us"],
        href:"/"
    },
    {
        title: "Need Help ?",
        links:["Delivery Information", "Return & Refund Policy","Payment Methods","Contact Us"]
    },
    {
        title: "Follow Us",
        links:["Facebook", "Instagram","Twitter"]
    },
]

  return (
    <div className='w-full bg-green-100 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2'>
            <Link href='/' className='text-rose text-2xl font-semibold'>
              Groc<span className='text-green-500'>Cart</span>
            </Link>
            <p className='max-w-96'>We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.</p>

        </div>
        <div className='w-full md:w-1/2 '>
<div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2'>
    {
        linksSection.map((section,index)=>(
            <div key={index} className=''>
<h3>{section.title}</h3>
<ul>
    {
        section.links.map((link,index)=>(
            <li key={index} className=''>{link} {link.href}</li>
        ))
    }
</ul>
            </div>
        ))
    }
</div>

        </div>
      
    </div>
  )
}

export default Footer
