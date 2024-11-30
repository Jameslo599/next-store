function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center sm:flex-row h-16 w-full bg-slate-800 text-center text-sm md:text-base">
      <div className="sm:mr-8">
        <span>
          Developed by
          <a
            href="https://www.jameshlo.com/"
            target="_blank"
            rel="noreferrer"
            className="text-violet-300 hover:text-violet-100"
          >
            {' '}
            James H Lo
          </a>
        </span>
      </div>
      <p>
        © 2024 <span>African Violet Society of America</span>
      </p>
    </footer>
  );
}
export default Footer;
