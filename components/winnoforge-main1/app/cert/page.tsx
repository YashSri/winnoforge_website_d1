import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function CertLandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-indigo-50 via-gray-50 to-emerald-50">
      <div className="bg-white rounded-2xl max-w-lg w-full p-12 shadow-xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 text-indigo-600 mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>

        <h1 className="text-3xl font-bold mb-3 tracking-tight text-gray-900">
          Certificate Verification
        </h1>
        <p className="text-gray-500 mb-10 text-lg">
          Issue, manage, and verify digital certificates with secure QR codes.
        </p>

        <div className="flex flex-col gap-4">
          <Link
            href="/cert/admin"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-br from-indigo-600 to-indigo-500 text-white font-semibold rounded-lg hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
          >
            Admin Dashboard &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
