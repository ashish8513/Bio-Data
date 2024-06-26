import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
import {FaLinkedin} from "react-icons/fa";
import BacktoTop from '../Components/BacktoTop'
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500 dark:bg-slate-900 dark:text-white'>
      <div className='w-full max-w-7xl mx-auto text-black'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Ashish
            </span>
            Prabhakar
          </div>
          <div className='  grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div className='text-black'>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
              

                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Ashish Prabhakar
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.github.com/ashish8513'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Ashish Prabhakar"
            year={new Date().getFullYear()}
          />
          <div className="flex  text-3xl gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://facebook.com/ashish kumar' icon={BsFacebook} />
            <Footer.Icon href='https://instagram.com/official_ashish8513' icon={BsInstagram} />
            <Footer.Icon href='https://twitter.com/@AshishM8513' icon={BsTwitter} />
            <Footer.Icon href='https://github.com/ashish8513' icon={BsGithub} />
            <Footer.Icon href='https://linkedin.com/in/ashish-prabhakar-42791324b' icon={FaLinkedin} />

          </div>
        </div>
      </div>
      <BacktoTop />
    </Footer>
  );
}
