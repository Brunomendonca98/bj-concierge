# 📱 BJ Concierge

Aplicativo desenvolvido em **React Native (Expo)** como parte da avaliação da disciplina.  
O app simula um sistema de concierge de FBO (Fixed-Base Operator), permitindo solicitar serviços como traslado, hotel e catering.

---

## 🚀 Funcionalidades

- **Home**: Tela inicial com atalhos para serviços e novo pedido.  
- **Serviços**: Lista de serviços disponíveis.  
- **Novo Pedido**: Formulário com **validação de campos** (nome, e-mail, serviço, data, hora, passageiros e aceite de termos).  
- **Confirmação**: Mostra os dados preenchidos após envio.  
- **Sobre**: Informações sobre o app.  

### ✔️ Requisitos atendidos
- 4+ telas
- Formulário com validação
- Layout organizado
- Estrutura de código separada em `src/`
- Navegação com `@react-navigation/native`
- Bibliotecas externas: `react-hook-form`, `zod`, `@hookform/resolvers`
- Repositório no GitHub

---

## 🛠️ Tecnologias

- [Expo](https://expo.dev/)  
- React Native  
- React Navigation  
- React Hook Form + Zod (validação de formulários)  

---

## 📸 Telas

### Home
![Home](./prints/home.jpg)

### Serviços
![Serviços](./prints/services.jpg)

### Novo Pedido (erros de validação)
![Novo Pedido - Erros](./prints/neworder_error.jpg)

### Novo Pedido (preenchido)
![Novo Pedido - OK](./prints/neworder_ok.jpg)

### Confirmação
![Confirmação](./prints/confirmation.jpg)

---

## ▶️ Como rodar localmente

```bash
# Clonar o repositório
git clone https://github.com/Brunomendonca98/bj-concierge.git
cd bj-concierge

# Instalar dependências
npm install

# Rodar com Expo
npx expo start --tunnel
