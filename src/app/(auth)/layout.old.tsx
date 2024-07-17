export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 h-screen w-screen justify-center items-center">
      {children}
    </div>
  );
}
