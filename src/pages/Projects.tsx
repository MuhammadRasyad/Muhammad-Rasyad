export default function Projects() {
return (
<section className="stack gap-lg">
<h1 className="h1">Projects</h1>
<div className="grid cards">
{[1,2,3,4].map(i => (
<article key={i} className="card">
<h3>Project {i}</h3>
<p>Deskripsi singkat project {i}. </p>
<button className="btn">Lihat detail</button>
</article>
))}
</div>
</section>
);
}