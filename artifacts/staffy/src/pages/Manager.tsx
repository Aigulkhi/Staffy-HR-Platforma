import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Link } from "wouter";
import { Users, UserCheck, AlertTriangle, AlertCircle, Star, Sparkles } from "lucide-react";

const employees = [
  { id: 1, name: "Анна Смирнова", role: "Официант", status: "green", progress: 100, rating: 4.8, shift: "Сегодня 16:00" },
  { id: 2, name: "Дмитрий Козлов", role: "Бармен", status: "green", progress: 100, rating: 4.7, shift: "Завтра 12:00" },
  { id: 3, name: "Мария Иванова", role: "Хостес", status: "green", progress: 100, rating: 4.9, shift: "Сегодня 18:00" },
  { id: 4, name: "Алексей Петров", role: "Официант", status: "yellow", progress: 65, rating: 3.9, shift: "Послезавтра 14:00" },
  { id: 5, name: "Екатерина Волкова", role: "Бармен", status: "green", progress: 100, rating: 4.6, shift: "Сегодня 20:00" },
  { id: 6, name: "Сергей Новиков", role: "Официант", status: "yellow", progress: 40, rating: 3.5, shift: "Завтра 16:00" },
  { id: 7, name: "Ольга Морозова", role: "Хостес", status: "red", progress: 20, rating: 2.8, shift: "Нет смен" },
  { id: 8, name: "Павел Соколов", role: "Официант", status: "yellow", progress: 55, rating: 3.7, shift: "Завтра 18:00" },
];

const statusConfig = {
  green: { label: "Зелёная", className: "bg-green-100 text-green-700 border-green-200" },
  yellow: { label: "Жёлтая", className: "bg-amber-100 text-amber-700 border-amber-200" },
  red: { label: "Красная", className: "bg-red-100 text-red-700 border-red-200" },
};

export default function ManagerPanel() {
  return (
    <div className="min-h-screen bg-secondary/20 pb-20">
      <Navbar title="Панель менеджера" />
      
      <main className="container mx-auto px-4 pt-8 max-w-6xl">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Обзор команды</h1>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="border-none shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Всего сотрудников</p>
                <p className="text-3xl font-bold">24</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <UserCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Зелёная зона</p>
                <p className="text-3xl font-bold">16</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-amber-100 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Жёлтая зона</p>
                <p className="text-3xl font-bold">6</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Красная зона</p>
                <p className="text-3xl font-bold">2</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Funnel */}
          <Card className="lg:col-span-1 border-none shadow-sm">
            <CardHeader>
              <CardTitle>Воронка кандидатов</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-muted-foreground">Новые заявки</span>
                  <span className="font-bold">12</span>
                </div>
                <Progress value={100} className="h-2 bg-secondary [&>div]:bg-primary" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-muted-foreground">На собеседовании</span>
                  <span className="font-bold">7</span>
                </div>
                <Progress value={(7/12)*100} className="h-2 bg-secondary [&>div]:bg-primary/80" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-muted-foreground">Оффер отправлен</span>
                  <span className="font-bold">3</span>
                </div>
                <Progress value={(3/12)*100} className="h-2 bg-secondary [&>div]:bg-primary/60" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-muted-foreground">Приняли оффер</span>
                  <span className="font-bold">2</span>
                </div>
                <Progress value={(2/12)*100} className="h-2 bg-secondary [&>div]:bg-primary/40" />
              </div>
            </CardContent>
          </Card>

          {/* Table */}
          <Card className="lg:col-span-2 border-none shadow-sm overflow-hidden">
            <CardHeader>
              <CardTitle>Сотрудники</CardTitle>
            </CardHeader>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-secondary/50">
                  <TableRow className="border-none hover:bg-transparent">
                    <TableHead>Имя</TableHead>
                    <TableHead>Должность</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Адаптация</TableHead>
                    <TableHead>Рейтинг</TableHead>
                    <TableHead>След. смена</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((emp) => (
                    <TableRow key={emp.id} className="border-b-secondary/50 border-b">
                      <TableCell className="font-medium">{emp.name}</TableCell>
                      <TableCell className="text-muted-foreground">{emp.role}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={`${statusConfig[emp.status as keyof typeof statusConfig].className} px-2 py-0.5 whitespace-nowrap`}>
                          {statusConfig[emp.status as keyof typeof statusConfig].label}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={emp.progress} className="w-16 h-1.5" />
                          <span className="text-xs text-muted-foreground w-8">{emp.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center gap-1 text-sm font-medium">
                          <Star className={`w-3 h-3 ${emp.rating >= 4.5 ? "text-amber-500 fill-amber-500" : "text-muted-foreground"}`} />
                          {emp.rating}
                        </span>
                      </TableCell>
                      <TableCell className="text-sm whitespace-nowrap">{emp.shift}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/pricing">
            <Button size="lg" className="px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-shadow gap-2 bg-gradient-to-r from-primary to-primary/80" data-testid="btn-to-pricing">
              <Sparkles className="w-5 h-5" /> Подключить тариф
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
