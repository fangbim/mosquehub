
import { compileMDX } from 'next-mdx-remote/rsc'
import {promises as fs} from 'fs';
import path from 'path';
import Navbar from "../../components/lp/Navbar";
import { roboto } from "../../lib/fonts";
import Image from "next/image";
import { components } from '../../components/mdx-components';
import Footer from '../../components/lp/Footer';

export async function generateMetadata({ params }: { params: { slug : string }}) {
  const konten = await fs.readFile(path.join(process.cwd(), 'app/data/content', `${params.slug}.mdx`), 'utf-8');
  interface Frontmatter{
    title: string
  }
  const data = await compileMDX<Frontmatter>({
    source: konten,
    options: {
      parseFrontmatter: true
    }
  })
  return {
    title: `Belajar Islam - ${data.frontmatter.title}`
  }
}

export default async function LearningDetail({ params }: { params: { slug : string }}) {

  const konten = await fs.readFile(path.join(process.cwd(), 'app/data/content', `${params.slug}.mdx`), 'utf-8');
  interface Frontmatter{
    title: string,
    imgURL: string
  }
  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source: konten,
    options: {
      parseFrontmatter: true
    },
    components: components
  })

  const sTitle = frontmatter.title.split(' ')[0];
  const bTitle = frontmatter.title.split(' ').slice(1).join(' ');


  return (
    <>
      <Navbar />
      <div className="flex flex-col mx-1 md:mx-64 py-10">
        <div className="relative flex flex-col justify-center items-center w-full h-[431px] bg-[#F9F9F9] rounded-2xl overflow-hidden">
          <div className="absolute bottom-0 left-0 py-6 px-6 md:px-12 z-10 w-full lg::w-2/4 bg-gradient-to-t from-black to-transparent ">
            <h1 className={`${roboto.className} text-4xl md:text-5xl font-bold leading-tight tracking-wide text-white`}>
              <span className="font-light text-2xl md:text-3xl">{sTitle}<br/></span>
              {bTitle}
            </h1>
          </div>
          <div className="w-full h-full">
            <Image
              src={frontmatter.imgURL}
              alt={frontmatter.title}
              width={1080}
              height={1080}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className={`${roboto.className} mx-6 md:mx-12 my-3 md:my-9`}>
          {content}
        </div>
      </div>
      <Footer />
    </>
  );
}
