# 🚀 GitHub Actions DevOps Challenge

Este repositório contém a solução para um desafio técnico de DevOps, com foco na criação de um pipeline CI/CD utilizando **GitHub Actions**.

---

## 📁 Estrutura do Projeto

```
.
├── .github/workflows/      # Workflows do GitHub Actions (CI/CD)
│   ├── ci.yml              # Pipeline de Integração Contínua
│   └── cd.yml              # Pipeline de Entrega Contínua
├── check-required-file-action/  # GitHub Action custom em TypeScript
├── dist/                   # Código compilado do app (build)
├── drawio/                 # Diagrama do pipeline CI/CD
├── src/                    # Código-fonte da aplicação
├── tests/                  # Testes unitários
├── package.json
├── tsconfig.json
└── README.md               # Este arquivo
```

---

## 📦 Aplicação Web

A aplicação foi escrita com **Node.js + Express + TypeScript**, e expõe uma rota simples:

- `GET /` → retorna `"Hello from GitHub Actions CI/CD + TypeScript!"`

Inclui um teste unitário com Jest e Supertest para garantir que a aplicação responda corretamente.

---

## ⚙️ Pipeline CI (Integração Contínua)

Local: `.github/workflows/ci.yml`

Executado em push para `main`, com os seguintes passos:

1. Checkout do código
2. Instalação de dependências (`npm ci`)
3. Execução de testes (`npm test`)
4. Build (`tsc`)
5. Criação de Release com tag automática

---

## 🚀 Pipeline CD (Entrega Contínua)

Local: `.github/workflows/cd.yml`

Disparado após sucesso do CI, com:

1. Aprovação manual via environment (`teste`)
2. Deploy simulado
3. Notificação por e-mail em caso de falha

---

## 🧪 Action Customizada em TypeScript

Pasta: `check-required-file-action/`

Essa GitHub Action personalizada verifica se um arquivo obrigatório está presente no repositório. Caso não esteja, o pipeline é interrompido com erro.

Entrada:

```yaml
inputs:
  filename: Caminho do arquivo a ser verificado (obrigatório)
```

---

## 📊 Diagrama CI/CD

Arquivo: [`ci-cd-pipeline.drawio`](drawio/ci-cd-pipeline.drawio)

Visualização da estrutura do pipeline (CI separado de CD, com aprovações e notificações).

---

## 🛠️ Requisitos para rodar localmente

- Node.js 18+
- npm
- Git instalado

---

## 🧠 Diferenciais entregues

✅ Pipelines funcionais (CI + CD)  
✅ Release automática via tag  
✅ Aprovação manual configurada via environment  
✅ Notificação por e-mail em caso de falha  
✅ GitHub Action customizada em TypeScript  
✅ Diagrama visual da arquitetura no draw.io

---
