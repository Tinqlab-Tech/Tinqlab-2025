import HeaderTwo from '@/components/typography/HeaderTwo';
import MainText from '@/components/typography/MainText';
import PageBorders from '@/components/wrappers/PageBorders';
import DoublePageBorders from '@/components/wrappers/DoublePageBorders';
import { ContactUsModal } from '@/components/forms/ContactUsModal';
import { MainButton } from '@/components/button/MainButton';
import ImageWrapper from '@/components/wrappers/ImageWrapper';
import vector1 from '@/public/images/vector1.png';
import logo from '@/public/images/logowhite.svg';
import UserMail from '@/components/forms/UserMail';
import OtherHeader from '@/components/partials/OtherHeader';
import HeaderOne from '@/components/typography/HeaderOne';
import SlideUp from '@/animation/SlideUp';
import SlideRight from '@/animation/SlideRight';
import SlideDown from '@/animation/SlideDown';
import locate from '@/public/images/locate.png';
import insta from '@/public/images/insta.png';
import twiter from '@/public/images/twiter.png';
import arrow from '@/public/images/arrow.png';
import mail from '@/public/images/mail.png';

export const metadata = {
  title: 'Tinqlab - Expert software and blockchain developers',
  description:
    'We Build Efficient And Low Cost Web, Mobile And Blockchain Applications With Great User Interface And Experience. | Software development company in Nigeria.',
};

export default function Home() {
  const connect = [
    {
      title: 'Headquaters',
      subtitle: '8609 Westwood Center Dr. Suite 110 Tyson Corner, VA 22182',
      icon: locate,
    },
    { title: 'Email Us', subtitle: 'Info@Tinqlab.com', icon: mail },
    { title: 'Connect On Linkedin', icon: arrow },
    { title: 'Follow us On X', icon: twiter },
    { title: 'Follow Us On Instagram', icon: insta },
  ];
  return (
    <div className="min-h-screen">
      {/* Contact-us hero */}
      <div className="flex h-screen w-screen flex-col bg-mainGrey">
        <OtherHeader />
        <div className="m-auto grid justify-items-center gap-4 text-center md:gap-8">
          {' '}
          <div>
            <SlideUp>
              <HeaderOne
                text={'Get in Touch with Us '}
                size="text-[60px] leading-[70px] text-center"
              />
            </SlideUp>
          </div>
          <div className="px-4">
            <SlideUp duration={1.5}>
              <MainText
                text={
                  "We're delightedtowork with you on your incredible project"
                }
                centerText={true}
              />{' '}
            </SlideUp>
          </div>
        </div>
      </div>
      <PageBorders>
        <div className="grid h-full gap-4 md:gap-8 xl:grid-cols-2">
          {/* grid 1 */}
          <div className="h-full">
            <ContactUsModal />
          </div>
          {/* grid 2 */}

          <div className="grid gap-4 rounded-[20px] bg-mainGrey p-[30px] md:gap-8">
            <div className="overflow-hidden rounded-[20px]">
              <div className="flex min-h-[60vh] flex-col justify-start bg-contactCardBg bg-cover bg-no-repeat p-[30px]">
                <ImageWrapper
                  src={logo}
                  width={150}
                  height={50}
                  alt="Tinqlab logo"
                />
                <div className="my-auto flex h-full w-3/4">
                  <HeaderTwo
                    text="Our experts will always help you"
                    color={'text-mainWhite'}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-4 p-6 pb-10">
              <div>
                {' '}
                <SlideUp>
                  {' '}
                  <h1 className="font-lato text-[30px] font-bold leading-[40px] md:text-[36px]">
                    Connect with us <span className="text-primary"> today</span>
                  </h1>
                </SlideUp>{' '}
              </div>
              <SlideRight duration={1.5}>
                <MainText
                  text={'Let us know how we can help you '}
                  color={'opacity-50'}
                />{' '}
              </SlideRight>
            </div>
            <div className="grid gap-4 md:gap-8">
              {connect.map((item, index) => (
                <div key={index}>
                  <SlideDown delay={index * 0.2} overflow={null}>
                    <div className="flex h-full items-center justify-between gap-8 rounded-[10px] bg-primary p-[20px] shadow-custom-primary md:gap-8">
                      {' '}
                      <div className="flex flex-col">
                        {' '}
                        <MainText text={item.title} color={'text-mainWhite'} />
                        {item.subtitle && (
                          <MainText
                            text={item.subtitle}
                            color={'text-mainWhite/50 '}
                            size={'text-[14px] '}
                          />
                        )}{' '}
                      </div>
                      <div>
                        <ImageWrapper
                          src={item.icon}
                          alt={'Contact Tinqlab'}
                          width={15}
                          height={15}
                          style={'bg-contain bg-center bg-no-repeat'}
                        />{' '}
                      </div>
                    </div>
                  </SlideDown>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageBorders>
      <DoublePageBorders
        background={'bg-contactSectionBg bg-center bg-cover bg-no-repeat'}
      >
        <div className="grid w-full items-center justify-center gap-4 lg:grid-cols-2">
          {/* Text */}
          <div className="text-center xl:text-start">
            <SlideUp>
              {' '}
              <HeaderTwo
                text="Get the Latest Industry News & Insights"
                color="text-mainWhite"
                size={'text-[24px] xl:text-[32px]'}
              />
            </SlideUp>
          </div>{' '}
          <div className="w-full">
            <SlideRight duration={1.5}>
              {' '}
              <UserMail />
            </SlideRight>
          </div>{' '}
        </div>
        ,{' '}
      </DoublePageBorders>
    </div>
  );
}
