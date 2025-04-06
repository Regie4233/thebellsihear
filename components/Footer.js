import Image from 'next/image';
import candid from '../public/assets/footer/candid.png';
import phone from '../public/assets/footer/phone.png';
import mail from '../public/assets/footer/mail.png';
import facebook from '../public/assets/footer/facebook.png';
import instagram from '../public/assets/footer/instagram.png';
import linkedin from '../public/assets/footer/linkedin.png';
import twitter from '../public/assets/footer/twitter.png';
import logo from '../public/assets/footer/logo.png';


const Footer = () => {
  return (
    <footer className='bg-secondary flex flex-col pb-[30px] lg:p-[50px] lg:pb-[0px] justify-center items-center gap-12'>
      <div className="top flex flex-col justify-center items-center lg:items-start gap-2 lg:w-[90%] lg:flex-row lg:justify-evenly xl:w-[80%]">
        <div className="footer-groups flex flex-col gap-4 mb-[.5rem] lg:flex-row lg:justify-center lg:gap-[75px] xl:gap-[80px]">
          <div className="footerFont font-[500] lg:text-[1.1rem] justify-center items-center border-b lg:justify-start lg:items-start group flex flex-col gap-2 lg:border-b-0 lg:pb-[1rem]" style={{ borderColor: 'rgba(0, 0, 0, 0.3)' }}>
            <p className='p-bold font-[800] pt-[6%] lg:pt-[0%]'>About Us</p>
            <ul className='flex flex-col pb-[5%] justify-center items-center lg:pb-[0%] lg:justify-start lg:items-start gap-2'>
              <li><p> <a href='./about'>Our story</a></p></li>
              <li><p> <a href='./about' >Our values</a></p></li>
              <li><p><a href='./about' >What we offer</a></p></li>
              <li className='border-0'><p><a href='./about'>Our team</a></p></li>
            </ul>
          </div>
          <div className="footerFont font-[500] lg:text-[1.1rem] justify-center items-center border-b lg:justify-start lg:items-start group flex flex-col gap-2 lg:pb-[1rem] lg:border-b-0" style={{ borderColor: 'rgba(0, 0, 0, 0.3)' }}>
            <p className='p-bold text-para font-bold'>Get Involved</p>
            <ul className='flex justify-center pb-[5%] items-center lg:pb-[0%] lg:justify-start lg:items-start flex-col gap-2'>
              <li><p><a href='./get-involved'>Volunteer</a></p></li>
              <li><p><a href='./get-involved' >Donate</a></p></li>
              <li><p><a href='./get-involved' >Wishlist</a></p></li>
              <li className='border-0'><p><a href='./get-involved' >Partnership</a></p></li>
            </ul>
          </div>
          <div className="group footerFont font-[500] lg:text-[1.1rem] flex flex-col border-b justify-center items-center lg:justify-start lg:items-start gap-2 lg:border-b-0 lg:pb-[1rem]" style={{ borderColor: 'rgba(0, 0, 0, 0.3)' }}>
            <p className='p-bold text-para bold font-[800]'>Our Partners</p>
            <ul className='flex justify-center pb-[5%] items-center lg:justify-start lg:items-start lg:pb-[0%] flex-col gap-2'>
              <li>
                <p>
                  <a href="https://www.childrensrescuefund.org/" target="_blank" rel="noopener noreferrer">Children&apos;s Rescue Fund</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="https://www.hfhnyc.org/" target="_blank" rel="noopener noreferrer" >Home for the Homeless</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="https://www.learntobe.org/" target="_blank" rel="noopener noreferrer" >Learn To Be</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="https://bxnf.org/" target="_blank" rel="noopener noreferrer" >Bronx Family Network</a>
                </p>
              </li>
              <li className='border-0'><p><a href='./get-involved' >Become a partner</a></p></li>
            </ul>
          </div>
          <div className="group contact-us footerFont font-[500] lg:text-[1.1rem] border-b flex flex-col justify-center items-center lg:justify-start lg:items-start gap-2 lg:border-b-0 lg:pb-[1rem]" style={{ borderColor: 'rgba(0, 0, 0, 0.3)' }}>
            <p className='p-bold font-bold'>Contact Us</p>
            <ul className='flex justify-center pb-[5%] lg:pb-[0%] items-center lg:justify-start lg:items-start flex-col gap-2'>
              <li className='flex items-start gap-2'>
                <Image src={mail} alt="" className='w-[25px] h-[25px]' />
                <a href="mailto:beranobel@mentorapromise.org">
                  <p>beranobel@mentorapromise.org</p>
                </a>
              </li>
              <li className='flex items-start gap-2'>
                <Image src={phone} alt="" className='w-[25px] h-[25px]' />
                <a href="tel:862-259-2842">
                  <p>862-259-2842</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="relative w-24 h-24">
            <Image
              id='candid'
              src={candid}
              alt=""
              fill
              sizes="100%"
              className='self-center border-0 object-contain'
            />
          </div>



        </div>

      </div>
      <div className="bot pb-[30px] md:pb-[0px] flex flex-col border-b justify-center items-center lg:justify-start lg:items-center gap-2">
        <div className="social-media flex font-[700] flex-col justify-center items-center lg:justify-center lg:items-start gap-2 mb-[.5rem]">
          <p className='p-bold flex w-full justify-center items-center gap-2'>Connect With Us</p>
          <div className='flex gap-2 font-[700]'>
            <a href="https://www.facebook.com/profile.php?id=100083192297704&paipv=0&eav=Afb54VaD2sbyxhFRo-ySHHo6BNmmm-sewfvQMlTLc_KSm-8bPAFJb5S0zkwGDTl-vOQ&_rdr" target="_blank" rel="noopener noreferrer">
              <Image src={facebook} alt="Facebook" className='w-[1.75rem]' />
            </a>
            <a href="https://www.linkedin.com/company/mentor-a-promise-inc/about/" target="_blank" rel="noopener noreferrer">
              <Image src={linkedin} alt="LinkedIn" className='w-[1.75rem]' />
            </a>
            <a href="https://www.instagram.com/mentorapromise/" target="_blank" rel="noopener noreferrer">
              <Image src={instagram} alt="Instagram" className='w-[1.75rem]' />
            </a>
            <a href="https://twitter.com/mentorapromise" target="_blank" rel="noopener noreferrer">
              <Image src={twitter} alt="Twitter" className='w-[1.75rem]' />
            </a>
          </div>
        </div>
        <p className='small font-[500] flex justify-center items-center gap-2'><span className='cursor-pointer'><a href='./disclaimer' >DISCLAIMER</a></span>|<span className='cursor-pointer'><a href='./privacy-policy' >PRIVACY POLICY</a></span></p>
        <p className='small font-[500] flex justify-center items-center gap-2'>Mentor A Promise, Inc. - EIN 84-2118930</p>
        <figure className='relative w-[55px] h-[55px]'>
        <Image id='footer-logo' src={logo} alt="mentor a promise logo"  fill sizes='100vw'/>
        </figure>
       
        <p className='px-8 p-0 font-[500] text-center lg:text-left'>
         
          The Official Site of Mentor a Promise, Inc. All Rights Reserved. MAP is a 501(c)3 (nonprofit) organization and donations are tax deductible.
          </p>

      </div>
    </footer>
  )
}

export default Footer