import { Link } from "wouter";
import { buttonVariants } from "@/components/ui/button";

export function Navbar({ showAuth = false, title }: { showAuth?: boolean; title?: string }) {
  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl text-primary tracking-tight" data-testid="link-home">
            Staffy
          </Link>
          {title && <span className="text-sm font-medium text-muted-foreground border-l pl-6 hidden sm:inline-block">{title}</span>}
        </div>
        
        {showAuth && (
          <div className="flex items-center gap-3">
            <Link href="/login" className={buttonVariants({ variant: "ghost", size: "sm" })} data-testid="link-login">
              Войти
            </Link>
            <Link href="/register" className={buttonVariants({ variant: "default", size: "sm" })} data-testid="link-register">
              Начать бесплатно
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
