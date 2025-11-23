export function Section({ title, subtitle, children }:{ title:string; subtitle?:string; children: React.ReactNode }){
  return (
    <section className="section">
      <div className="container">
        <header className="mb-10 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-semibold">{title}</h2>
          {subtitle && <p className="mt-3 text-gray-600 dark:text-gray-300">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
