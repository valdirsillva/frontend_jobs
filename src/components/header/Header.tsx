import { Button } from '../../components/button/Button';

export function Header() {
  return (
    <header className="w-full fixed bg-white top-0 flex items-center border-solid border-b-[2px] h-24 z-10">
      <nav className="w-full flex items-center justify-between px-20">
        <img src="./logo.svg" className="w-24 ml-10" />
        <Button />
      </nav>
    </header>
  );
}
