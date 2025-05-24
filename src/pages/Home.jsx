import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

export const projects = [
  {
    id: 1,
    title: 'ICT Panthiya',
    description: 'ICT Panthiya is android app that helps students to learn ICT.',
    tech: ['Flutter', 'Firebase'],
    status: 'In Progress',
    imageUrl: '/ictclass.png',
    link: 'https://mypetdoctor.kcodz.com',
    infolink:"projectinfo/1"
  },
  {
    id: 2,
    title: 'AiPazz',
    description: 'Aipazz is the platform that serve all the services lawyer need',
    tech: ['React', 'ASP.NET', 'Azure','Tailwind'],
    status: 'Deployed',
    imageUrl: '/aipazz.webp',
    link: 'https://aipazz-hpdeeff5aedva6f2.canadacentral-01.azurewebsites.net/',
    infolink:""
  },
];

function Home() {
  return (
    <>
      {/* Navbar */}
      

      {/* Hero / Landing */}
      <section id="hero" className="min-h-screen">
        <Hero />
      </section>

     

      {/* Projects Section */}
      <section id="projects" className="w-full px-4 py-10 bg-gray-900 text-white rounded-2xl shadow-lg mx-auto max-w-7xl mt-10">
  <h2 className="text-3xl font-bold text-center mb-8">Latest Projects</h2>
  <div className="flex flex-wrap justify-center gap-6">
    {projects.map((project, idx) => (
      <Cards key={idx} project={project} />
    ))}
  </div>
</section>

<Footer />


      {/* You can add more sections below like: About, Contact, Footer etc. */}
    </>
  );
}

export default Home;
