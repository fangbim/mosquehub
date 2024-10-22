import { amiri } from "../lib/fonts";

// components.js
export const components = {
    h1: (props) => <h1 className="text-4xl font-bold my-4" {...props} />,
    h2: (props) => <h2 className="text-3xl font-semibold mt-4" {...props} />,
    h3: (props) => <h3 className="text-2xl font-semibold mt-3" {...props} />,
    p: (props) => <p className="my-2 font-light text-gray-700 text-justify" {...props} />,
    ul: (props) => <ul className="list-disc pl-5 my-4" {...props} />,
    ol: (props) => <ol className="list-decimal pl-5 my-4" {...props} />,
    li: (props) => <li className="my-2" {...props} />,
    blockquote: (props) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
    ),
    strong: (props) => <strong className="font-semibold" {...props} />,
    em: (props) => <em className="font-light" {...props} />,
    ArabicText: ({ children, size = 'text-base', align = 'text-right' }) => (
        <h3 className={`${size} ${align} ${amiri.className} text-2xl md:text-3xl leading-[3rem] lg:leading-[7rem] `}>
            {children}
        </h3>
    ),
};
