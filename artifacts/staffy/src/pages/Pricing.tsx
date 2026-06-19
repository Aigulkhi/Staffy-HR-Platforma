import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-secondary/20 pb-20">
      <Navbar title="Тарифы" />
      
      <main className="container mx-auto px-4 pt-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">Тарифы Staffy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Выберите план для вашего ресторана. Прозрачные цены без скрытых платежей.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Basic Plan */}
          <Card className="border-primary shadow-md relative overflow-hidden flex flex-col h-full bg-white">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              Популярный
            </div>
            <CardHeader className="pb-8 pt-8">
              <CardTitle className="text-2xl mb-2">Staffy Basic</CardTitle>
              <CardDescription className="text-base">Идеально для одного заведения</CardDescription>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold tracking-tight">1 990 ₽</span>
                <span className="text-muted-foreground font-medium">/мес</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                {[
                  "До 30 сотрудников",
                  "Курсы адаптации",
                  "Расписание смен",
                  "Базовая аналитика",
                  "Поддержка 8/5"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <div className="bg-primary/10 p-1 rounded-full text-primary">
                      <Check className="w-4 h-4" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-8 pb-8">
              <Link href="/payment-success" className="w-full">
                <Button size="lg" className="w-full text-md py-6" data-testid="btn-pay-basic">
                  Оплатить
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="border-transparent shadow-sm hover:shadow-md transition-shadow flex flex-col h-full bg-white/60">
            <CardHeader className="pb-8 pt-8">
              <CardTitle className="text-2xl mb-2 text-foreground/80">Staffy Pro</CardTitle>
              <CardDescription className="text-base">Для растущих сетей</CardDescription>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold tracking-tight text-foreground/80">4 990 ₽</span>
                <span className="text-muted-foreground font-medium">/мес</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                  <div className="bg-muted p-1 rounded-full text-muted-foreground">
                    <Check className="w-4 h-4" />
                  </div>
                  Все из Basic +
                </li>
                {[
                  "Неограниченно сотрудников",
                  "Продвинутая аналитика",
                  "API интеграции",
                  "Поддержка 24/7"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                    <div className="bg-muted p-1 rounded-full text-muted-foreground">
                      <Check className="w-4 h-4" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-8 pb-8">
              <Link href="/payment-success" className="w-full">
                <Button variant="outline" size="lg" className="w-full text-md py-6 border-muted-foreground/30 hover:bg-muted" data-testid="btn-pay-pro">
                  Оплатить
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
