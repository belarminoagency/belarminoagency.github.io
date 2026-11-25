# Rendy — acesso liberado por você

Quem abre o app cria uma conta (nome, WhatsApp, e-mail e senha) e fica em **"Aguardando liberação"**.
Você entra com `belarminokaique581@gmail.com`, toca no ícone de **pessoas** no topo (aparece um número quando tem pedido novo) e toca em **Liberar**. O app do cliente abre sozinho.
Parou de pagar? **Tirar acesso**: o app fecha na hora para essa pessoa.

## Onde ficam os dados
- **Finanças, metas e fotos:** salvas na conta da pessoa (`rendy_dados/{uid}/partes`), então valem em qualquer aparelho. O aparelho guarda uma cópia para abrir rápido e funcionar sem internet.
- **No Firebase:** só nome, WhatsApp, e-mail e se o acesso está liberado.
- A pessoa pode fazer backup em Ajustes → Baixar backup.

## Firebase (já configurado)
O Rendy usa o mesmo projeto do Forja (`forja-f7ca8`), com a lista de clientes separada (coleção `rendy`). As regras já foram publicadas em 18/11/2026. `firestore.rules` é a cópia completa das regras do projeto (Forja, B-Fight, Organização e Rendy): se for mexer, edite sempre a versão completa.

## Sua conta
Entre no Rendy com `belarminokaique581@gmail.com`. Se você já tem conta no Forja, é a mesma senha.
