import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  const socials = [
    {
      color: "bg-black",
      icon: <FontAwesomeIcon icon={faGithub} />,
      link: "https://github.com/cesar-daniel15",
    },
    {
      color: "bg-blue-600",
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      link: "www.linkedin.com/in/cesar-daniel15",
    },
    {
      color: "bg-pink-500",
      icon: <FontAwesomeIcon icon={faInstagram} />,
      link: "https://instagram.com",
    },
    {
      color: "bg-purple-600",
      icon: <FontAwesomeIcon icon={faDiscord} />,
      link: "https://discord.com/users/543916819292094506",
    },
    {
      color: "bg-red-500",
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      link: "mailto:cesardaniel.contacto@gmail.com",
    },
  ];
  const links = [
    {
      color: "bg-red-400",
      text: "My Portfolio ☕",
      link: " ",
    },
    {
      color: "bg-blue-400",
      text : "New Project Out 🚀",
      link: " ",
    },
    {
      color: "bg-green-400",
      text : "Do you want to hire me? 🤔",
      link: "https://www.freelancer.com/",
    },
    {
      color: "bg-orange-400",
      text : "Check my blog 🗒️",
      link: " ",
    },
  ];

  return (
    
      <div className="w-full h-screen bg-yellow-300 flex justify-center items-center">
        <div className="max-w-2xl mx-auto flex flex-col gap-5">
          <div className="h-48 w-48 mx-auto">
            <img src="https://avatars.githubusercontent.com/u/127888297?v=4" alt="Logo" className="rounded-full" />
          </div>
          
          <div className="text-center p-3">
            <h1 className="text-4xl font-bold">cesar-daniel15</h1>
            <p className="text-lg mt-3">Hello, I'm a junior web developer</p>
          </div>

        <div className="flex flex-row mx-auto gap-3 mb-3">
          {socials.map(({color,icon,link}, index) => {
            return (
              <a href={link} key={index} target="_blanck" className={` ${color} px-3 py-2 rounded-full text-white transform transition-transform duration-300 hover:scale-125`}>
                <div className="text-2xl">{icon}</div>
              </a>
            );
          })}
        </div>

        <div className=" flex flex-col gap-10">
          {links.map(({text,color,link},index) => {
            return (
              <a href={link} key={index} target="_blanck">
                <div className={`w-80 sm:w-96 mx-auto ${color} text-center text-xl font-bold py-3 border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1`}> 
                  {text}
                </div>
              </a>
            );
          })}
        </div>

        </div>
      </div>
  );
}