---
sidebar_position: 6
---

Em Definições > Fornecedores de mensagens, associa canais de chat e SMS externos através dos quais o Klacks (e o Klacksy) pode contactar diretamente colaboradores e clientes — em vez de, ou para além de, e-mail.

## Como funciona

**Princípio comum:** Todos os canais são configurados através da mesma lista: nome interno, nome de exibição, tipo de fornecedor e as credenciais de acesso específicas de cada canal (token, ID de conta, certificado ou semelhante), além de um interruptor de ativação/desativação e um botão de teste por entrada, para verificar imediatamente a ligação. A quem uma mensagem chega é determinado através do identificador específico do canal (número de telefone, nome de utilizador, ID de utilizador ou semelhante) registado em Endereço > Dados de contacto do colaborador ou cliente — não precisa de introduzir IDs em bruto.

**Para que serve o messaging no Klacks:** como via de notificação adicional para além do e-mail, por exemplo para avisos do plano de serviço ou mensagens do Klacksy — consoante os canais ativados e registados por pessoa.

**Os 11 canais em resumo:**

| Canal | Enviar/Receber | Particularidade |
|---|---|---|
| Slack | Enviar + Receber | O bot também tem de ser explicitamente convidado para cada canal via `/invite`. |
| Telegram | Enviar + Receber | O destinatário tem de ter previamente ativado o bot através de `/start`. |
| Signal | Só enviar | Requer uma ponte signal-cli auto-alojada (Docker) com número de telefone próprio, associado por código QR — não existe API oficial na nuvem. |
| Microsoft Teams | Só enviar | Um webhook do Power Automate por canal; sem mensagens 1:1, para vários canais do Teams são necessárias várias entradas. |
| SMS | Só enviar | Número de telefone no formato E.164; em contas de teste (por exemplo, Twilio) apenas para números previamente verificados, o país de destino tem de estar autorizado. |
| WeChat | Só enviar | A verificação como Official Account fora da China é exigente; só alcança seguidores com interação nas últimas 48 horas. |
| KakaoTalk | Só enviar | O token de acesso só é válido durante cerca de 6 horas e tem de ser renovado manualmente; o destinatário tem de ser "amigo" da aplicação. |
| Line | Enviar + Receber | Quota mensal de envio limitada consoante o plano; o ID do destinatário só se torna conhecido através de uma mensagem recebida. |
| Threema | Só enviar | Conta paga do Threema Gateway (modelo de saldo); sem receção, uma vez que não é utilizado o modo ponta a ponta. |
| Viber | Enviar + Receber | O bot só pode escrever a pessoas que o tenham previamente subscrito; o webhook necessita de HTTPS publicamente acessível. |
| Zalo | Só enviar | O token de acesso expira ao fim de cerca de 25 horas, o envio só é possível dentro de uma janela de interação. |

## Bom saber

- Para cada canal existe um manual próprio e detalhado com instruções passo a passo para a configuração junto do respetivo fornecedor — acessível diretamente na página de definições da respetiva entrada de fornecedor.
- Vários canais podem estar ativos em paralelo; qual é efetivamente utilizado depende dos dados de contacto registados na respetiva pessoa.
- Em todos os canais com token de acesso temporário (por exemplo, KakaoTalk, Zalo), este tem de ser renovado fora do Klacks junto do fornecedor e depois atualizado no Klacks, caso contrário o envio através desse canal falha.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
