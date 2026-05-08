export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#3f4a3c]">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <img
            src="/logo.png"
            alt="Origem"
            className="w-40 mb-6"
          />

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-6 mb-8">
            Desperte sua
            <br />
            essência natural.
          </h1>

          <p className="text-xl leading-relaxed text-[#5d6659] mb-10">
            Cosméticos vegetais, velas artesanais, espiritualidade,
            autocuidado e conhecimento para transformar sua rotina.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href="https://wa.me/5531997344903?text=Olá%20Origem,%20quero%20saber%20mais."
              target="_blank"
              className="bg-[#556b52] hover:bg-[#475a45] text-white px-8 py-4 rounded-2xl font-semibold text-center transition-all shadow-xl"
            >
              WhatsApp
            </a>

            <a
              href="https://www.origemmg.com.br"
              target="_blank"
              className="border border-[#556b52] text-[#556b52] hover:bg-[#556b52] hover:text-white px-8 py-4 rounded-2xl font-semibold text-center transition-all"
            >
              Loja Oficial
            </a>

          </div>

        </div>

        {/* FORM */}

        <div className="bg-white rounded-3xl shadow-2xl p-10">

          <h2 className="text-3xl font-bold mb-4">
            Entre para a comunidade
          </h2>

          <p className="text-[#707070] mb-8">
            Receba conteúdos gratuitos, novidades e materiais exclusivos.
          </p>

          <form
            action="https://formsubmit.co/origemmg@hotmail.com"
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="_captcha" value="false" />

            <input
              type="hidden"
              name="_next"
              value="https://origem-site.vercel.app"
            />

            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              required
              className="w-full rounded-2xl border border-[#d9d2c3] p-4 outline-none focus:ring-2 focus:ring-[#556b52]"
            />

            <input
              type="email"
              name="email"
              placeholder="Seu melhor e-mail"
              required
              className="w-full rounded-2xl border border-[#d9d2c3] p-4 outline-none focus:ring-2 focus:ring-[#556b52]"
            />

            <button
              type="submit"
              className="w-full bg-[#556b52] hover:bg-[#475a45] transition-all text-white font-semibold rounded-2xl p-4 shadow-lg"
            >
              Quero receber gratuitamente
            </button>

          </form>

        </div>

      </section>

      {/* CURSOS */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-4 text-center">
          Cursos Online
        </h2>

        <p className="text-center text-[#707070] mb-14 text-lg">
          Aprenda práticas ancestrais e artesanais do zero.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt="Curso"
              className="h-64 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold mb-3">
                Cosméticos Vegetais
              </h3>

              <p className="text-[#707070] mb-6">
                Aprenda a criar cosméticos vegetais artesanais.
              </p>

              <button className="w-full bg-[#556b52] text-white p-4 rounded-2xl font-semibold">
                Em breve
              </button>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1200&auto=format&fit=crop"
              alt="Curso"
              className="h-64 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold mb-3">
                Velas Artesanais
              </h3>

              <p className="text-[#707070] mb-6">
                Aprenda a fazer velas vegetais aromáticas.
              </p>

              <button className="w-full bg-[#556b52] text-white p-4 rounded-2xl font-semibold">
                Em breve
              </button>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
              alt="Curso"
              className="h-64 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold mb-3">
                Autoconexão
              </h3>

              <p className="text-[#707070] mb-6">
                Rituais de autocuidado, espiritualidade e sagrado feminino.
              </p>

              <button className="w-full bg-[#556b52] text-white p-4 rounded-2xl font-semibold">
                Em breve
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* EBOOKS */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-4 text-center">
            E-books
          </h2>

          <p className="text-center text-[#707070] mb-14 text-lg">
            Guias digitais para aprofundar conhecimento e transformação.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border border-[#ece7dc] rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Cosméticos Fitoterápicos
              </h3>

              <p className="text-[#707070] mb-8">
                Receitas e formulações fitoterápicas artesanais.
              </p>

              <button className="w-full bg-[#556b52] text-white p-4 rounded-2xl font-semibold">
                Em breve
              </button>

            </div>

            <div className="border border-[#ece7dc] rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Rituais de autocuidado
              </h3>

              <p className="text-[#707070] mb-8">
                Ervas, banhos, óleos e práticas energéticas.
              </p>

              <button className="w-full bg-[#556b52] text-white p-4 rounded-2xl font-semibold">
                Em breve
              </button>

            </div>

            <div className="border border-[#ece7dc] rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Guia Autoconexão
              </h3>

              <p className="text-[#707070] mb-8">
                Meditações, práticas espirituais e equilíbrio.
              </p>

              <button className="w-full bg-[#556b52] text-white p-4 rounded-2xl font-semibold">
                Em breve
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="py-16 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Origem
        </h2>

        <p className="text-[#707070] mb-8">
          Natureza, consciência e transformação.
        </p>

        <a
          href="https://wa.me/5531997344903"
          target="_blank"
          className="inline-block bg-[#556b52] hover:bg-[#475a45] text-white px-8 py-4 rounded-2xl font-semibold transition-all"
        >
          Falar no WhatsApp
        </a>

      </footer>

    </div>
  )
}