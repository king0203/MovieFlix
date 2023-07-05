import React from 'react';
import footerStyles from '@/app/styles/footer.module.css'
import { FaTwitter,FaLinkedinIn,FaGithub } from "react-icons/fa";
import Link from "next/link";


export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
        <>
            <footer className={footerStyles.footer}>           
                <div className={footerStyles['bottom-details']}>
                    <div className={footerStyles.bottom_text}>
                        <span className={footerStyles.copyright_text}> Copyright © 2023
                            <Link href="/>"></Link> All rights reserved 
                        </span>
                        <span className={footerStyles[`media-icons`]}>
                            <Link href="https://twitter.com/darshanarkhade" target="_blank"><i > <FaTwitter/> </i> </Link>
                            <Link href="https://github.com/king0203" target="_blank"><i > <FaGithub/> </i> </Link>
                            <Link href="https://www.linkedin.com/in/darshan-arkhade-2a021324b/" target="_blank"><i > <FaLinkedinIn /> </i></Link>
                        </span>
                        <span className={footerStyles.policy_terms}>
                          <Link href="/">Privacy policy</Link>
                          <Link href="/">Terms & condition</Link>
                        </span>                
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;