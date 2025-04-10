import React from 'react'
import FacebookIcon from '../../../assets/facebook_icon.png'
import TwitterIcon from '../../../assets/twitter_icon.png'
import InstagramIcon from '../../../assets/instagram_icon.png'
import YoutubeIcon from '../../../assets/youtube_icon.png'

const ContactUsSection = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
        <p className='text-3xl font-bold text-center mb-8'>Contact Us</p>
        <p>Follow us on social media to stay up to date with the latest festival news and announcements.</p>
        <div className='flex gap-3 mt-5'>
          <div className='text-center  flex flex-col justify-center items-center'>
            <div className='p-2 bg-primary rounded-3xl border-[3px] border-black shadow-[6px_6px_0_black] cursor-pointer select-none transition-all duration-100 ease-in-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_black] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none'>
            <img src={FacebookIcon} alt="" />
            </div>
            <p className='pl-2 pt-2 font-bold'>Facebook</p>
          </div>
          <div className='text-center  flex flex-col justify-center items-center'>
            <div className='p-2 bg-primary rounded-3xl border-[3px] border-black shadow-[6px_6px_0_black] cursor-pointer select-none transition-all duration-100 ease-in-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_black] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none'>
            <img src={TwitterIcon} alt="" />
            </div>
            <p className='pl-2 pt-2 font-bold'>Twitter</p>
          </div>
          <div className='text-center  flex flex-col justify-center items-center'>
            <div className='p-2 bg-primary rounded-3xl border-[3px] border-black shadow-[6px_6px_0_black] cursor-pointer select-none transition-all duration-100 ease-in-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_black] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none'>
            <img src={InstagramIcon} alt="" />
            </div>
            <p className='pl-2 pt-2 font-bold'>Instagram</p>
          </div>
          <div className='text-center  flex flex-col justify-center items-center'>
            <div className='p-2 bg-primary rounded-3xl border-[3px] border-black shadow-[6px_6px_0_black] cursor-pointer select-none transition-all duration-100 ease-in-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_black] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none'>
            <img src={YoutubeIcon} alt="" />
            </div>
            <p className='pl-2 pt-2 font-bold'>Youtube</p>
          </div>
        </div>
    </div>
  )
}

export default ContactUsSection