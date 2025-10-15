export default function Contact() {
return (
<section className="stack gap-lg">
<h1 className="h1">Kontak</h1>
<form className="form">
<div className="field">
<label>Nama</label>
<input placeholder="Nama lengkap" />
</div>
<div className="field">
<label>Email</label>
<input type="email" placeholder="email@domain.com" />
</div>
<div className="field">
<label>Pesan</label>
<textarea rows={4} placeholder="Ceritakan kebutuhan projectmu" />
</div>
<button className="btn">Kirim</button>
</form>
</section>
);
}