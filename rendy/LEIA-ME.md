# Rendy — acesso liberado por você

Quem abre o app cria uma conta (nome, WhatsApp, e-mail e senha) e fica em **"Aguardando liberação"**.
Você entra com `belarminokaique581@gmail.com`, toca no ícone de **pessoas** no topo (aparece um número quando tem pedido novo) e toca em **Liberar**. O app do cliente abre sozinho.
Parou de pagar? **Tirar acesso**: o app fecha na hora para essa pessoa.

## Onde ficam os dados
- **Finanças, metas e fotos:** só no aparelho da pessoa (não vão para a internet). Cada conta tem seus dados separados no aparelho.
- **No Firebase:** só nome, WhatsApp, e-mail e se o acesso está liberado.
- A pessoa pode fazer backup em Ajustes → Baixar backup.

## Passo único no Firebase (obrigatório)
O Rendy usa o mesmo projeto do Forja (`forja-f7ca8`), com a lista de clientes separada (coleção `rendy`).
1. console.firebase.google.com → projeto **forja** → **Firestore Database** → aba **Regras**.
2. Apague tudo, cole o conteúdo de `firestore.rules` (este arquivo tem as regras do Forja **e** do Rendy) → **Publicar**.

Sem isso, o cadastro dá erro de permissão.

## Sua conta
Entre no Rendy com `belarminokaique581@gmail.com`. Se você já tem conta no Forja, é a mesma senha.
