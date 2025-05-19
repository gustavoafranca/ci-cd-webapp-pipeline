# 📦 Check Required File Action

Esta é uma GitHub Action personalizada criada em TypeScript que verifica se um arquivo obrigatório está presente no repositório. Se o arquivo não for encontrado, a action falha e interrompe o pipeline.

---

## ✅ Exemplo de uso

```yaml
- name: 🛡️ Verificar arquivo obrigatório
  uses: ./check-required-file-action
  with:
    filename: build.config.json
```

---

## 🎯 Entrada (`inputs`)

| Nome     | Descrição                                      | Obrigatório |
| -------- | ---------------------------------------------- | ----------- |
| filename | Caminho (relativo) do arquivo a ser verificado | ✅ Sim      |

---

## 📋 O que ela faz

- Verifica se o arquivo informado existe no repositório.
- Se **não existir**, a action falha com uma mensagem de erro.
- Se **existir**, registra uma mensagem no log e continua o pipeline.

---

## 🧪 Como testar localmente

1. Crie um arquivo obrigatório fictício, por exemplo:

```bash
touch build.config.json
```

2. No workflow (`ci.yml`), adicione:

```yaml
- name: Verificar arquivo obrigatório
  uses: ./check-required-file-action
  with:
    filename: build.config.json
```

3. Rode o pipeline. Se o arquivo estiver presente, o processo continua. Se não estiver, a esteira falha com erro.

---

## 🛠️ Requisitos

- Node.js >=16
- GitHub Actions runner compatível (ubuntu-latest, macos, windows)

---

## 📁 Estrutura

```
check-required-file-action/
├── dist/              # Código compilado em JS
├── src/               # Código-fonte em TypeScript
│   └── index.ts
├── action.yml         # Metadados da action
├── package.json
├── tsconfig.json
└── README.md
```

---

Feito com ❤️ para desafios de DevOps.
