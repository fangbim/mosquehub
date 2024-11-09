import { on } from "events";
import { useRouter } from "next/navigation";

export default function BTNPrimary({ children, path = '', onClick}) {
  const route = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
      return
    } 
    route.push(path);
  }
  
  return (
    <button onClick={handleClick} className="py-3 px-3 sm:px-6 bg-secondary rounded-lg hover:bg-primary text-white font-medium cursor-pointer text-sm md:text-lg text-center">
        {children}
    </button>
    
  );
}
