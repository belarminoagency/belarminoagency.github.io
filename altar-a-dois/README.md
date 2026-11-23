<p align="center">
  <img src="icon.svg" width="96" alt="Logo do Altar a Dois">
</p>

<h1 align="center">Altar a Dois</h1>
<p align="center"><b>21 dias com Deus</b>: devocional pessoal todos os dias e devocional do casal toda semana.</p>
<p align="center"><i>"O cordão de três dobras não se rompe com facilidade." (Eclesiastes 4.12)</i></p>

---

## Sobre

O Altar a Dois é um app web feito para uma campanha de 21 dias de busca a Deus, vivida a sós e a dois. São três semanas, cada uma com um tema:

| Semana | Tema | Foco |
|---|---|---|
| 1 | Vida espiritual | Voltar ao primeiro amor |
| 2 | Relacionamento | Maturidade, paciência e amor que escolhe |
| 3 | Finanças e negócios | Deus como dono, nós como mordomos |

## Funcionalidades

**Aba Eu (pessoal)**
- 21 devocionais, um por dia, com leitura bíblica, versículo-chave, reflexão, pergunta para meditar e oração
- Link direto para o texto do dia na Bíblia NVI (YouVersion)
- Roteiro de 1 hora com cronômetro em quatro etapas: adoração (10 min), Palavra (20 min), meditação e diário (15 min) e oração (15 min)
- Diário particular: "o que Deus falou comigo" e "pedidos e gratidão"
- Uma frase nova a cada hora: versículos e frases de pregadores como Billy Graham, Spurgeon, Moody e Corrie ten Boom

**Aba Nós dois (casal)**
- Devocional semanal do casal com perguntas para conversar, um desafio prático e uma oração
- Escolha do dia fixo do devocional a dois
- Conversa de fim de semana: o que aconteceu, o que mudou, o que aprendi e o que levo para a próxima semana
- Lista de pedidos de oração do casal, que vocês marcam quando Deus responder

**Aba Jornada**
- Dias concluídos, sequência de dias seguidos e progresso de cada semana

**Perfil**
- Na primeira vez que abre, o app pergunta quem está usando (os nomes do casal podem ser editados)
- Modo claro e escuro automáticos

## Como usar

É um único arquivo HTML, sem instalação e sem servidor.

- **Online:** publique no GitHub Pages (Settings → Pages → Branch `main` → `/root`) e abra o link no celular.
- **Instalar no celular:** abra o link no navegador e use "Adicionar à tela inicial".
- **Local:** abra o `index.html` em qualquer navegador.

Fora do Claude, os dados ficam salvos no próprio aparelho (`localStorage`). Na versão publicada no Claude, os dados ficam na nuvem e a aba "Nós dois" é compartilhada entre o casal.

## Para personalizar

No `index.html`:
- `DEFAULT_NOMES`: os nomes do casal
- `START`: a data de início da campanha
- `DEVS`, `CASAL`, `FRASES_EU` e `FRASES_NOS`: todo o conteúdo devocional

## Créditos

Criado por Kaique e Evelyn, com a ajuda do Claude.
Os versículos foram adaptados em linguagem atual. Para a leitura completa, o app abre a Bíblia NVI no YouVersion.

> "Se não for o Senhor o construtor da casa, será inútil trabalhar na construção." (Salmo 127.1)

## Login e nuvem

No site (GitHub Pages), o app pede login com e-mail e senha no mesmo projeto Firebase do Rendy (`forja-f7ca8`). O Kaique entra e o espaço do casal é criado na hora. A outra pessoa cria a conta, pede acesso e o Kaique libera dentro do app. Os dados ficam em `altar_casais/{id}`, e o diário pessoal só pode ser lido pelo dono. As regras estão em `rendy/firestore.rules`, a cópia completa das regras do projeto. Também dá para usar sem login, mas aí fica salvo só no aparelho. O que já tinha sido feito sem login é levado para a conta no primeiro login.
