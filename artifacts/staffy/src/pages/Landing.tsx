import { Navbar } from "@/components/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Users, BookOpen, Calendar, BarChart3, TrendingDown } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar showAuth />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-secondary/30">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Снизьте текучесть персонала и <span className="text-primary">ускорьте адаптацию сотрудников</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Умная HR-платформа для ресторанного бизнеса. Найм, обучение, смены и аналитика — всё в одном месте.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto text-md px-8" })} data-testid="button-hero-register">
                Начать бесплатно
              </Link>
              <Link href="/login" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto text-md px-8" })} data-testid="button-hero-login">
                Войти
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 border-y">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary mb-2">47%</span>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">снижение текучести</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary mb-2">2.3x</span>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">быстрее адаптация</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary mb-2">500+</span>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">ресторанов</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="shadow-sm hover:shadow-md transition-shadow border-none bg-secondary/50">
                <CardContent className="p-6 flex flex-col items-start text-left">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Найм</h3>
                  <p className="text-muted-foreground">Воронка кандидатов с автоматическим отбором и приглашением на собеседование.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-shadow border-none bg-secondary/50">
                <CardContent className="p-6 flex flex-col items-start text-left">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Обучение</h3>
                  <p className="text-muted-foreground">Курсы адаптации с прогрессом и бейджами для новых сотрудников зала и кухни.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-shadow border-none bg-secondary/50">
                <CardContent className="p-6 flex flex-col items-start text-left">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Смены</h3>
                  <p className="text-muted-foreground">Расписание смен с уведомлениями и автоматическим контролем переработок.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-shadow border-none bg-secondary/50">
                <CardContent className="p-6 flex flex-col items-start text-left">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <BarChart3 className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Аналитика</h3>
                  <p className="text-muted-foreground">Дашборд метрик команды, контроль производительности и качества сервиса.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-shadow border-none bg-secondary/50">
                <CardContent className="p-6 flex flex-col items-start text-left">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingDown className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Текучесть</h3>
                  <p className="text-muted-foreground">Прогнозирование и снижение оттока персонала на основе данных опросов.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="font-bold text-2xl text-primary tracking-tight">
            Staffy
          </Link>
          <p className="text-sm text-muted-foreground mt-4">© {new Date().getFullYear()} Staffy HR. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
