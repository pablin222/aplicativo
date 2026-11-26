# Universo IF Avalia — situação da execução

Data: 12/11/2026.

## Confirmado
- A conta GitHub `pablin222` está conectada e tem permissões de escrita e administração no repositório `pablin222/aplicativo`.
- A branch `feat/universo-if-avalia-mvp` foi criada para revisão, sem merge ou deploy.
- O pacote local do MVP inclui React/Vite/TypeScript, 46 projetos, Apps Script/Sheets, testes e instruções; **o conteúdo completo do pacote ainda não foi enviado a esta branch**.
- A validação local do catálogo retornou 46 projetos (24 Nacional, 22 Extensão), IDs únicos; o teste sintético de backend retornou PASS para idempotência, recusa de voto duplicado e aceitação do mesmo código em projetos diferentes.

## Bloqueios e pendências
- `npm install` não completou neste ambiente (registro npm inacessível), portanto `npm run build` e `npm test` ainda não foram executados; o pacote também não contém `package-lock.json`.
- Concorrência real, Google Sheets e Apps Script em ambiente de produção não testados.
- Nenhum voto público, URL de Apps Script, configuração do Pages, workflow CI ou publicação verificados.
- Antes de publicar, configurar Apps Script vinculado à planilha privada, credenciais de votação e executar testes ponta a ponta, com confirmação do responsável.

**Não considerar o sistema homologado nem publicar a votação sem os gates de QA.**
