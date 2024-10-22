import {promises as fs} from 'fs';
import path from 'path';
import CardLearning from "../components/CardLearning";
import Navbar from "../components/lp/Navbar";
import { pOne } from "../lib/fonts";
import { compileMDX } from 'next-mdx-remote/rsc';
import Footer from '../components/lp/Footer';

export default async function Page() {
  const filenames = await fs.readdir(path.join(process.cwd(), 'app/data/content'))

  const projects = await Promise.all(filenames.map( async (filename) => {
    const konten = await fs.readFile(path.join(process.cwd(), 'app/data/content', filename), 'utf-8');
    
    const { frontmatter } = await compileMDX<{title: string, category: string, description : string, imgURL : string}>({
      source: konten,
      options: {
        parseFrontmatter: true
      }
  })
  return {
    filename,
    slug: filename.replace('.mdx', ''),
    ...frontmatter
  }
  }))

  return (
    <>
      <Navbar />
      <div className="mx-5 md:mx-32 mb-24">
        <div className="flex flex-col md:flex-row my-8 justify-center md:justify-between items-center md:items-end">
          <h1
            className={`${pOne.className} text-5xl md:text-8xl text-start justify-start`}
          >
            Belajar Islam
          </h1>
        </div>
        <div className="w-full h-[1px] bg-black"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 items-center justify-center min-w-full">
          {projects.map((project) => (
            <CardLearning key={project.title} title={project.title} category={project.category} description={project.description} imgURL={project.imgURL} />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}
