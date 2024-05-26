
export default function Footer() {
    const current_year = new Date();
  return (
    <footer className="text-dark text-sm p-5 border-t border-gray-400 flex flex-col justify-between items-end lg:flex-row lg:px-16 gap-8">
      <div className=" flex flex-col gap-2 items-start">
        <img src="/logo.svg" />
        <p className="font-medium">
          Furry Friends is my final project for<br /> the alx software engineering
          programme.
        </p>
      </div>
      <div>
        <p class>Built with love ❤️. © {current_year.getFullYear()} Hamida Mahama</p>
      </div>
      <div>
        <ul className="flex flex-col lg:flex-row gap-8">
            <li><a className="underline lg:no-underline lg:hover:underline" href="https://www.linkedin.com/in/hamidamahama/">LINKEDIN</a></li>
            <li><a className="underline lg:no-underline lg:hover:underline" href="https://www.linkedin.com/in/hamidamahama/">GITHUB</a></li>
            <li><a className="underline lg:no-underline lg:hover:underline" href="https://www.linkedin.com/in/hamidamahama/">TWITTER</a></li>
        </ul>
      </div>
    </footer>
  );
}
