import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CircleCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
        >
          <Card className="w-full max-w-md border-none shadow-xl bg-white text-center overflow-hidden">
            <CardContent className="p-10">
              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <CircleCheck className="w-24 h-24 text-green-500" />
                </motion.div>
              </div>
              
              <h1 className="text-3xl font-bold tracking-tight mb-2 text-foreground">Оплата прошла успешно!</h1>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-6 bg-primary/10 inline-block px-3 py-1 rounded-full">
                Демонстрационный режим
              </p>
              
              <p className="text-muted-foreground text-base leading-relaxed mb-10">
                Ваш тариф <span className="font-semibold text-foreground">Staffy Basic</span> подключён. Теперь вы можете управлять командой ресторана в полном объёме.
              </p>

              <Link href="/" className="w-full">
                <Button size="lg" className="w-full py-6 text-md rounded-xl" data-testid="btn-back-home">
                  Вернуться на главную
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
