Vou traduzir os casos de teste para português brasileiro.

# Casos de Teste: Tela de Login do Ziyou Club

## Suite de Testes: Funcionalidade de Login

### ID do Caso de Teste: LOG_001
**Nome do Caso de Teste:** Credenciais de Login Válidas  
**Prioridade:** Alta  
**Pré-condição:** 
- Aplicativo está instalado e iniciado
- Usuário possui conta registrada válida
- Conexão com internet está disponível  

**Passos do Teste:**
1. Inserir email registrado válido no campo Email
2. Inserir senha correta no campo Senha
3. Clicar no botão "Acessar"

**Resultado Esperado:**  
- Usuário deve ser logado com sucesso
- Usuário deve ser direcionado para a tela principal de conteúdo fitness

**Pós-condição:**  
Usuário está logado no aplicativo

---

### ID do Caso de Teste: LOG_002
**Nome do Caso de Teste:** Formato de Email Inválido  
**Prioridade:** Alta  
**Pré-condição:**
- Aplicativo está instalado e iniciado
- Conexão com internet está disponível

**Passos do Teste:**
1. Inserir formato de email inválido (ex: "teste@", "teste.com", "@teste.com")
2. Inserir qualquer senha
3. Clicar no botão "Acessar"

**Resultado Esperado:**
- Sistema deve exibir erro de validação do formato do email
- Login não deve prosseguir

**Pós-condição:**
Usuário permanece na tela de login com mensagem de erro

---

### ID do Caso de Teste: LOG_003
**Nome do Caso de Teste:** Campo de Email Vazio  
**Prioridade:** Média  
**Pré-condição:**
- Aplicativo está instalado e iniciado

**Passos do Teste:**
1. Deixar campo de Email vazio
2. Inserir qualquer senha
3. Clicar no botão "Acessar"

**Resultado Esperado:**
- Sistema deve exibir erro de campo obrigatório para email
- Login não deve prosseguir

**Pós-condição:**
Usuário permanece na tela de login com mensagem de erro

---

### ID do Caso de Teste: LOG_004
**Nome do Caso de Teste:** Campo de Senha Vazio  
**Prioridade:** Média  
**Pré-condição:**
- Aplicativo está instalado e iniciado

**Passos do Teste:**
1. Inserir email válido
2. Deixar campo de Senha vazio
3. Clicar no botão "Acessar"

**Resultado Esperado:**
- Sistema deve exibir erro de campo obrigatório para senha
- Login não deve prosseguir

**Pós-condição:**
Usuário permanece na tela de login com mensagem de erro

---

### ID do Caso de Teste: LOG_005
**Nome do Caso de Teste:** Alternar Visibilidade da Senha  
**Prioridade:** Baixa  
**Pré-condição:**
- Aplicativo está instalado e iniciado

**Passos do Teste:**
1. Inserir qualquer texto no campo Senha
2. Clicar no ícone de olho no campo Senha
3. Clicar novamente no ícone de olho

**Resultado Esperado:**
- Senha deve alternar entre caracteres visíveis e mascarados
- Ícone de olho deve mudar para refletir o estado atual

**Pós-condição:**
Estado de visibilidade da senha corresponde à última ação de alternância

---

### ID do Caso de Teste: LOG_006
**Nome do Caso de Teste:** Link Esqueceu sua Senha  
**Prioridade:** Média  
**Pré-condição:**
- Aplicativo está instalado e iniciado
- Conexão com internet está disponível

**Passos do Teste:**
1. Clicar no link "Esqueceu sua senha?"

**Resultado Esperado:**
- Usuário deve ser direcionado para a tela de recuperação de senha

**Pós-condição:**
Usuário está na tela de recuperação de senha

---

### ID do Caso de Teste: LOG_007
**Nome do Caso de Teste:** Tentativa de Login Offline  
**Prioridade:** Média  
**Pré-condição:**
- Aplicativo está instalado e iniciado
- Dispositivo está em modo offline

**Passos do Teste:**
1. Inserir email válido
2. Inserir senha válida
3. Clicar no botão "Acessar"

**Resultado Esperado:**
- Sistema deve exibir erro de sem conexão com internet
- Login não deve prosseguir

**Pós-condição:**
Usuário permanece na tela de login com mensagem de erro de conectividade

---

### ID do Caso de Teste: LOG_008
**Nome do Caso de Teste:** Credenciais de Login Inválidas  
**Prioridade:** Alta  
**Pré-condição:**
- Aplicativo está instalado e iniciado
- Conexão com internet está disponível

**Passos do Teste:**
1. Inserir email registrado
2. Inserir senha incorreta
3. Clicar no botão "Acessar"

**Resultado Esperado:**
- Sistema deve exibir erro de credenciais inválidas
- Login não deve prosseguir

**Pós-condição:**
Usuário permanece na tela de login com mensagem de erro

# Casos de Teste para o Aplicativo Ziyou Club Fitness
## Módulo: Tela de Dashboard
---

### ID do Caso de Teste: TC_DS_001
**Título do Caso de Teste:** Verificar Exibição da Última Sessão  
**Pré-condição:** Aplicativo está instalado e usuário está logado  
**Prioridade:** Alta  
**Dados de Teste:** Usuário completou pelo menos uma sessão  
**Passos do Teste:**
1. Navegar para a tela de dashboard
2. Observar a seção "Sua última sessão"
3. Verificar formato de exibição do tempo
4. Verificar contagem de calorias
5. Clicar no link "detalhes"

**Resultados Esperados:**
- O tempo da última sessão deve ser exibido no formato HH:MM:SS
- As calorias queimadas devem ser exibidas como um número
- A data deve ser exibida corretamente
- O link de detalhes deve ser clicável e navegar para os detalhes da sessão

### ID do Caso de Teste: TC_DS_002
**Título do Caso de Teste:** Verificar Conexão de Equipamento  
**Pré-condição:** Aplicativo está instalado e Bluetooth está ativado  
**Prioridade:** Alta  
**Dados de Teste:** Equipamento de exercício compatível nas proximidades  
**Passos do Teste:**
1. Navegar para a tela de dashboard
2. Clicar em "Conecte seu equipamento"
3. Observar processo de pareamento Bluetooth
4. Completar conexão

**Resultados Esperados:**
- Interface de pareamento Bluetooth deve aparecer
- Equipamentos disponíveis devem ser listados
- Conexão bem-sucedida deve ser indicada
- Equipamento conectado deve ser exibido na interface

### ID do Caso de Teste: TC_DS_003
**Título do Caso de Teste:** Verificar Exibição do Resumo Semanal  
**Pré-condição:** Aplicativo está instalado e usuário tem dados de atividade  
**Prioridade:** Alta  
**Dados de Teste:** Usuário completou treinos na semana atual  
**Passos do Teste:**
1. Navegar para a tela de dashboard
2. Observar a seção "Resumo da semana"
3. Verificar todas as métricas exibidas

**Resultados Esperados:**
- Minutos por semana devem mostrar atual/meta (60/609)
- Calorias devem mostrar atual/meta (421/2146)
- Velocidade média deve ser exibida corretamente (17.6 km/h)
- Círculo de progresso deve refletir o progresso atual

### ID do Caso de Teste: TC_DS_004
**Título do Caso de Teste:** Verificar Calendário de Progresso Semanal  
**Pré-condição:** Aplicativo está instalado e usuário tem dados de atividade  
**Prioridade:** Média  
**Passos do Teste:**
1. Navegar para a tela de dashboard
2. Observar calendário semanal (D,S,T,Q,Q,S,S)
3. Verificar indicadores de treinos completados
4. Verificar indicador do dia atual

**Resultados Esperados:**
- Dias devem estar corretamente rotulados
- Treinos completados devem mostrar marca de verificação
- Dia atual deve estar destacado
- Dias passados devem mostrar indicadores de status apropriados

### ID do Caso de Teste: TC_DS_005
**Título do Caso de Teste:** Verificar Progresso da Meta Semanal  
**Pré-condição:** Aplicativo está instalado e usuário definiu metas semanais  
**Prioridade:** Média  
**Dados de Teste:** Usuário completou pelo menos uma sessão  
**Passos do Teste:**
1. Navegar para a tela de dashboard
2. Observar barra de progresso da meta semanal
3. Verificar cálculo da porcentagem de progresso
4. Verificar mensagem de conclusão da meta

**Resultados Esperados:**
- Barra de progresso deve refletir o progresso atual
- Porcentagem deve ser calculada com precisão
- Mensagem deve mostrar "100% da sua meta de 1 sessões semanais!"
- Progresso deve corresponder às sessões completadas no calendário

### ID do Caso de Teste: TC_DS_006
**Título do Caso de Teste:** Verificar Funcionalidade da Barra de Navegação  
**Pré-condição:** Aplicativo está instalado e usuário está logado  
**Prioridade:** Alta  
**Passos do Teste:**
1. Observar barra de navegação inferior
2. Clicar em cada ícone de navegação
3. Retornar à tela inicial
4. Verificar destaque da seção atual

**Resultados Esperados:**
- Todos os ícones de navegação devem ser clicáveis
- Cada ícone deve navegar para a seção correta
- Seção atual deve estar destacada
- Ícone inicial deve retornar ao dashboard

### ID do Caso de Teste: TC_DS_007
**Título do Caso de Teste:** Verificar Exibição do Status do Dispositivo  
**Pré-condição:** Aplicativo está instalado  
**Prioridade:** Baixa  
**Passos do Teste:**
1. Observar barra de status superior
2. Verificar indicador de bateria
3. Verificar exibição de horário
4. Verificar indicadores de conexão

**Resultados Esperados:**
- Nível de bateria deve ser exibido com precisão (72%)
- Horário deve ser mostrado corretamente (13:34)
- Sinais de WiFi/celular devem estar visíveis
- Status do Bluetooth deve ser indicado

### ID do Caso de Teste: TC_DS_008
**Título do Caso de Teste:** Verificar Funcionalidade de Compartilhamento  
**Pré-condição:** Aplicativo está instalado e usuário tem dados de atividade  
**Prioridade:** Média  
**Passos do Teste:**
1. Navegar para a tela de dashboard
2. Clicar no ícone de compartilhamento no resumo semanal
3. Verificar opções de compartilhamento
4. Testar processo de compartilhamento

**Resultados Esperados:**
- Ícone de compartilhamento deve ser clicável
- Opções de compartilhamento devem aparecer
- Processo de compartilhamento deve ser concluído com sucesso
- Conteúdo compartilhado deve incluir dados relevantes do treino

### ID do Caso de Teste: TC_DS_009
**Título do Caso de Teste:** Verificar Atualização de Dados  
**Pré-condição:** Aplicativo está instalado e usuário completou um novo treino  
**Prioridade:** Alta  
**Passos do Teste:**
1. Completar uma nova sessão de treino
2. Retornar à tela de dashboard
3. Puxar para atualizar (se disponível)
4. Observar atualização dos dados

**Resultados Esperados:**
- Dados do novo treino devem aparecer na última sessão
- Resumo semanal deve atualizar
- Calendário deve atualizar
- Progresso da meta deve atualizar

### ID do Caso de Teste: TC_DS_010
**Título do Caso de Teste:** Verificar Exibição de Unidades Métricas  
**Pré-condição:** Aplicativo está instalado  
**Prioridade:** Média  
**Passos do Teste:**
1. Navegar para a tela de dashboard
2. Observar todas as exibições métricas
3. Verificar consistência das unidades
4. Verificar formatação dos números

**Resultados Esperados:**
- Velocidade deve ser exibida em km/h
- Tempo deve estar no formato HH:MM:SS
- Calorias devem ser números inteiros
- Todas as unidades devem estar formatadas consistentemente
---

# Casos de Teste: Tela de Busca/Filtro de Aulas

## Suite de Testes: Funcionalidade de Busca e Filtro de Aulas

### ID do Caso de Teste: SRCH_001
**Nome do Caso de Teste:** Expansão/Recolhimento de Filtros  
**Prioridade:** Alta  
**Pré-condição:** 
- Usuário está logado
- Tela de busca está carregada

**Passos do Teste:**
1. Clicar em cada opção de filtro (Modalidades, Distância, etc.)
2. Verificar se o menu suspenso expande
3. Clicar novamente no filtro expandido
4. Verificar se o menu suspenso recolhe

**Resultado Esperado:**
- Cada filtro deve expandir quando clicado
- Cada filtro deve recolher quando clicado novamente
- Apenas um filtro deve estar expandido por vez

**Pós-condição:**
Todos os filtros retornam ao estado recolhido

---

### ID do Caso de Teste: SRCH_002
**Nome do Caso de Teste:** Seleção Múltipla de Filtros  
**Prioridade:** Alta  
**Pré-condição:**
- Usuário está logado
- Tela de busca está carregada

**Passos do Teste:**
1. Expandir filtro de Modalidades
2. Selecionar múltiplas opções
3. Expandir filtro de Duração
4. Selecionar opção de duração
5. Clicar em "Ver todas as aulas"

**Resultado Esperado:**
- Múltiplas seleções devem ser permitidas dentro dos filtros
- Filtros selecionados devem ser indicados visualmente
- Resultados devem refletir todos os filtros aplicados

**Pós-condição:**
Resultados da busca são exibidos com os filtros selecionados aplicados

---

Aqui está a tradução para o português brasileiro:

---

### ID do Caso de Teste: SRCH_003
**Nome do Caso de Teste:** Redefinir/Limpar Filtros  
**Prioridade:** Média  
**Pré-condição:**
- Usuário está logado
- Múltiplos filtros estão selecionados

**Passos do Teste:**
1. Localize a opção de limpar/redefinir
2. Limpe todos os filtros selecionados
3. Verifique o estado dos filtros

**Resultado Esperado:**
- Todos os filtros devem ser redefinidos para o estado padrão
- Nenhuma seleção deve permanecer ativa
- Os resultados da busca devem ser atualizados de acordo

**Pós-condição:**
Todos os filtros retornam ao estado padrão

---

### ID do Caso de Teste: SRCH_004
**Nome do Caso de Teste:** Filtro de Faixa de Gasto Calórico  
**Prioridade:** Média  
**Pré-condição:**
- Usuário está logado
- Tela de busca está carregada

**Passos do Teste:**
1. Expanda o filtro "Gasto Calórico Est"
2. Selecione a faixa de calorias
3. Verifique a atualização dos resultados

**Resultado Esperado:**
- Deve ser possível selecionar a faixa de calorias
- Os resultados devem mostrar aulas dentro da faixa selecionada
- Os valores da faixa devem ser exibidos claramente

**Pós-condição:**
Aulas filtradas pela faixa de gasto calórico selecionada

---

### ID do Caso de Teste: SRCH_005
**Nome do Caso de Teste:** Busca Baseada em Distância  
**Prioridade:** Alta  
**Pré-condição:**
- Usuário está logado
- Serviços de localização habilitados
- Tela de busca está carregada

**Passos do Teste:**
1. Expanda o filtro "Distância"
2. Selecione a faixa de distância
3. Verifique os resultados baseados na localização

**Resultado Esperado:**
- As opções de distância devem estar disponíveis
- Os resultados devem mostrar aulas dentro do raio selecionado
- Permissões de localização devem ser solicitadas, se necessário

**Pós-condição:**
Aulas filtradas pela distância a partir da localização do usuário

---
Aqui está a tradução para o português brasileiro:

---

### ID do Caso de Teste: SRCH_006
**Nome do Caso de Teste:** Filtro de Professor  
**Prioridade:** Média  
**Pré-condição:**
- Usuário está logado
- Tela de busca está carregada

**Passos do Teste:**
1. Expanda o filtro "Professor"
2. Selecione um professor específico
3. Verifique os resultados filtrados

**Resultado Esperado:**
- A lista de professores deve estar preenchida
- Os resultados devem mostrar apenas as aulas do professor selecionado
- Os nomes dos professores devem estar claramente exibidos

**Pós-condição:**
Aulas filtradas pelo professor selecionado

---

### ID do Caso de Teste: SRCH_007
**Nome do Caso de Teste:** Filtro de Duração  
**Prioridade:** Média  
**Pré-condição:**
- Usuário está logado
- Tela de busca está carregada

**Passos do Teste:**
1. Expanda o filtro "Duração"
2. Selecione a duração de tempo
3. Verifique os resultados filtrados

**Resultado Esperado:**
- As opções de duração devem estar disponíveis
- Os resultados devem mostrar aulas com a duração selecionada
- Os formatos de tempo devem estar claramente exibidos

**Pós-condição:**
Aulas filtradas pela duração selecionada

---

### ID do Caso de Teste: SRCH_008
**Nome do Caso de Teste:** Filtro de Estilo de Música  
**Prioridade:** Baixa  
**Pré-condição:**
- Usuário está logado
- Tela de busca está carregada

**Passos do Teste:**
1. Expanda o filtro "Música"
2. Selecione o estilo musical
3. Verifique os resultados filtrados

**Resultado Esperado:**
- As opções de estilo de música devem estar disponíveis
- Os resultados devem mostrar aulas com o estilo musical selecionado
- Os estilos de música devem estar claramente identificados

**Pós-condição:**
Aulas filtradas pelo estilo de música selecionado

---

### ID do Caso de Teste: SRCH_009
**Nome do Caso de Teste:** Persistência dos Filtros  
**Prioridade:** Média  
**Pré-condição:**
- Usuário está logado
- Filtros estão selecionados

**Passos do Teste:**
1. Aplique múltiplos filtros
2. Navegue para fora da tela
3. Retorne para a tela de busca
4. Verifique o estado dos filtros

**Resultado Esperado:**
- Os filtros selecionados devem persistir após a navegação
- As seleções de filtros devem estar visualmente indicadas
- Os resultados devem manter o estado filtrado

**Pós-condição:**
Seleções de filtros mantidas após navegação
---

Aqui está a tradução para o português brasileiro:

---

### ID do Caso de Teste: SRCH_010
**Nome do Caso de Teste:** Busca Sem Filtros  
**Prioridade:** Alta  
**Pré-condição:**
- Usuário está logado
- Tela de busca está carregada
- Nenhum filtro selecionado

**Passos do Teste:**
1. Clique em "Ver todas as aulas" sem selecionar nenhum filtro

**Resultado Esperado:**
- Todas as aulas disponíveis devem ser exibidas
- Os resultados devem estar na ordem de classificação padrão
- Nenhuma restrição de filtro deve ser aplicada

**Pós-condição:**
Todas as aulas exibidas sem filtros

---

### ID do Caso de Teste: SRCH_011
**Nome do Caso de Teste:** Perda de Conexão de Rede  
**Prioridade:** Alta  
**Pré-condição:**
- Usuário está logado
- Tela de busca está carregada

**Passos do Teste:**
1. Desative a conexão de rede
2. Tente aplicar filtros
3. Clique em "Ver todas as aulas"

**Resultado Esperado:**
- Mensagem de erro apropriada exibida
- Dados carregados previamente devem ser manipulados de forma adequada
- Opção de tentar novamente quando a conexão for restaurada

**Pós-condição:**
Usuário notificado sobre o problema de conexão

---

## Suíte de Testes: Rastreamento de Progresso de Treino

### ID do Caso de Teste: EVOL_001
**Nome do Caso de Teste:** Navegação Semanal  
**Prioridade:** Alta  
**Pré-condição:** 
- Usuário está logado
- Usuário possui histórico de treino
- Tela de evolução está carregada

**Passos do Teste:**
1. Clique na seta para a esquerda para visualizar a semana anterior
2. Clique na seta para a direita para visualizar a semana seguinte
3. Verifique a atualização do intervalo de datas
4. Verifique a atualização das estatísticas para a semana selecionada

**Resultado Esperado:**
- A navegação entre semanas deve ser suave
- As estatísticas semanais devem ser atualizadas de acordo
- A semana atual deve estar claramente indicada
- Datas futuras indisponíveis devem estar desabilitadas

**Pós-condição:**
Dados da semana selecionada exibidos corretamente

---

### ID do Caso de Teste: EVOL_002
**Nome do Caso de Teste:** Exibição de Estatísticas Diárias  
**Prioridade:** Alta  
**Pré-condição:**
- Usuário está logado
- Usuário completou treinos no dia

**Passos do Teste:**
1. Selecione um dia com treinos concluídos
2. Verifique o tempo total exibido
3. Verifique a distância (km) exibida
4. Verifique as calorias queimadas exibidas

**Resultado Esperado:**
- Todas as estatísticas devem ser precisas
- Os números devem estar formatados corretamente
- As unidades devem estar claramente exibidas
- Os valores devem corresponder aos totais dos treinos individuais

**Pós-condição:**
Estatísticas diárias refletem com precisão os dados dos treinos

---
Aqui está a tradução para o português brasileiro:

---

### ID do Caso de Teste: EVOL_003
**Nome do Caso de Teste:** Detalhes da Sessão de Treino  
**Prioridade:** Alta  
**Pré-condição:**
- Usuário está logado
- Sessões de treino existem para o dia selecionado

**Passos do Teste:**
1. Localize a sessão de treino específica
2. Verifique o nome da sessão exibido
3. Verifique a duração da sessão exibida
4. Verifique o horário da sessão exibido
5. Clique na seta da sessão para ver os detalhes

**Resultado Esperado:**
- Os detalhes da sessão devem ser precisos
- O formato de horário deve estar correto (HH:MM:SS)
- O ícone do tipo de sessão deve ser exibido
- A navegação para a visualização de detalhes deve funcionar

**Pós-condição:**
Os detalhes da sessão são acessíveis e precisos

---

### ID do Caso de Teste: EVOL_004
**Nome do Caso de Teste:** Seleção de Data no Calendário  
**Prioridade:** Média  
**Pré-condição:**
- Usuário está logado
- Ícone do calendário está visível

**Passos do Teste:**
1. Clique no ícone do calendário
2. Selecione uma data diferente
3. Verifique a atualização da tela
4. Verifique a atualização da lista de treinos

**Resultado Esperado:**
- O calendário deve ser fácil de navegar
- A data selecionada deve estar destacada
- A tela deve atualizar para mostrar os dados da data selecionada
- A data atual deve estar claramente marcada

**Pós-condição:**
Dados da data selecionada são exibidos

---

### ID do Caso de Teste: EVOL_005
**Nome do Caso de Teste:** Cálculo de Resumo Semanal  
**Prioridade:** Alta  
**Pré-condição:**
- Usuário está logado
- A semana contém múltiplos treinos

**Passos do Teste:**
1. Visualize o resumo semanal
2. Verifique a contagem total de sessões
3. Verifique o cálculo do tempo total
4. Verifique o cálculo da distância total
5. Verifique o cálculo das calorias totais

**Resultado Esperado:**
- O resumo "Esta semana" deve mostrar os totais corretos
- Todos os cálculos devem ser precisos
- Os números devem estar devidamente arredondados
- As unidades devem ser exibidas corretamente

**Pós-condição:**
Resumo semanal reflete com precisão todos os treinos

---

### ID do Caso de Teste: EVOL_006
**Nome do Caso de Teste:** Indicadores de Status do Dia  
**Prioridade:** Média  
**Pré-condição:**
- Usuário está logado
- Visão semanal está exibida

**Passos do Teste:**
1. Verifique os indicadores de treino completo
2. Verifique o destaque do dia atual
3. Verifique a aparência dos dias futuros
4. Verifique os dias passados sem treinos

**Resultado Esperado:**
- Deve aparecer um tique para os dias com treinos completos
- O dia atual deve estar destacado
- Os dias futuros devem estar estilizados apropriadamente
- Dias passados devem mostrar o status dos treinos

**Pós-condição:**
Todos os indicadores de status dos dias são exibidos corretamente

---
Aqui está a tradução para o português brasileiro:

---

### ID do Caso de Teste: EVOL_003
**Nome do Caso de Teste:** Detalhes da Sessão de Treino  
**Prioridade:** Alta  
**Pré-condição:**
- Usuário está logado
- Sessões de treino existem para o dia selecionado

**Passos do Teste:**
1. Localize a sessão de treino específica
2. Verifique o nome da sessão exibido
3. Verifique a duração da sessão exibida
4. Verifique o horário da sessão exibido
5. Clique na seta da sessão para ver os detalhes

**Resultado Esperado:**
- Os detalhes da sessão devem ser precisos
- O formato de horário deve estar correto (HH:MM:SS)
- O ícone do tipo de sessão deve ser exibido
- A navegação para a visualização de detalhes deve funcionar

**Pós-condição:**
Os detalhes da sessão são acessíveis e precisos

---

### ID do Caso de Teste: EVOL_004
**Nome do Caso de Teste:** Seleção de Data no Calendário  
**Prioridade:** Média  
**Pré-condição:**
- Usuário está logado
- Ícone do calendário está visível

**Passos do Teste:**
1. Clique no ícone do calendário
2. Selecione uma data diferente
3. Verifique a atualização da tela
4. Verifique a atualização da lista de treinos

**Resultado Esperado:**
- O calendário deve ser fácil de navegar
- A data selecionada deve estar destacada
- A tela deve atualizar para mostrar os dados da data selecionada
- A data atual deve estar claramente marcada

**Pós-condição:**
Dados da data selecionada são exibidos

---

### ID do Caso de Teste: EVOL_005
**Nome do Caso de Teste:** Cálculo de Resumo Semanal  
**Prioridade:** Alta  
**Pré-condição:**
- Usuário está logado
- A semana contém múltiplos treinos

**Passos do Teste:**
1. Visualize o resumo semanal
2. Verifique a contagem total de sessões
3. Verifique o cálculo do tempo total
4. Verifique o cálculo da distância total
5. Verifique o cálculo das calorias totais

**Resultado Esperado:**
- O resumo "Esta semana" deve mostrar os totais corretos
- Todos os cálculos devem ser precisos
- Os números devem estar devidamente arredondados
- As unidades devem ser exibidas corretamente

**Pós-condição:**
Resumo semanal reflete com precisão todos os treinos

---

### ID do Caso de Teste: EVOL_006
**Nome do Caso de Teste:** Indicadores de Status do Dia  
**Prioridade:** Média  
**Pré-condição:**
- Usuário está logado
- Visão semanal está exibida

**Passos do Teste:**
1. Verifique os indicadores de treino completo
2. Verifique o destaque do dia atual
3. Verifique a aparência dos dias futuros
4. Verifique os dias passados sem treinos

**Resultado Esperado:**
- Deve aparecer um tique para os dias com treinos completos
- O dia atual deve estar destacado
- Os dias futuros devem estar estilizados apropriadamente
- Dias passados devem mostrar o status dos treinos

**Pós-condição:**
Todos os indicadores de status dos dias são exibidos corretamente

---
Aqui está a tradução para o português brasileiro:

---

### ID do Caso de Teste: EVOL_010
**Nome do Caso de Teste:** Atualização de Dados  
**Prioridade:** Média  
**Pré-condição:**
- Usuário está logado
- Novo treino concluído em outro dispositivo

**Passos do Teste:**
1. Conclua o treino em outro dispositivo
2. Aguarde o período de sincronização ou acione a atualização manual
3. Verifique a atualização dos dados
4. Verifique o recálculo do resumo

**Resultado Esperado:**
- Novos dados devem aparecer automaticamente ou após a atualização
- As estatísticas do resumo devem ser atualizadas
- A lista de sessões deve ser atualizada
- Indicadores de status devem ser atualizados

**Pós-condição:**
Todos os dados sincronizados e atualizados

---

### ID do Caso de Teste: EVOL_011
**Nome do Caso de Teste:** Formato de Exibição do Horário da Sessão  
**Prioridade:** Baixa  
**Pré-condição:**
- Usuário está logado
- Sessões com várias durações existem

**Passos do Teste:**
1. Visualize sessões com diferentes durações
2. Verifique a consistência do formato de horário
3. Verifique a exibição AM/PM
4. Verifique diferentes fusos horários, se aplicável

**Resultado Esperado:**
- O formato de horário deve ser consistente
- A duração deve estar no formato HH:MM:SS
- Os horários das sessões devem estar no horário local
- Fusos horários devem ser tratados corretamente

**Pós-condição:**
Todos os horários são exibidos corretamente e de forma consistente

---

## Suíte de Testes: Gerenciamento de Perfil do Usuário

### ID do Caso de Teste: PROF_001
**Nome do Caso de Teste:** Exibição das Informações do Perfil  
**Prioridade:** Alta  
**Pré-condição:** 
- Usuário está logado
- Tela de perfil está carregada

**Passos do Teste:**
1. Verifique a exibição do nome do usuário
2. Verifique a exibição do endereço de e-mail
3. Verifique a exibição da data de nascimento
4. Verifique a exibição da foto de perfil
5. Verifique a mensagem de saudação ("Olá! Boa tarde")

**Resultado Esperado:**
- Todas as informações do usuário devem ser exibidas corretamente
- O formato da data deve estar localizado
- A saudação deve corresponder ao período do dia
- O e-mail deve estar em formato válido
- A foto de perfil deve estar corretamente ajustada

**Pós-condição:**
Todas as informações do perfil exibidas com precisão

---

### ID do Caso de Teste: PROF_002
**Nome do Caso de Teste:** Atualização da Foto de Perfil  
**Prioridade:** Média  
**Pré-condição:**
- Usuário está logado
- Possui permissões para câmera/galeria

**Passos do Teste:**
1. Clique no ícone de edição na foto de perfil
2. Selecione a fonte da imagem (câmera/galeria)
3. Selecione/capture uma nova imagem
4. Confirme a seleção da imagem
5. Verifique a atualização da imagem

**Resultado Esperado:**
- O seletor de imagem deve abrir
- A imagem selecionada deve ser carregada
- A foto de perfil deve ser atualizada
- As mudanças devem persistir após recarregar

**Pós-condição:**
Foto de perfil atualizada com sucesso
Aqui está a tradução para o português brasileiro:

---

### ID do Caso de Teste: PROF_003
**Nome do Caso de Teste:** Acesso aos Ajustes Iniciais  
**Prioridade:** Alta  
**Pré-condição:**
- Usuário está logado

**Passos do Teste:**
1. Clique em "Ajustes Iniciais"
2. Verifique se a tela de ajustes carrega
3. Verifique se todas as opções de ajustes são acessíveis
4. Verifique se os valores atuais dos ajustes são exibidos

**Resultado Esperado:**
- A tela de ajustes deve abrir
- Todas as opções devem ser clicáveis
- Os valores atuais devem ser exibidos
- A navegação deve ser fluida

**Pós-condição:**
Tela de ajustes acessível e funcional

---

### ID do Caso de Teste: PROF_004
**Nome do Caso de Teste:** Acesso a Minhas Aulas  
**Prioridade:** Alta  
**Pré-condição:**
- Usuário está logado

**Passos do Teste:**
1. Clique em "Minhas aulas"
2. Verifique se a lista de aulas carrega
3. Verifique se os detalhes das aulas estão visíveis
4. Verifique a navegação de volta ao perfil

**Resultado Esperado:**
- A tela de aulas deve abrir
- As informações das aulas devem estar visíveis
- A navegação deve funcionar corretamente
- A lista deve ser rolável, se necessário

**Pós-condição:**
Tela de aulas acessível e exibindo dados corretos

---

### ID do Caso de Teste: PROF_005
**Nome do Caso de Teste:** Função de Avaliação do Aplicativo  
**Prioridade:** Média  
**Pré-condição:**
- Usuário está logado
- Aplicativo instalado a partir da loja oficial

**Passos do Teste:**
1. Clique em "Avalie o Aplicativo"
2. Verifique se a interface de avaliação aparece
3. Envie a avaliação
4. Verifique a mensagem de confirmação

**Resultado Esperado:**
- A interface de avaliação deve abrir
- O envio da avaliação deve funcionar
- O feedback deve ser salvo
- A confirmação apropriada deve ser exibida

**Pós-condição:**
Avaliação enviada com sucesso
---
Aqui está a tradução para o português brasileiro:

---

### ID do Caso de Teste: PROF_006
**Nome do Caso de Teste:** Acesso ao Sistema de Ajuda  
**Prioridade:** Alta  
**Pré-condição:**
- Usuário está logado
- Conexão com a internet disponível

**Passos do Teste:**
1. Clique em "Precisa de ajuda?"
2. Clique em "Fale conosco"
3. Verifique se as opções de ajuda são exibidas
4. Teste os métodos de contato

**Resultado Esperado:**
- As opções de ajuda devem ser acessíveis
- Os métodos de contato devem funcionar
- As informações de suporte devem ser claras
- A navegação deve ser intuitiva

**Pós-condição:**
Sistema de ajuda acessível e funcional

---

### ID do Caso de Teste: PROF_007
**Nome do Caso de Teste:** Política de Privacidade e Termos de Uso  
**Prioridade:** Média  
**Pré-condição:**
- Usuário está logado

**Passos do Teste:**
1. Clique em "Política de Privacidade"
2. Verifique se o conteúdo da política carrega
3. Retorne ao perfil
4. Clique em "Termos de uso"
5. Verifique se o conteúdo dos termos carrega

**Resultado Esperado:**
- Os documentos devem ser legíveis
- A navegação deve funcionar
- O conteúdo deve estar atualizado
- Os links devem estar funcionais

**Pós-condição:**
Documentos legais acessíveis e legíveis

---

### ID do Caso de Teste: PROF_008
**Nome do Caso de Teste:** Perfil em Modo Offline  
**Prioridade:** Alta  
**Pré-condição:**
- Usuário está logado
- Em seguida, desconecte a internet

**Passos do Teste:**
1. Desative a conexão com a internet
2. Acesse as informações do perfil
3. Tente atualizar a foto de perfil
4. Tente acessar várias seções

**Resultado Esperado:**
- As informações básicas do perfil devem ser visíveis
- Mensagens apropriadas de offline devem ser exibidas
- Dados em cache devem estar acessíveis
- As funções de atualização devem estar desativadas

**Pós-condição:**
Perfil lida com o estado offline de maneira apropriada

---
Claro! Aqui está a tradução do texto que você forneceu para o português:

---

### ID do Caso de Teste: PROF_009
**Nome do Caso de Teste:** Saudação Baseada no Tempo  
**Prioridade:** Baixa  
**Pré-condição:**
- O usuário está logado

**Passos do Teste:**
1. Acessar o perfil em diferentes horários do dia
2. Verificar se a saudação muda apropriadamente
3. Verificar diferentes fusos horários
4. Verificar a localização do idioma

**Resultado Esperado:**
- A saudação deve corresponder ao horário do dia
- O idioma deve estar correto
- O fuso horário deve ser respeitado
- O formato deve ser consistente

**Pós-condição:**
A saudação é exibida corretamente para o horário/locale

---

### ID do Caso de Teste: PROF_010
**Nome do Caso de Teste:** Função da Barra de Navegação  
**Prioridade:** Alta  
**Pré-condição:**
- O usuário está logado

**Passos do Teste:**
1. Clicar em cada ícone da barra de navegação
2. Retornar ao perfil pela barra de navegação
3. Verificar a indicação do estado ativo
4. Verificar o histórico de navegação

**Resultado Esperado:**
- A navegação deve ser suave
- O estado ativo deve ser claro
- O histórico deve funcionar corretamente
- Os ícones devem ser responsivos

**Pós-condição:**
A navegação funciona corretamente

---

### ID do Caso de Teste: PROF_011
**Nome do Caso de Teste:** Validação dos Dados do Perfil  
**Prioridade:** Alta  
**Pré-condição:**
- O usuário está logado
- O modo de edição do perfil está acessível

**Passos do Teste:**
1. Verificar o formato do e-mail
2. Verificar o formato da data
3. Validar a exibição do nome
4. Verificar os limites de caracteres

**Resultado Esperado:**
- O e-mail deve ter um formato válido
- A data deve estar formatada corretamente
- O nome deve seguir as regras
- Não deve haver truncamento de dados importantes

**Pós-condição:**
Todos os dados do perfil validados corretamente

--- 

Se precisar de mais alguma coisa, é só avisar!