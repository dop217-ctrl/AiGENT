export const metadata = {
  title: "AiGENT Operator System",
  description: "AI Operator Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
