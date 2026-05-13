import Link from 'next/link'
import { FaTelegram, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-blue-500">
              GezahegnPortfolio&trade;
            </Link>
            <p className="text-sm text-gray-300 mt-2">
              © {new Date().getFullYear()} GezahegnPortfolio. All rights reserved!.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://t.me/bgdvlpr_men"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-500 transition-colors"
            >
              <FaTelegram className="h-6 w-6" />
            </a> 
            <a
              href="https://www.instagram.com/birhanugezahegn099/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-500 transition-colors"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/tgezahegn-birhanu-08170b328?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYjcoZhGhS8ytwbrlTcfnxg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/beeki.birhanu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-500 transition-colors"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 