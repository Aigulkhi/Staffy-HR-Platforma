import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCheck, BookOpen, Star, CheckCircle2, Lock, Trophy } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export default function Course() {
  const [completed, setCompleted] = useState([false, false, false]);
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const completedCount = completed.filter(Boolean).length;
  const progress = (completedCount / 3) * 100;
  const allCompleted = completedCount === 3;

  const handleStart = (index: number) => {
    setActiveModule(index);
  };

  const handleFinish = (index: number) => {
    const newCompleted = [...completed];
    newCompleted[index] = true;
    setCompleted(newCompleted);
    setActiveModule(null);
  };

  const modules = [
    {
      title: "Приветствие гостя",
      icon: <UserCheck className="w-6 h-6" />,
      description: "Как встречать гостей, правила первого контакта, улыбка как инструмент сервиса",
      content: [
        "Зрительный контакт в первые 5 секунд",
        "Приветствие с улыбкой: «Добрый день, рады видеть вас!»",
        "Уточнение брони или предпочтений по столику",
        "Проводы до стола и подача меню в открытом виде",
      ],
    },
    {
      title: "Знание меню",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Состав блюд, аллергены, рекомендации по сочетаниям, специальные предложения",
      content: [
        "Основные стоп-листы и популярные аллергены",
        "Техника «Елочка» при рекомендации блюд",
        "Пейринг: идеальные напитки к стейкам и рыбе",
        "Как правильно предлагать десерт",
      ],
    },
    {
      title: "Стандарты сервиса",
      icon: <Star className="w-6 h-6" />,
      description: "Скорость подачи, температура блюд, работа с жалобами, командное взаимодействие",
      content: [
        "Правило открытой руки при подаче",
        "Чек-бэк: когда и как спрашивать о качестве блюд",
        "Алгоритм LAST при работе с недовольным гостем",
        "Передача стола коллеге при окончании смены",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-secondary/20 pb-20">
      <Navbar title="Обучение" />
      
      <main className="container mx-auto px-4 pt-8 max-w-2xl">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold tracking-tight">Курс новичка</h1>
            <span className="text-sm font-medium text-muted-foreground">{Math.round(progress)}% завершено</span>
          </div>
          <Progress value={progress} className="h-3 bg-secondary" />
        </div>

        <div className="space-y-6">
          {modules.map((mod, idx) => {
            const isCompleted = completed[idx];
            const isLocked = idx > 0 && !completed[idx - 1];
            const isActive = activeModule === idx;

            return (
              <Card 
                key={idx} 
                className={`transition-all duration-300 border-none shadow-sm ${
                  isLocked ? "opacity-60 bg-muted/50" : isCompleted ? "bg-primary/5 border-l-4 border-l-primary" : "hover:shadow-md"
                }`}
              >
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className={`p-3 rounded-xl flex-shrink-0 ${isCompleted ? "bg-primary text-primary-foreground" : isLocked ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary"}`}>
                    {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : isLocked ? <Lock className="w-6 h-6" /> : mod.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{mod.title}</CardTitle>
                    <CardDescription className="text-sm">{mod.description}</CardDescription>
                  </div>
                </CardHeader>
                
                {!isLocked && !isCompleted && !isActive && (
                  <CardFooter>
                    <Button onClick={() => handleStart(idx)} className="w-full sm:w-auto" data-testid={`btn-start-${idx}`}>
                      Начать модуль
                    </Button>
                  </CardFooter>
                )}

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <CardContent className="pt-0 pb-6 border-t mt-4">
                        <div className="py-6 px-4 bg-muted/30 rounded-lg mt-4 mb-6">
                          <h4 className="font-semibold mb-3">Ключевые стандарты:</h4>
                          <ul className="space-y-2">
                            {mod.content.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <span className="text-primary mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button onClick={() => handleFinish(idx)} className="w-full" size="lg" data-testid={`btn-finish-${idx}`}>
                          Завершить модуль
                        </Button>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>

                {isCompleted && (
                  <CardFooter className="pt-0">
                    <span className="text-sm text-primary font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Пройдено
                    </span>
                  </CardFooter>
                )}
              </Card>
            );
          })}
        </div>

        <AnimatePresence>
          {allCompleted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12"
            >
              <div className="bg-green-50 text-green-800 p-4 rounded-lg font-medium text-center mb-6 shadow-sm border border-green-100 flex items-center justify-center gap-2 text-lg">
                <span className="text-2xl">🎉</span> Адаптация завершена!
              </div>
              
              <Card className="border-none shadow-md overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-amber-200">
                    <Trophy className="w-12 h-12 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">Новичок Staffy</h3>
                  <p className="text-amber-700/80 mb-8 max-w-sm">
                    Вы успешно прошли базовый курс адаптации. Этот бейдж добавлен в ваш профиль.
                  </p>
                  
                  <Link href="/employee-dashboard" className="w-full">
                    <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white" data-testid="btn-to-dashboard">
                      Перейти в личный кабинет
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
