// Dados dos quizzes
const quizData1 = [
    { question: "Qual é o principal objetivo do teste de software?", options: ["a) Melhorar o desempenho do software", "b) Verificar se o software atende aos requisitos e identificar erros", "c) Reduzir o custo do desenvolvimento de software", "d) Aumentar o número de funcionalidades"], correct: 2 },
    { question: "Qual dos seguintes tipos de teste é focado em verificar partes individuais de código, como funções e métodos?", options: ["a) Teste de integração", "b) Teste de aceitação", "c) Teste unitário", "d) Teste de sistema"], correct: 3 },
    { question: "Qual teste é feito para verificar se o sistema funciona corretamente após a adição de novos módulos?", options: ["a) Teste de integração ", "b) Teste de unidade", "c) Teste de integração", "d) Teste de desempenho"], correct: 0 },
    { question: "QQual dos seguintes testes é normalmente realizado pelo usuário ou cliente para garantir que o software atende às suas necessidades?", options: ["a) Teste de unidade", "b) Teste de sistema", "C)Teste de integração", "d) Teste de aceitação"], correct: 3 },
    { question: "Qual das alternativas abaixo descreve corretamente o teste automatizado?", options: ["a) É feito apenas para pequenos sistemas", "b) Não requer ferramentas específicas", "c) Usa scripts para realizar testes repetitivos", "d) É exclusivamente realizado por humanos"], correct: 2 }
];

const quizData2 = [
    { question: "Em que ocasião o usuário usaria a qualidade de software?", options: ["a) Quando precisa de um software com alta segurança, facilidade de uso e desempenho confiável", "b) Quando deseja aumentar a quantidade de funcionalidades de um software sem precisar de testes", "c) Quando utiliza um sistema com falhas frequentes e baixo desempenho", "d) Quando quer acessar funcionalidades restritas de um sistema sem autorização"], correct: 0 },
    { question: "O que são os testes funcionais com qualidade de software?", options: ["a) Testes que verificam o desempenho e a segurança do sistema em condições extremas", "b) Testes que analisam o código-fonte do software em busca de falhas e vulnerabilidades", "c) Testes que avaliam se as funcionalidades do sistema atendem aos requisitos definidos", "d) Testes que focam exclusivamente na interface visual do software."], correct: 2 },
    { question: "Qual é o principal objetivo dos testes não funcionais em qualidade de software?", options: ["a) Avaliar se as funcionalidades do sistema estão de acordo com os requisitos", "b) Verificar a estrutura do código-fonte para identificar falhas", "c) Medir o desempenho, segurança e usabilidade do software em diferentes condições", "d) Testar o sistema apenas em sua interface visual"], correct: 2 },
    { question: "Qual é o principal objetivo dos testes não funcionais em qualidade de software?", options: ["a) Avaliar se as funcionalidades do sistema estão de acordo com os requisitos", "b) Verificar a estrutura do código-fonte para identificar falhas", "c) Medir o desempenho, segurança e usabilidade do software em diferentes condições", "d) Testar o sistema apenas em sua interface visual"], correct: 1 },
    { question: "Por que os testes estruturais são importantes na qualidade de software?", options: ["a) Porque eles verificam a segurança e usabilidade do software", "b) Porque ajudam a encontrar falhas na lógica e na estrutura interna do código", "c) Porque garantem que o sistema funcione bem em condições de alta carga", "d) Porque testam apenas as funcionalidades externas do sistema"], correct: 1 }
];

const quizData3 = [
    { question: "Qual é a primeira fase do ciclo de vida de software?", options: ["a) Testes", "b) Desenvolvimento", "c) Planejamento e Análise de Requisitos", "d) Implantação"], correct: 2 },
    { question: "Em qual fase do ciclo de vida de software a arquitetura e as especificações técnicas do sistema são definidas?", options: ["a) Testes", "b) Projeto (Design)", "c) Manutenção", "d) Desenvolvimento"], correct: 1 },
    { question: " A fase de testes tem como objetivo:", options: ["a) Corrigir defeitos no software", "b) Implementar novas funcionalidades ", "c) Verificar se o software atende aos requisitos e funciona corretamente", "d) Definir os requisitos do sistema"], correct: 3 },
    { question: "No ciclo de vida ágil de software, as fases são:", options: ["a) Sequenciais e inflexíveis", "b) Realizadas uma única vez", "c) Iterativas e incrementais ", "d) Exclusivamente focadas em testes"], correct: 2 },
    { question: "Após a implantação do software, qual é a fase que envolve correções e adaptações contínuas?", options: ["a) Projeto (Design) ", "b) Manutenção", "c) Planejamento e Análise de Requisitos ", "d) Testes "], correct: 1 }
];

const quizData4 = [
    { question: "Em que o RUP se baseia para o desenvolvimento de software?", options: ["a) No desenvolvimento orientado a objetos, usando a UML de forma sistemática. ", "b) Em técnicas manuais sem o uso de UML.", "c) Apenas no design visual sem regras de orientação a objetos. ", "d) Na criação de protótipos de baixa fidelidade sem testes."], correct: 0 },
    { question: "Qual é o papel dos testes no RUP?", options: ["a) Garantir a confiabilidade do produto final e reduzir riscos de falhas.", "b) Garantir que o software será lançado o mais rápido possível.", "c) Evitar o uso de recursos de desenvolvimento.", "d) Apenas fazer ajustes no design visual do software."], correct: 0 },
    { question: "Em que momento os testes devem ser realizados no RUP?", options: ["a) Durante todo o processo de desenvolvimento para uma cobertura abrangente.", "b) Apenas ao final do projeto, pouco antes do lançamento.", "c) Somente na fase inicial de design. ", "d) Após o lançamento do software."], correct: 0 },
    { question: "O que os testes permitem no desenvolvimento de software com o RUP?", options: ["a) A identificação e correção de defeitos, contribuindo para que o software atenda aos requisitos.", "b) A criação de novos requisitos após o software ser lançado. ", "c) Apenas uma análise superficial dos erros, sem foco em correção.", "d) Melhorar apenas a interface visual do software."], correct: 0 },
    { question: "5. Qual é a garantia de qualidade proporcionada pelos testes no RUP?", options: ["a) Embora não garantam a qualidade por si só, ajudam a medir e corrigir defeitos no software.", "b) Garantem a qualidade automaticamente, sem necessidade de revisões.", "c) A qualidade é garantida apenas no visual do produto. ", "d) Não têm impacto na qualidade do software final."], correct: 0 }
];

const quizData5 = [
    { question: "Qual é o principal objetivo dos processos de revisão no desenvolvimento de sistemas?", options: ["a) Reduzir os custos com testes finais", "b) Garantir a qualidade e eficiência do software.", "c) Acelerar o desenvolvimento sem análise detalhada.", "d) Substituir a necessidade de testes manuais."], correct: 1 },
    { question: "Após a identificação de falhas, o que deve ser feito?", options: ["a) Ignorar as falhas para não perder tempo.", "b) Aplicar medidas corretivas para solucioná-las. ", "c) Aumentar o número de testes sem mudar o código.", " d) Deixar para corrigir na fase de manutenção."], correct: 1 },
    { question: "Quais são alguns dos aspectos que as revisões devem considerar?", options: ["a) Apenas a documentação do sistema.", "b) O desempenho do sistema e a arquitetura do código.", "c) O tempo de entrega do projeto. ", "d) A quantidade de linhas de código no sistema."], correct: 1 },
    { question: "O que pode auxiliar na eficácia das revisões de código?", options: ["a) Realizar revisões apenas manualmente.", "b) Integrar ferramentas automatizadas de análise de código.", "c) Ignorar o uso de métricas e indicadores de desempenho.", "d) Focar apenas na correção de erros de sintaxe."], correct: 1 },
    { question: "Por que é importante conhecer as melhores práticas em revisões de sistemas?", options: ["a) Para garantir que todos os desenvolvedores sigam a mesma estratégia de revisão.", "b) Para acelerar o desenvolvimento sem comprometer a qualidade.", "c) Para evitar mudanças na arquitetura do sistema", "d) Para otimizar o tempo e melhorar a qualidade do sistema."], correct: 3 }
];

// Função para mostrar perguntas de cada quiz
function showQuestion(quizData, quizContainerId, resultContainerId, restartBtnId) {
    const quizContainer = document.getElementById(quizContainerId);
    const resultContainer = document.getElementById(resultContainerId);
    const restartBtn = document.getElementById(restartBtnId);
    let currentQuestionIndex = 0;
    let score = 0;

    // Função para renderizar perguntas
    function renderQuestion() {
        const questionData = quizData[currentQuestionIndex];
        if (!questionData) {
            // Esconde o container de perguntas
            quizContainer.classList.add("hidden");

            // Exibe a pontuação final
            resultContainer.textContent = `Você acertou ${score} de ${quizData.length} perguntas!`;

            // Exibe o botão de reinício
            restartBtn.classList.remove("hidden");
            return;
        }

        // Limpa o container de perguntas
        quizContainer.innerHTML = "";

        // Cria a pergunta e as opções
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `
            <h3>${questionData.question}</h3>
            <div class="options">
                ${questionData.options.map((option, i) => `
                    <label>
                        <input id="radio" type="radio" name="question" value="${i}">
                        ${option}
                    </label>
                `).join("")}
            </div>
        `;
        quizContainer.appendChild(questionDiv);

        // Adiciona evento de clique para cada opção
        const options = questionDiv.querySelectorAll("input[name='question']");
        options.forEach((option) => {
            option.addEventListener("change", () => {
                const selectedValue = parseInt(option.value);
                if (selectedValue === questionData.correct) score++;
                currentQuestionIndex++;
                renderQuestion();
            });
        });
    }

    // Função de reiniciar o quiz
    function restartQuiz() {
        score = 0;
        currentQuestionIndex = 0;

        // Esconde o resultado e o botão de reinício
        resultContainer.textContent = "";
        restartBtn.classList.add("hidden");

        // Exibe novamente o quiz
        quizContainer.classList.remove("hidden");
        
        // Reinicia o quiz
        renderQuestion();
    }

    // Vincula o evento de clique no botão de reinício
    restartBtn.addEventListener("click", restartQuiz);

    // Inicia o quiz
    renderQuestion();
}

// Inicializando os quizzes
showQuestion(quizData1, "quiz-container-1", "result-1", "restart-btn-1");
showQuestion(quizData2, "quiz-container-2", "result-2", "restart-btn-2");
showQuestion(quizData3, "quiz-container-3", "result-3", "restart-btn-3");
showQuestion(quizData4, "quiz-container-4", "result-4", "restart-btn-4");
showQuestion(quizData5, "quiz-container-5", "result-5", "restart-btn-5");
