import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Login() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // For demo purposes, simply redirect to the employee dashboard
    setLocation("/employee-dashboard");
  }, [setLocation]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30">
      <p className="text-muted-foreground">Вход в систему...</p>
    </div>
  );
}
