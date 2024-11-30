function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center sm:flex-row h-16 w-full bg-foreground text-center text-background text-sm md:text-base border-t-[1px] border-t-violet-500">
      <div className="sm:mr-8">
        <span>
          Developed by
          <a
            href="https://www.jameshlo.com/"
            target="_blank"
            rel="noreferrer"
            className=" hover:text-primary"
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
