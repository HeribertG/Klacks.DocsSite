---
sidebar_position: 3
---

# Entrada e saída de voz

O Klacksy também pode ser utilizado por voz — em Definições > Voz do Klacksy define com que serviço a sua voz é convertida em texto (Speech-to-Text) e com que voz o Klacksy responde (Text-to-Speech).

## Como funciona

**Reconhecimento de voz (STT):** Estão disponíveis quatro motores — o navegador gratuito (Web Speech API), Deepgram (streaming em tempo real), Groq Whisper (rápido e económico) e AssemblyAI (streaming). Para todos exceto o navegador, indica uma chave de API própria e pode testar a ligação diretamente.

**Saída de voz (TTS):** Também quatro fornecedores — Edge TTS (gratuito), OpenAI TTS, ElevenLabs e Google Cloud TTS. Consoante o fornecedor escolhido, o Klacks carrega automaticamente as vozes disponíveis; também aqui é possível testar a ligação.

**Modo de saída:** Determina se as respostas aparecem apenas como texto, apenas como áudio, como texto com saída de voz acionada manualmente ou como texto com saída de voz automática. A deteção de silêncio (500–3000 ms, padrão 1500 ms) determina quanto tempo se espera depois de falar antes de a gravação ser enviada automaticamente.

**Limpeza da transcrição:** Se esta opção estiver ativa, o texto STT em bruto passa adicionalmente por um LLM que remove palavras de preenchimento, resolve autocorreções e suaviza a gramática/números. O modelo utilizado para o efeito é escolhido por si; através de "Encontrar o melhor modelo", o Klacks testa todos os modelos ativados com uma janela de contexto a partir de 16 000 tokens e sugere os candidatos mais económicos e rápidos (timeout de 30 s por modelo). O prompt de limpeza é editável e pode ser reposto para a definição de fábrica.

**Dicionário:** Para termos que o reconhecimento de voz interpreta regularmente de forma incorreta (por exemplo, nomes próprios ou termos técnicos), cria entradas com o termo correto, categoria, variantes de pronúncia e associação linguística opcional — o Klacksy corrige então esses termos de forma direcionada.

## Bom saber

- O modo de navegador não necessita de chave de API, mas depende do reconhecimento de voz do respetivo navegador e a sua qualidade não é comparável à dos serviços pagos.
- As chaves de API são exibidas apenas como "Configurado" depois de guardadas, nunca mais em texto simples.
- A verificação de modelo aqui testa exclusivamente a adequação para a limpeza da transcrição (janela de contexto ≥ 16 000 tokens) — para a adequação geral como modelo principal do Klacksy existe um teste próprio e mais rigoroso (ver Teste de ligação de modelo).

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
