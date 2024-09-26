# Agendador de Mensagens de WhatsApp 📖 (Back-End)

**Versão**: 1.0.0

## Descrição ☕️
Este é o back-end de um sistema de agendamento de mensagens para WhatsApp. Ele permite criar, ler, atualizar e deletar (CRUD) mensagens, que são automaticamente enviadas para o destinatário na data e horário agendados.

## Funcionalidades
- [ ] Criar agendamentos de mensagens com data e hora específicas
- [ ] Listar agendamentos existentes
- [ ] Atualizar agendamentos de mensagens
- [ ] Deletar agendamentos
- [ ] Integração com a API do WhatsApp para envio automático de mensagens

## Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/agendador-whatsapp-backend.git


1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/agendador-whatsapp-backend.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd agendador-whatsapp-backend
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```bash
   WHATSAPP_API_KEY=your-api-key
   DATABASE_URL=your-database-url
   ```

5. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

6. O servidor estará rodando em:
   ```
   http://localhost:3000
   ```
## Dependências Principais
- Node.js
- Express
- Mongoose
- TypeScript
- API do WhatsApp (a definir)

## Futuras Implementações
- Envio automático de mensagens na data agendada
- Logs detalhados de envio e status de mensagens
- Testes automatizados e cobertura de código
```