import { Helmet } from "react-helmet-async";


const About = () => {
    return (
        <div className="max-w-[1170px] mx-auto md:px-24 lg:px-8">
            <Helmet>
             <title>Luxury Properties | Contact </title>
             </Helmet>
     
            <h2 className="text-center text-3xl font-bold animate__animated animate__fadeInLeft">Who we are</h2>
            <h3 className="text-xl mt-12 font-bold animate__animated animate__fadeInRight">Who we are and why you should choose Luxury properties? </h3>
            <p className="animate__animated animate__fadeInRight">Luxury Properties is a local real estate company in Phnom Penh that specializes in finding perfect homes, furnished apartments, commercial space, and offices for expats. The business is founded by 2-siblings, Oeun Sitha, a Cambodian, co-founded and executively managed by Oeurn Theara, a Cambodian, since 2017.</p>
            <p className="animate__animated animate__fadeInRight">has a team of passionate young realtors who speak Khmer, English & Japanese. We offer extensive service – we find your new home, draft your lease agreement, make move arrangements, and retain the relationship during your whole tenancy in Cambodia. Our professional team strongly possesses</p>
            <ul className="ml-6 animate__animated animate__fadeInLeft">
                <li className="mt-2 list-disc list-outside"> <span className="font-bold">Market knowledge: </span>
                 Our team knows the local market inside and out, what properties are worth, what trends are driving the market, and what areas are hot.</li>
                <li className="mt-2 list-disc list-outside"><span className="font-bold">Negotiation skills: </span>  We are a team of expert negotiators who know how to get the best deal possible for our clients, whether they are renting, buying, leasing, or selling a property.</li>
                <li className="mt-2 list-disc list-outside"><span className="font-bold">Communication skills: </span>  We are excellent communicators. We can clearly explain the process to our clients and answer their questions in a concise and informative way. We effectively convey messages between our clients and landlords.</li>
                <li className="mt-2 list-disc list-outside"><span className="font-bold">Problem-solving skills: </span>  We are capable of solving problems quickly and efficiently. We respond and come up with flexibly creative solutions to any challenges that may arise.</li>
                <li className="mt-2 list-disc list-outside"><span className="font-bold">Technology skills: </span>  We are up-to-date on the latest technology in the real estate industry. We use technology to simplify the real estate process and make it easier for our clients.</li>
            </ul>
            <h2 className="text-xl font-bold">Our Vision:</h2>
            <p>To be a local property service provider with distinctly fulfilled & trustable information and become the most reliable & trustworthy real estate company in the perception of service users.</p>
            <h2 className="text-xl font-bold">Our Mission:</h2>
            <ol className="ml-6">
                <li className="mt-2 list-decimal">Be an outstanding partner with professional ethics for real estate owners and clients.</li>
                <li className="mt-2 list-decimal">To alter real estate services to be easier, better, and clearer.</li>
                <li className="mt-2 list-decimal">Bring clients and real estate owners to make the right and more accurate decisions.</li>
                
            </ol>
            <h2 className="text-xl font-bold">Our Core Values (What We Believe)</h2>
            <ol className="ml-6">
                <li className="mt-2 list-decimal">Provide the most competitive price and most accurate information.</li>
                <li className="mt-2 list-decimal">Offer the best options for clients to make a selection.</li>
                <li className="mt-2 list-decimal">Always be next to you to support and respond quickly.</li>
            </ol>
            <h2 className="text-xl font-bold">Why you should choose CAM Realty?</h2>
            <ol className="ml-6">
                <li className="mt-2 list-decimal">We are one of Cambodia’s leading real estate service providers, with many years of experience and trustworthiness.</li>
                <li className="mt-2 list-decimal">We professionally provide real estate consulting with thorough information.</li>
                <li className="mt-2 list-decimal">We provide competitive prices with easy and fast operation.</li>
                <li className="mt-2 list-decimal">We do not charge brokerage fees.</li>
            </ol>
        </div>
    );
};

export default About;