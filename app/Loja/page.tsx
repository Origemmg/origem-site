export default function loja() {
  return (
    <div className="min-h-screen bg-[#f5f1ea] p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-[#556b52] mb-4">
          Loja Origem
        </h1>

        <p className="text-[#707070] mb-12 text-lg">
          Produtos naturais, artesanais e energéticos.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1200&auto=format&fit=crop"
              alt="Vela artesanal"
              className="h-64 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-3 text-[#556b52]">
                Velas Artesanais
              </h2>

              <p className="text-[#707070] mb-6">
                Velas vegetais aromáticas para autocuidado e harmonização energética.
              </p>

              <button className="w-full bg-[#556b52] hover:bg-[#475a45] transition-all text-white p-4 rounded-2xl font-semibold">
                Comprar
              </button>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop"
              alt="Cosméticos naturais"
              className="h-64 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-3 text-[#556b52]">
                Cosméticos Naturais
              </h2>

              <p className="text-[#707070] mb-6">
                Fórmulas fitoterápicas e naturais para autocuidado consciente.
              </p>

              <button className="w-full bg-[#556b52] hover:bg-[#475a45] transition-all text-white p-4 rounded-2xl font-semibold">
                Comprar
              </button>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
              alt="Cursos Origem"
              className="h-64 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-3 text-[#556b52]">
                Cursos Origem
              </h2>

              <p className="text-[#707070] mb-6">
                Aprenda cosméticos artesanais e práticas naturais do zero.
              </p>

              <button className="w-full bg-[#556b52] hover:bg-[#475a45] transition-all text-white p-4 rounded-2xl font-semibold">
                Acessar
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}