/**
 * Mostra um texto que pode conter dado pendente de content/empresa.ts.
 * O trecho entre « » sai como token, para ninguém publicar sem ver.
 */
export default function Dado({ children }: { children: string }) {
  return (
    <>
      {children.split(/(«[^»]+»)/).map((parte, i) =>
        parte.startsWith('«') ? (
          <span className="token" key={i}>
            {parte}
          </span>
        ) : (
          parte
        ),
      )}
    </>
  );
}
