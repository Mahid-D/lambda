export function LogoCloud(){
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 opacity-70">
      {["Acme","Globex","Umbrella","Initech","Stark"].map((n, i) => (
        <div key={i} className="card p-4 text-center card-hover appear">{n}</div>
      ))}
    </div>
  );
}
