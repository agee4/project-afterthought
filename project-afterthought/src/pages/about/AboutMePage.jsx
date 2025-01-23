// AboutMePage.jsx
import GradImg from '../../assets/aarongeenicegradphoto.jpg'
import NiceProfileImg from '../../assets/aarongeenicephoto.jpg'

const AboutMePage = () => {
    return (
        <div className={'titleContainer'}>
            <h1>
                Who are you?
            </h1>
            <p>
                Hi there! My name is <b>Aaron Gee</b>!
            </p>
            <img src={GradImg} width="500"></img>
            <p>
                I am a Computer Science & Engineering graduate from University of California, Irvine.
                I enjoy learning, practicing, and teaching others the wonders of computers, from coding 
                to building them. I hope to use the skills God has given me to glorify His name and improve 
                the lives of others around me!
            </p>
        </div>    
    )
}

export default AboutMePage