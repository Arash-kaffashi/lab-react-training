export default function Greetings({ lang, children }) {
  return (
    <div className="border">
      {lang === 'de' ? 'Hallo' : lang === 'fr' ? 'Bonjour' : 'Hi'} {children}
    </div>
  );
}
