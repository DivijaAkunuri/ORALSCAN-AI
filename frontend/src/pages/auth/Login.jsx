import HeroSection from "../../components/auth/HeroSection";
import LoginForm from "../../components/auth/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <HeroSection />
      <LoginForm />
    </div>
  );
}