export default function Contact() {
return (
<section className="w-full max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
  <h1 className="text-4xl font-bold text-white mb-10 text-center">Kontak</h1>

  <form className="space-y-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg">
    {/* Nama */}
    <div className="flex flex-col space-y-2">
      <label htmlFor="nama" className="text-sm font-semibold text-slate-200">Nama</label>
      <input
        id="nama"
        type="text"
        placeholder="Nama lengkap"
        className="w-full rounded-lg bg-slate-900/60 border border-slate-700 text-slate-100 placeholder-slate-500 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all duration-200"
      />
    </div>

    {/* Email */}
    <div className="flex flex-col space-y-2">
      <label htmlFor="email" className="text-sm font-semibold text-slate-200">Email</label>
      <input
        id="email"
        type="email"
        placeholder="email@domain.com"
        className="w-full rounded-lg bg-slate-900/60 border border-slate-700 text-slate-100 placeholder-slate-500 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all duration-200"
      />
    </div>

    {/* Pesan */}
    <div className="flex flex-col space-y-2">
      <label htmlFor="pesan" className="text-sm font-semibold text-slate-200">Pesan</label>
      <textarea
        id="pesan"
        rows={4}
        placeholder="Ceritakan kebutuhan projectmu"
        className="w-full rounded-lg bg-slate-900/60 border border-slate-700 text-slate-100 placeholder-slate-500 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all duration-200 resize-none"
      />
    </div>

    {/* Tombol Kirim */}
    <button
      type="submit"
      className="w-full bg-sky-500 hover:bg-sky-600 text-slate-900 font-semibold py-3 rounded-xl shadow-md hover:shadow-sky-500/30 transition-all duration-200"
    >
      Kirim
    </button>
  </form>
</section>

);
}