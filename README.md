# 📊 Calculadora de IMC

Uma calculadora simples, interativa e totalmente responsiva de Índice de Massa Corporal (IMC) desenvolvida com HTML, CSS e JavaScript puro.

![Preview Desktop](https://img.shields.io/badge/Preview-Desktop-667eea?style=for-the-badge)
![Preview Mobile](https://img.shields.io/badge/Preview-Mobile-764ba2?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completo-success?style=for-the-badge)

## 🎯 Sobre o Projeto

O IMC (Índice de Massa Corporal) é uma medida internacional usada para calcular se uma pessoa está no peso ideal. Esta calculadora oferece uma interface moderna e intuitiva que permite calcular instantaneamente seu IMC com classificação visual por categorias.

## 📸 Preview do Projeto

### 🖥️ Versão Desktop
Interface otimizada para navegadores desktop com design limpo e moderno. Apresenta um gradiente vibrante em tons de roxo, campos de entrada espaçosos e resultado imediatamente colorido de acordo com a categoria de IMC calculada.

**Características da versão desktop:**
- Layout centralizado com container de 400px
- Campos de entrada amplos e confortáveis
- Efeitos hover nos botões com elevação suave
- Sombras profundas para dar sensação de profundidade
- Tipografia em tamanhos otimizados para leitura em tela grande

### 📱 Versão Mobile
Totalmente responsiva para smartphones e tablets, com otimizações específicas para dispositivos touch. A interface se adapta automaticamente ao tamanho da tela, garantindo uma experiência perfeita em qualquer dispositivo.

**Características da versão mobile:**
- Botões maiores (padding de 18px) para melhor área de toque
- Inputs otimizados sem spinners e com tamanho de fonte de 16px (evita zoom automático no iOS)
- Layout compacto que aproveita melhor o espaço da tela
- Suporte para modo paisagem (landscape) com ajustes específicos
- Animações suaves ao exibir resultados
- Feedback tátil visual ao tocar nos elementos

### 🎨 Sistema de Cores por Categoria
Cada resultado de IMC é exibido com uma cor específica para facilitar a identificação visual imediata:

- **Azul claro** (`#e3f2fd`) - Abaixo do peso (IMC < 18.5)
- **Verde** (`#e8f5e9`) - Peso normal (IMC 18.5 - 24.9)
- **Amarelo/Laranja claro** (`#fff3e0`) - Sobrepeso (IMC 25 - 29.9)
- **Rosa** (`#fce4ec`) - Obesidade (IMC 30 - 39.9)
- **Vermelho claro** (`#ffebee`) - Obesidade grave (IMC ≥ 40)

Cada cor foi cuidadosamente escolhida para ser suave aos olhos, mantendo contraste adequado para acessibilidade.

## ✨ Funcionalidades

- ✅ Interface limpa e moderna com gradiente roxo elegante
- ✅ Cálculo instantâneo e preciso do IMC
- ✅ Classificação automática em 5 categorias distintas
- ✅ Sistema de cores intuitivo para cada categoria
- ✅ Totalmente responsivo - funciona em desktop, tablet e mobile
- ✅ Otimizado para dispositivos touch
- ✅ Suporte para tecla Enter (calcular ao pressionar)
- ✅ Validação de dados de entrada
- ✅ Animações suaves e feedback visual
- ✅ Sem dependências externas - arquivo único
- ✅ Suporte para modo paisagem em dispositivos móveis
- ✅ Design acessível com bom contraste de cores

## 🚀 Como Usar

1. Abra o arquivo `index.html` em seu navegador
2. Digite sua altura em metros (ex: 1.75)
3. Digite seu peso em quilogramas (ex: 70)
4. Clique em "Calcular IMC" ou pressione Enter
5. Veja seu resultado com a classificação correspondente

## 📁 Estrutura do Projeto

```
imc-calculator/
│
├── index.html          # Arquivo principal com HTML, CSS e JavaScript
├── script.js           # Código JavaScript original (versão console)
└── README.md           # Este arquivo
```

## 💻 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e moderna
- **CSS3** - Estilização avançada com:
  - Flexbox para layout responsivo
  - Gradientes lineares
  - Transições e animações suaves
  - Media queries para diferentes breakpoints
  - Variáveis CSS customizadas
- **JavaScript (ES6+)** - Lógica de cálculo e interatividade
- **Design Mobile-First** - Abordagem responsiva desde o início

## 🎨 Características de Design

### Desktop
- Container centralizado com largura máxima de 400px
- Padding generoso (40px) para respiração visual
- Gradiente de fundo em roxo vibrante (#667eea → #764ba2)
- Sombras profundas (0 20px 60px) para efeito de elevação
- Efeitos hover nos botões com transformação 3D
- Tipografia em 28px para título principal
- Campos de entrada com 12px de padding

### Mobile
- Adaptação automática para telas abaixo de 480px
- Padding reduzido (25px) para aproveitar melhor o espaço
- Botões com área de toque aumentada (18px de padding)
- Inputs sem spinners para melhor experiência touch
- Fonte de 16px nos inputs (evita zoom automático no iOS)
- Suporte para orientação paisagem (landscape)
- Animações otimizadas para performance em mobile

### Acessibilidade
- Contraste adequado entre texto e fundo
- Feedback visual em todos os elementos interativos
- Labels associadas aos inputs
- Mensagens de erro claras
- Suporte completo para navegação por teclado

## 📝 Fórmula do IMC

```
IMC = peso (kg) / altura² (m)
```

## 🔧 Personalização

### Cores do Gradiente
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```
Altere `#667eea` (roxo claro) e `#764ba2` (roxo escuro) para criar seu próprio gradiente.

### Cores das Categorias de IMC
```css
.abaixo-peso { background: #e3f2fd; color: #1976d2; }
.peso-normal { background: #e8f5e9; color: #388e3c; }
.sobrepeso { background: #fff3e0; color: #f57c00; }
.obesidade { background: #fce4ec; color: #c2185b; }
.obesidade-grave { background: #ffebee; color: #d32f2f; }
```

### Breakpoints Responsivos
- **480px** - Smartphones em portrait
- **360px** - Smartphones pequenos
- **Landscape** - Orientação paisagem (max-height: 600px)

### Tamanhos e Espaçamentos
- Container max-width: 400px
- Border-radius: 20px (desktop) / 15px (mobile)
- Button padding: 16px (desktop) / 18px (mobile)
- Input padding: 14px (desktop) / 16px (mobile)

## ⚠️ Observações

- ⚕️ Esta calculadora é apenas para fins informativos e educacionais
- 📊 O IMC não considera massa muscular, composição corporal, idade ou outros fatores individuais de saúde
- 🏋️ Atletas e pessoas com alta massa muscular podem ter IMC elevado sem estar acima do peso
- 👶 Não é adequado para crianças, gestantes e idosos sem orientação médica
- 🩺 Consulte sempre um profissional de saúde para avaliação completa e personalizada
- 📱 Para melhor experiência mobile, use em modo portrait (vertical)

## 🚀 Performance

- ⚡ Carregamento instantâneo (arquivo único de ~10KB)
- 🎯 Sem dependências externas ou requisições HTTP
- 💨 Animações otimizadas com CSS (GPU-accelerated)
- 📦 Código minificável para produção
- 🔒 Funciona 100% offline após primeiro carregamento

## 📱 Compatibilidade

### Navegadores Suportados
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+
- ✅ Navegadores mobile (iOS Safari, Chrome Mobile, Samsung Internet)

### Dispositivos Testados
- 🖥️ Desktop (1920x1080, 1366x768)
- 💻 Laptops (1440x900, 1280x800)
- 📱 Smartphones (375x667, 414x896, 360x640)
- 📱 Tablets (768x1024, 820x1180)

## 📄 Licença

Projeto livre para uso pessoal e educacional.

---

**Desenvolvido por [Pedro Miranda](https://github.com/pedro2506)**  
📧 Contato: t3pedropaulo@gmail.com 
📅 Criado em: Novembro de 2025  

> Este projeto foi criado e desenvolvido por **Pedro Miranda** com fins de aprendizado, portfólio e demonstração técnica.  
> O uso do código é permitido para fins educacionais e estudos, com os devidos créditos ao autor.