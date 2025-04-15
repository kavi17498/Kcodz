import React from 'react';

function Cards({ project }) {
  return (
    <div className="card w-96 bg-gray-900 text-white shadow-md hover:shadow-sky-500/50 transition-transform hover:scale-105 duration-300 border border-orange-300 hover:border-[#FF914C]">
      
      {/* Top Image */}
      <figure>
        <img
          src={project.imageUrl} // Dynamic image source
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p className="text-gray-300">{project.description}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="badge bg-[#FF914C] text-white">{tech}</span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="card-actions justify-end mt-4">
        <a href={project.link} >
        <button className="btn btn-sm text-white border border-transparent hover:border-[#FF914C] hover:text-[#FF914C] bg-[#FF914C] hover:bg-transparent transition-all duration-300">
  View Project
</button>

          </a>
          <a
            href={project.infolink} // Dynamic link
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm border-[#FF914C]  text-[#FF914C]  hover:bg-[#ffb44c]  hover:text-white"
          >
            More Info
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
