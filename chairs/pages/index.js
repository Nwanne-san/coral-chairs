import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container font-sans">
        <section className="header" id="intro">
            <div className="heading">
                <Image src="/landing-page/logo.svg" alt="logo" className="logo" width={30} height={30} />
                <h1>Modern Chairs Crafted with Love</h1>
            </div>
        
            <div className="follow-up">
                <h4>
                    We love creating high quality and comfortable chairs
                </h4>
                <Link href="#chairs-collection" id="btn">Discover our chair collection</Link>
            </div>
            
        </section>
        
        <section className="selection" id="chairs-collection">
            <div className="heading second-heading">
                <h3>the selection</h3>
                <h2>Our Chairs</h2>
                <p>We mostly sell one-off items. That means that we make one-of-a-kind furniture pieces so whoever buys it will have a unique item.</p>
            </div>
            
            <div className="content">
                <div className="first">
                    <Image className="image" src="/landing-page/furniture-1.jpg" alt="" width={400} height={500} />
                    <p className="number">01</p>
                    <p className="topic">Tufted white leather sofa chair</p>
                    <span className="note">This will fit perfectly in any beauty salon or  modern home thanks to its timeless design.</span>
                    <p>$289</p>
                </div>
                <div className="second">
                    <Image className="image" src="/landing-page/furniture-2.jpg" alt="" width={400} height={500}/>
                    <p className="number">02</p>
                    <p className="topic">Black and brown wooden chair</p>
                    <span className="note">Both minimalistic and comfortable, this is a great choice for home or office.</span>
                    <p>$99</p>
                </div>
                <div className="third">
                    <Image className="image" src="/landing-page/furniture-3.jpg" alt="" width={400} height={500}/>
                    <p className="number">03</p>
                    <p className="topic">Rustic wooden bar stool</p>    
                    <span className="note">Made from solid beech wood, this piece will fit nicely in your rustic kitchen.</span>
                    <p>$139</p>
                </div>
            </div>
            <div className="sticky" >
                {/* <Link href="#intro" className="stick"><Image width="30" height="30" src="https://img.icons8.com/ios-filled/50/collapse-arrow.png" alt="collapse-arrow"/></Link> */}
            </div>
            <p className="more">Interested in our products? <Link href="#contact" className="link">Send us a message</Link> or <Link href="#info" className="link">visit our store</Link>.</p>
        </section>
        <section className="dark" id="contact">
            
                <div className="head">
                    <h3>Contact Us</h3>
                    <h5>Let's get in touch</h5>
                </div>
                <form action="get">
                    <div className="data">
                        <label for="name">name</label>
                        <input type="text" placeholder="Name" id="username" required />
                    </div>
                    <div className="data">
                        <label for="email">email address</label>
                        <input type="email" placeholder="example@gmail.com" id="email" required/>
                    </div>
                    <div className="data">
                        <label for="name">message</label>
                        <textarea name="Message" id="comment" cols="30" rows="10"></textarea>
                    </div>
                    <button>Send message</button>
                </form>
                <p className="italics"><em>All fields are required. We'll get back to you as soon as possible.</em></p>
            
        </section>
        <section className="footer" id="info">
            
                <p>Visit Our Store</p>
                <h1 className="tel">(307) 555-0133</h1>
            <div className="address">
                <p className="big">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>

                <svg width="176" height="32" viewBox="0 0 176 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.7106 9.48225C28.7309 9.7665 28.7309 10.0508 28.7309 10.3351C28.7309 19.0051 22.132 28.9949 10.0711 28.9949C6.35531 28.9949 2.90356 27.9188 0 26.0508C0.527937 26.1117 1.0355 26.132 1.58375 26.132C4.64969 26.132 7.47206 25.0965 9.72587 23.33C6.84262 23.2691 4.42637 21.3808 3.59387 18.7818C4 18.8426 4.40606 18.8833 4.8325 18.8833C5.42131 18.8833 6.01019 18.802 6.55837 18.6599C3.55331 18.0508 1.29944 15.4112 1.29944 12.2234V12.1422C2.1725 12.6295 3.18781 12.9341 4.26387 12.9746C2.49737 11.7969 1.34006 9.78681 1.34006 7.51269C1.34006 6.29444 1.66487 5.17769 2.23344 4.20306C5.46187 8.18275 10.3147 10.7817 15.7562 11.066C15.6547 10.5787 15.5938 10.0711 15.5938 9.5635C15.5938 5.94925 18.5177 3.00513 22.1522 3.00513C24.0405 3.00513 25.7461 3.797 26.9441 5.07619C28.4262 4.79194 29.8476 4.24369 31.1065 3.49244C30.6191 5.01531 29.5836 6.2945 28.2232 7.10663C29.5431 6.96456 30.8222 6.599 31.9999 6.09144C31.1066 7.39088 29.9898 8.54819 28.7106 9.48225Z" fill="#3C3A47"/>
                <path d="M97.4463 18L98.335 12.2087H92.7782V8.45063C92.7782 6.86625 93.5544 5.32188 96.0432 5.32188H98.5694V0.39125C98.5694 0.39125 96.2769 0 94.085 0C89.5088 0 86.5175 2.77375 86.5175 7.795V12.2087H81.4307V18H86.5175V32H92.7782V18H97.4463Z" fill="#3C3A47"/>
                <g clipPath="url(#clip0_41_222)">
                <path d="M162.006 8.81257C158.031 8.81257 154.825 12.0188 154.825 15.9938C154.825 19.9688 158.031 23.1751 162.006 23.1751C165.981 23.1751 169.188 19.9688 169.188 15.9938C169.188 12.0188 165.981 8.81257 162.006 8.81257ZM162.006 20.6626C159.438 20.6626 157.338 18.5688 157.338 15.9938C157.338 13.4188 159.431 11.3251 162.006 11.3251C164.581 11.3251 166.675 13.4188 166.675 15.9938C166.675 18.5688 164.575 20.6626 162.006 20.6626ZM171.156 8.51882C171.156 9.45007 170.406 10.1938 169.481 10.1938C168.55 10.1938 167.806 9.44382 167.806 8.51882C167.806 7.59382 168.556 6.84382 169.481 6.84382C170.406 6.84382 171.156 7.59382 171.156 8.51882ZM175.913 10.2188C175.806 7.97507 175.294 5.98757 173.65 4.35007C172.013 2.71257 170.025 2.20007 167.781 2.08757C165.469 1.95632 158.538 1.95632 156.225 2.08757C153.988 2.19382 152 2.70632 150.356 4.34382C148.713 5.98132 148.206 7.96882 148.094 10.2126C147.963 12.5251 147.963 19.4563 148.094 21.7688C148.2 24.0126 148.713 26.0001 150.356 27.6376C152 29.2751 153.981 29.7876 156.225 29.9001C158.538 30.0313 165.469 30.0313 167.781 29.9001C170.025 29.7938 172.013 29.2813 173.65 27.6376C175.288 26.0001 175.8 24.0126 175.913 21.7688C176.044 19.4563 176.044 12.5313 175.913 10.2188ZM172.925 24.2501C172.438 25.4751 171.494 26.4188 170.263 26.9126C168.419 27.6438 164.044 27.4751 162.006 27.4751C159.969 27.4751 155.588 27.6376 153.75 26.9126C152.525 26.4251 151.581 25.4813 151.088 24.2501C150.356 22.4063 150.525 18.0313 150.525 15.9938C150.525 13.9563 150.363 9.57507 151.088 7.73757C151.575 6.51257 152.519 5.56882 153.75 5.07507C155.594 4.34382 159.969 4.51257 162.006 4.51257C164.044 4.51257 168.425 4.35007 170.263 5.07507C171.488 5.56257 172.431 6.50632 172.925 7.73757C173.656 9.58132 173.488 13.9563 173.488 15.9938C173.488 18.0313 173.656 22.4126 172.925 24.2501Z" fill="#3C3A47"/>
                </g>
                <defs>
                <clipPath id="clip0_41_222">
                <rect width="28" height="32" fill="white" transform="translate(148)"/>
                </clipPath>
                </defs>
                </svg>
            </div>
        </section>
        <footer>
            <div>
                <p className="small">
                    &copy;Copyright 2021 The Chair Company. All rights reserved. 
                    Built with <Link href="https://www.wordpress.com/" className="link" >WordPress</Link> and <Link href="https://www.elementor.com/" className="link">Elementor</Link>.
                </p>
            </div>
        </footer>
    </div>
    </>
  )
}
