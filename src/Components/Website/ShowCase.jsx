import { Link } from "react-router-dom";
import showCaseImage from "../../assets/showcaseImage.png"
import { TypeAnimation } from 'react-type-animation';

function ShowCase() {

    return <div id="showcase" className="max-w[1400px] h-[480px] w-full sm:flex justify-center gap-20 m-auto py-5 px-4 mt-20">
        <div className="sm:mt-20 max-w-[500px] m-auto">
            <p className="text-3xl sm:font-semibold sm:pl-10 pl-5 text-primeryColor sm:leading-relaxed">Every drop of blood donated is a lifeline extended, <br />
                a gift of hope <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        ' that transcends',
                        3000, // wait 1s before replacing "Mice" with "Hamsters"
                        ' boundaries',
                        3000,
                        ' and saves lives.',
                        3000
                    ]}
                    wrapper="span"
                    speed={60}
                    style={{ fontSize: '32px', display: 'inline-block' }}
                    repeat={Infinity}
                /> </p>
            <div className="mt-12 ml-10 sm:mb-0 mb-5">
                <Link to="/donateblood" className="bg-primeryColor px-6 py-4 rounded-md text-textColor text-xl">Donate Blood Here <i class="fa-solid pl-3 fa-arrow-right"></i></Link>
            </div>
        </div>

        <div className="sm:mt-0 mt-16">
            <img className="w-[45em] rounded-lg" src={showCaseImage} />
        </div>

    </div>
}

export default ShowCase