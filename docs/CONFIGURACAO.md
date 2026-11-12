# Configuração para a equipe

## Estado atual
A interface React e os 46 títulos estão na branch de desenvolvimento. Os metadados de área, local e horários precisam ser importados do catálogo original antes da homologação. O voto não é enviado pela interface de catálogo: o botão de avaliação somente será exibido quando a URL oficial do Apps Script for configurada.

## Execução local
1. Instale Node.js 22.
2. Execute `npm install`.
3. Execute `npm run dev`.
4. Execute `npm run catalog:check`, `npm run typecheck`, `npm test` e `npm run build`.

## Integração Google
- Criar uma planilha Google Sheets privada da organização.
- Criar projeto Apps Script vinculado à planilha.
- Revisar backend, gerar códigos individuais com segurança e testar regras de votos em ambiente de teste.
- Configurar `VITE_APPS_SCRIPT_URL` com a URL validada do aplicativo Web de votação.
- Não armazenar códigos individuais ou credenciais no GitHub.

## Publicação
Não publicar antes de validar integração, permissões e QA. GitHub Pages deve ser ativado somente após aprovação expressa do responsável.
