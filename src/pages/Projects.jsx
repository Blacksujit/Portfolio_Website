import { Link } from "react-router-dom";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow, github } from "../assets/icons"; // Assuming you have a GitHub icon in your assets
import styles from '../../src/styles/Projects.css'; // Adjust path as needed

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-700 mt-2 leading-relaxed text-lg'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. I have also done open-source contributions which makes me more reliable in any tech stack, so if you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <div
                className={`${styles.descriptionPoints} mt-2 text-slate-700 text-lg`}
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
              <div className='mt-5 flex items-center gap-4 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600 flex items-center'
                >
                  Live Link
                  <img
                    src={arrow}
                    alt='arrow'
                    className='w-4 h-4 object-contain ml-1'
                  />
                </Link>
                <Link
                  to={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600 flex items-center'
                >
                  GitHub
                  <img
                    src={github}
                    alt='github'
                    className='w-4 h-4 object-contain ml-1'
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-300' />

      <CTA />
    </section>
  );
};

export default Projects;
