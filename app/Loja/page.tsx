export default function Loja() {
  return (
    <div className="min-h-screen bg-[#f5f1ea] p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-[#556b52] mb-4">
          Universo Origem
        </h1>

        <p className="text-[#707070] mb-12 text-lg">
          Escolha a experiência que deseja acessar.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CURSOS */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt="Cursos Online"
              className="h-64 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-3 text-[#556b52]">
                Cursos Online
              </h2>

              <p className="text-[#707070] mb-6">
                Aprenda cosméticos naturais, velas artesanais e práticas de autoconexão.
              </p>

              <a
                href="/cursos"
                className="w-full block text-center bg-[#556b52] hover:bg-[#475a45] transition-all text-white p-4 rounded-2xl font-semibold"
              >
                Acessar Cursos
              </a>

            </div>

          </div>

          {/* EBOOKS */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
              alt="E-books"
              className="h-64 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-3 text-[#556b52]">
                E-books
              </h2>

              <p className="text-[#707070] mb-6">
                Guias digitais sobre espiritualidade, autocuidado e receitas naturais.
              </p>

              <a
                href="/ebooks"
                className="w-full block text-center bg-[#556b52] hover:bg-[#475a45] transition-all text-white p-4 rounded-2xl font-semibold"
              >
                Ver E-books
              </a>

            </div>

          </div>

          {/* SITE OFICIAL */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
              alt="Loja Oficial"
              className="h-64 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-3 text-[#556b52]">
                Loja Oficial
              </h2>

              <p className="text-[#707070] mb-6">
                Conheça os produtos oficiais da Origem.
              </p>

              <a
                href="https://www.origemmg.com.br"
                target="_blank"
                className="w-full block text-center bg-[#556b52] hover:bg-[#475a45] transition-all text-white p-4 rounded-2xl font-semibold"
              >
                Ir para Loja
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}