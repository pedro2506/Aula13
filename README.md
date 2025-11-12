# 📊 Calculadora de IMC

Uma calculadora simples e interativa de Índice de Massa Corporal (IMC) desenvolvida com HTML, CSS e JavaScript.

## 🎯 Sobre o Projeto

O IMC (Índice de Massa Corporal) é uma medida internacional usada para calcular se uma pessoa está no peso ideal. Esta calculadora permite que você insira sua altura e peso para obter seu IMC e classificação correspondente.

## ✨ Funcionalidades

- Interface limpa e moderna com gradiente roxo
- Cálculo instantâneo do IMC
- Classificação automática em categorias:
  - Abaixo do peso (IMC < 18.5)
  - Peso normal (IMC 18.5 - 24.9)
  - Sobrepeso (IMC 25 - 29.9)
  - Obesidade (IMC 30 - 39.9)
  - Obesidade grave (IMC ≥ 40)
- Resultado colorido de acordo com a categoria
- Responsivo para dispositivos móveis
- Suporte para tecla Enter para calcular

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

- HTML5
- CSS3 (com gradientes e animações)
- JavaScript (ES6+)

## 🎨 Características de Design

- Gradiente moderno em tons de roxo
- Animações suaves nos botões
- Cores diferentes para cada categoria de IMC
- Design responsivo
- Sombras e bordas arredondadas para melhor UX

## 📝 Fórmula do IMC

```
IMC = peso (kg) / altura² (m)
```

## 🔧 Personalização

Você pode facilmente personalizar as cores alterando as variáveis CSS no `<style>` do arquivo HTML:

- Gradiente de fundo: `.body { background: ... }`
- Cores das categorias: `.abaixo-peso`, `.peso-normal`, etc.
- Cores dos botões: `button { background: ... }`

## ⚠️ Observações

- Esta calculadora é apenas para fins informativos
- O IMC não considera massa muscular, composição corporal ou outros fatores de saúde
- Consulte sempre um profissional de saúde para avaliação completa

## 📄 Licença

Projeto livre para uso pessoal e educacional.

---

Desenvolvido com 💜 para ajudar no acompanhamento da saúde
