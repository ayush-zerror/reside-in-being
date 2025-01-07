import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer w-full h-[50vh] p-[2vw] px-[3.5vw] pb-[3.5vw] flex flex-col justify-between'>
        <div>
        <h4 className='text-[1.5vw] font-[font1]'>Contact and Inquiries</h4>
        <br />
        <p className='text-[1vw] font-[font1]'>500 Terry Francine St. <br /> San Francisco, CA 94158</p>
        <br />
        <p className='text-[1vw] font-[font1]'>123-456-7890</p>
        <p className='text-[1vw] font-[font1]'>info@mysite.com</p>
        </div>
        <div className='w-full flex items-center justify-between'>
            <div className='flex items-center gap-[2vw] text-[1vw] font-[font1]'>
                <Link href="https://www.resideinbeing.com/policies/privacy-policy">Privacy Policy</Link>
                <Link href="https://www.resideinbeing.com/policies/shipping-policy">Shipping Policy</Link>
                <Link href="https://www.resideinbeing.com/policies/refund-policy">Returns & Exchange</Link>
                <Link href="https://www.resideinbeing.com/policies/terms-of-service">Terms of Service</Link>
            </div>
            <div className='flex items-center gap-[1.5vw] uppercase text-[1.5vw]'>
                <Link href="https://www.instagram.com/resideinbeing/" className='hover:scale-[1.1] cursor-pointer'><i class="ri-instagram-line"></i></Link>
                <Link href="https://www.facebook.com/people/resideinbeing/100090609348617/?mibextid=LQQJ4d" className='hover:scale-[1.1] cursor-pointer'><i class="ri-facebook-box-line"></i></Link>
                <Link href="https://www.youtube.com/channel/UCiGEVB5K0-Es9yDZesHbWsg" className='hover:scale-[1.1] cursor-pointer'><i class="ri-youtube-line"></i></Link>
                <Link href="https://x.com/resideinbeing?mx=2" className='hover:scale-[1.1] cursor-pointer'><i class="ri-twitter-line"></i></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer