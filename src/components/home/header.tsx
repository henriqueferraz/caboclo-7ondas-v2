import { Logo } from "@/components/home/logo";
import { ThemeToggle } from "@/components/home/theme-toggle";
import { ButtonAdm } from "@/components/home/buttonAdm";

export function Header() {
    return (
        <header className="flex justify-between items-center my-5 mx-3">
            <div className="flex items-center gap-3">
                <ThemeToggle />
                <Logo />
            </div>
            <div className="flex items-center gap-3">
                <ButtonAdm />
            </div>
        </header>
    )
}