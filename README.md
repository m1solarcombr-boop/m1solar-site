# M1Solar Site

Projeto em Next.js + TypeScript com Tailwind CSS para o site institucional da M1Solar, incluindo simulação de economia, captura de leads e páginas de serviços, projetos e contato.

## Como rodar localmente

1. Instale dependências:
   ```bash
   npm install
   ```
2. Rode em modo desenvolvimento:
   ```bash
   npm run dev
   ```
   O app fica disponível em `http://localhost:3000`.

3. Para checar lint:
   ```bash
   npm run lint
   ```

4. Para build de produção:
   ```bash
   npm run build
   npm start
   ```

## Teste rápido da simulação
- Acesse `/simulacao` e preencha o formulário com conta média ou consumo em kWh.
- Ajuste os campos de tarifa, tipo de telhado e clique **Calcular economia** para ver a estimativa.
- Após o resultado, preencha nome e contato e clique **Receber orçamento detalhado** para simular envio.

## Ajustes úteis
- **Links de WhatsApp**: atualize os placeholders em `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/simulacao/page.tsx` e `src/app/contato/page.tsx`.
- **Constantes da simulação**: edite os valores no topo de `src/app/simulacao/page.tsx` (produção média, faixa de preço por kWp, percentual de economia, etc.).
- **Textos principais**: ajuste headlines e descrições nas páginas em `src/app/` conforme necessário.
