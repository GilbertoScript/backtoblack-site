# Back to Black - Site Oficial (Next.js)

<p align="center">
  <em>The only true dark theme you were looking for</em>
</p>

Este é o site oficial do tema **Back to Black** para Visual Studio Code, desenvolvido com Next.js 16, React 19 e Tailwind CSS 4.

## 🚀 Sobre o Projeto

Site de marketing e documentação para o tema Back to Black VSCode, apresentando:
- Características do tema
- Preview visual
- Instruções de instalação
- História do projeto
- Paleta de cores

## 🛠️ Stack Tecnológica

- **Next.js 16** - Framework React com App Router
- **React 19.2.0** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utility-first
- **Lucide React** - Ícones modernos
- **Next Font** - Otimização de fontes (Playfair Display + Inter)

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Executar linter
npm run lint
```

## 🏗️ Estrutura do Projeto

```
backtoblack-site/
├── app/
│   ├── components/         # Componentes React
│   │   ├── Header.tsx     # Cabeçalho com navegação
│   │   ├── Hero.tsx       # Seção hero principal
│   │   ├── Features.tsx   # Grid de características
│   │   ├── Preview.tsx    # Preview do tema
│   │   ├── ColorPalette.tsx   # Paleta de cores
│   │   ├── History.tsx    # História do projeto
│   │   ├── Installation.tsx   # Instruções de instalação
│   │   └── Footer.tsx     # Rodapé
│   ├── error.tsx          # Página de erro
│   ├── not-found.tsx      # Página 404
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── public/                # Assets estáticos
└── next.config.ts         # Configuração do Next.js
```

## 🎨 Design System

### Cores do Tema

```css
--primary-color: #000000      /* Fundo preto puro */
--secondary-color: #ffffff    /* Branco */
--text-primary: #ffffff9f     /* Texto principal (62% opacity) */
--text-highlight: #ffffff     /* Texto destacado */
--border-color: #22222270     /* Bordas (44% opacity) */
--accent-subtle: #ffffff15    /* Guias sutis (8% opacity) */
```

### Tipografia

- **Headings**: Playfair Display (400, 600, 700)
- **Body**: Inter (300, 400, 500, 600)

### Componentes Customizados

- `.btn-primary` - Botão principal
- `.feature-card` - Card de feature com hover
- `.section-container` - Container de seção (max-width: 1200px)
- `.text-gradient` - Texto com gradiente
- `.drop-cap` - Drop cap para primeira letra

## 🌐 Deploy

O site pode ser facilmente deployado em:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS Amplify**
- Qualquer plataforma que suporte Next.js

```bash
# Build para produção
npm run build

# O Next.js gera uma pasta .next/ com os arquivos otimizados
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔗 Links

- [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=backtoblack.backtoblack)
- [GitHub](https://github.com/GilbertoScript/backtoblack)
- [Issues](https://github.com/GilbertoScript/backtoblack/issues)

## 📄 Licença

MIT License - © 2025 Back to Black

---

**Made with 🖤 by [GilbertoScript](https://github.com/GilbertoScript)**
