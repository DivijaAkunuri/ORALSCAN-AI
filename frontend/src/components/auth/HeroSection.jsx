import { ShieldCheck, Clock3, Brain } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="hidden lg:flex flex-col justify-between bg-gradient-to-b from-[#0F4F80] to-[#2D7DC5] p-14 text-white">
      
      <div>
        <div className="flex items-center gap-3 mb-16">
          <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center">
            <ShieldCheck size={20} />
          </div>

          <div>
            <h1 className="font-bold text-xl">
              OralScan AI
            </h1>

            <p className="text-sm text-blue-100">
              Oral Cancer Detection
            </p>
          </div>
        </div>

        <h2 className="text-5xl font-bold leading-tight">
          Early Detection
          <br />
          Saves Lives
        </h2>

        <p className="mt-8 text-blue-100 text-lg max-w-lg leading-relaxed">
          AI-powered oral cancer screening using deep learning
          and advanced image analysis. Supporting healthcare
          professionals with rapid and accurate diagnostics.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">
          <Brain className="mb-4" />

          <h3 className="text-3xl font-bold">
            94.2%
          </h3>

          <p className="text-sm text-blue-100">
            Model Accuracy
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">
          <Clock3 className="mb-4" />

          <h3 className="text-3xl font-bold">
            &lt;30s
          </h3>

          <p className="text-sm text-blue-100">
            Analysis Time
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">
          <ShieldCheck className="mb-4" />

          <h3 className="text-3xl font-bold">
            3-Class
          </h3>

          <p className="text-sm text-blue-100">
            Detection
          </p>
        </div>

      </div>
    </div>
  );
}