
import aboutmePhoto from '@/assets/KM_aboutme.jpeg';

export function Aboutme(): JSX.Element {
    return (
        <div className='container home__container'>
            <h1 className="home__title" >Kamil MARKOWSKI</h1>
            <p className='home__text'>
                I am a passionate web developer with a background in linguistics and a keen interest in technology. With a solid foundation in languages like HTML, CSS, JavaScript, and experience in frameworks such as React and Bootstrap, I am currently focused on expanding my skills in front-end design. My academic journey, which includes a Master's in French Linguistics and extensive studies in Philology, has honed my analytical thinking and problem-solving abilities. Trilingual in Polish, French, and English, I excel in cross-cultural communication and enjoy collaborating on innovative projects that bridge the gap between language and technology.
            </p>
            <img src={aboutmePhoto} className="about__photo" alt="my portrait"></img>
        </div>
    );
}