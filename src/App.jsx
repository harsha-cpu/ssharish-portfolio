import { motion } from "framer-motion";
import { Cloud, Server, ShieldCheck } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-red-600">
          SSHarish
        </h1>
        <p className="mt-4 text-xl">
          AWS DevOps Engineer | Kubernetes | CI/CD | Platform Engineering
        </p>
      </section>

      {/* Skills */}
      <section className="px-10 py-16">
        <h2 className="text-3xl text-red-500 mb-8">Skills</h2>

        {[
          { name: "AWS", level: 95 },
          { name: "Kubernetes", level: 90 },
          { name: "Terraform", level: 88 },
          { name: "CI/CD", level: 92 },
        ].map((s, i) => (
          <div key={i} className="mb-6">
            <p>{s.name}</p>
            <div className="w-full bg-gray-800 h-3 rounded">
              <motion.div
                className="bg-red-600 h-3 rounded"
                initial={{ width: 0 }}
                animate={{ width: `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="px-10 py-16 bg-neutral-900">
        <h2 className="text-3xl text-red-500 mb-8">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-red-700 rounded-xl">
            <Cloud size={32} />
            <h3>EKS Platform</h3>
            <p>AWS EKS GitOps platform using Terraform & ArgoCD.</p>
          </div>

          <div className="p-6 border border-red-700 rounded-xl">
            <Server size={32} />
            <h3>CI/CD Automation</h3>
            <p>Jenkins & GitHub Actions deployment pipelines.</p>
          </div>

          <div className="p-6 border border-red-700 rounded-xl">
            <ShieldCheck size={32} />
            <h3>DevSecOps</h3>
            <p>Security scanning with Trivy & SonarQube.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
