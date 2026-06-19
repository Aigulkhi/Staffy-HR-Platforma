import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "wouter";
import { CalendarClock, Star, Trophy, ArrowRight, ShieldCheck, Flame } from "lucide-react";

export default function EmployeeDashboard() {
  return (
    <div className="min-h-screen bg-secondary/20 pb-20">
      <Navbar title="Личный кабинет" />
      
      <main className="container mx-auto px-4 pt-8 max-w-5xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16 border-2 border-primary/20">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary/10 text-primary text-xl font-bold">АС</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground">Анна Смирнова</h1>
              <p className="text-muted-foreground">Официант • Зал A</p>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100 hover:text-green-800 border-none px-3 py-1 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 inline-block"></span>
            Зелёная зона
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Progress Card */}
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
                Прогресс адаптации
                <span className="text-foreground font-bold text-lg">100%</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={100} className="h-2 bg-secondary [&>div]:bg-green-500" />
              <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-green-500" /> Базовый курс завершен
              </p>
            </CardContent>
          </Card>

          {/* Next Shift Card */}
          <Card className="border-none shadow-sm bg-primary text-primary-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-primary-foreground/80 flex items-center gap-2">
                <CalendarClock className="w-4 h-4" /> Следующая смена
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">Сегодня, 16:00–23:00</div>
              <p className="text-primary-foreground/80 text-sm">Зал A • Вечерняя смена</p>
            </CardContent>
          </Card>

          {/* Rating Card */}
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Рейтинг сотрудника
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-3xl font-bold flex items-center gap-1">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-400" /> 4.8
                </span>
                <span className="text-sm text-muted-foreground pb-1">из 5.0</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Основано на 12 оценках гостей</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-xl font-bold mb-4 tracking-tight">Достижения</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <Card className="border-none shadow-sm bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100/50">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Trophy className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <p className="font-bold text-amber-900">Новичок Staffy</p>
                <p className="text-xs text-amber-700/80">Курс пройден</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-gradient-to-br from-red-50 to-rose-50 border border-red-100/50">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Flame className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <p className="font-bold text-red-900">5 смен подряд</p>
                <p className="text-xs text-red-700/80">Без опозданий</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Star className="w-6 h-6 text-blue-500 fill-blue-500/20" />
              </div>
              <div>
                <p className="font-bold text-blue-900">Лучший месяц</p>
                <p className="text-xs text-blue-700/80">Топ-3 по чаевым</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center border-t pt-10">
          <Link href="/manager">
            <Button size="lg" className="px-8 gap-2" data-testid="btn-to-manager">
              Перейти в панель менеджера <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
