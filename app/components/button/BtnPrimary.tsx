export default function BTNPrimary({ children }) {
  return (
    <div className="py-3 px-6 bg-secondary rounded-[38px] hover:bg-primary text-white font-medium cursor-pointer text-sm md:text-lg text-center">
      {children}
    </div>
  );
}
