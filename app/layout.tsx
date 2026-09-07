import "./globals.css";

export const metadata = {
  title: "QuantumLab — SIH26140",
  description: "AI-Based Interactive Quantum Algorithm Learning Platform"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}