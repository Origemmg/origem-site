export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#3f4a3c] flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">

        <div className="bg-[#556b52] text-white p-10 flex flex-col justify-center">
          <span className="uppercase tracking-[0.3em] text-sm text-[#d9d2c3] mb-4">
            Origem
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Desperte sua
            <br />
            essência natural.
          </h1>

          <p className="text-lg text-[#f1ede6] leading-relaxed mb-8">
            Receba gratuitamente conteúdos exclusivos sobre cosméticos naturais,
            velas artesanais, espiritualidade, autocuidado e práticas de autoconexão.
          </p>

          <div className="space-y-4 text-sm">

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#e7cba9]" />
              Receitas naturais exclusivas
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#e7cba9]" />
              Rituais de autocuidado e energéticos
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#e7cba9]" />
              Informações sobre os nossos produtos e cursos
            </div>

          </div>
        </div>

        <div className="p-10 md:p-14 flex items-center">

          <div className="w-full">

            <h2 className="text-3xl font-bold mb-3">
              Entre para a comunidade
            </h2>

            <p className="text-[#707070] mb-8 leading-relaxed">
              Preencha abaixo e receba seu conteúdo gratuito diretamente no seu e-mail.
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

              <div>
                <label className="block text-sm font-medium mb-2">
                  Seu nome
                </label>

                <input
                  type="text"
                  name="nome"
                  placeholder="Digite seu nome"
                  className="w-full rounded-2xl border border-[#d9d2c3] p-4 outline-none focus:ring-2 focus:ring-[#556b52]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Seu melhor e-mail
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  className="w-full rounded-2xl border border-[#d9d2c3] p-4 outline-none focus:ring-2 focus:ring-[#556b52]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#556b52] hover:bg-[#475a45] transition-all text-white font-semibold rounded-2xl p-4 shadow-lg"
              >
                Quero receber gratuitamente
              </button>

            </form>
            <a
              href="https://wa.me/5531997344903?text=Olá%20Origem,%20quero%20saber%20mais%20sobre%20os%20produtos."
              target="_blank"
              className="w-full block text-center mt-4 bg-[#25D366] hover:bg-[#1ebe5d] transition-all text-white font-semibold rounded-2xl p-4 shadow-lg"
            >
              Falar no WhatsApp
            </a>
            
            <p className="text-xs text-[#8b8b8b] mt-6 leading-relaxed text-center">
              Seus dados estão protegidos. Você poderá sair da lista quando quiser.
            </p>

          </div>

        </div>

      </div>
    </div>
  )
}