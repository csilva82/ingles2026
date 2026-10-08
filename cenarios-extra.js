/* Diálogos extras. Formato de cada passo:
   [fala da outra pessoa, tradução, sua resposta, tradução]
   As opções erradas são geradas sozinhas a partir das outras respostas da mesma situação. */
var EXTRA = [
{ nome: "Hotel", desc: "Check-in, café da manhã e pedidos ao quarto.", p: [
 ["Good afternoon. How can I help you?", "Boa tarde. Como posso ajudar?", "I have a reservation under the name Silva.", "Tenho uma reserva no nome Silva."],
 ["Could I see your ID, please?", "Posso ver seu documento, por favor?", "Sure, here is my passport.", "Claro, aqui está meu passaporte."],
 ["How many nights will you stay?", "Quantas noites vai ficar?", "Three nights, until Friday.", "Três noites, até sexta."],
 ["Your room is on the fifth floor.", "Seu quarto é no quinto andar.", "Great. Is breakfast included?", "Ótimo. O café da manhã está incluído?"],
 ["Yes, from six to ten a.m.", "Sim, das seis às dez da manhã.", "Perfect. What is the Wi-Fi password?", "Perfeito. Qual é a senha do Wi-Fi?"],
 ["It is on the card in your room.", "Está no cartão no seu quarto.", "Thanks. Could you call a taxi for tomorrow at seven?", "Obrigado. Pode chamar um táxi amanhã às sete?"],
 ["Of course. Do you need anything else?", "Claro. Precisa de mais alguma coisa?", "Yes, I need an extra towel, please.", "Sim, preciso de uma toalha extra, por favor."],
 ["I'll send one up right away.", "Vou enviar uma agora mesmo.", "Thank you so much for your help.", "Muito obrigado pela ajuda."]
]},
{ nome: "Médico", desc: "Descrever sintomas e entender a receita.", p: [
 ["What seems to be the problem?", "Qual parece ser o problema?", "I have a headache and a sore throat.", "Estou com dor de cabeça e dor de garganta."],
 ["How long have you had these symptoms?", "Há quanto tempo tem esses sintomas?", "Since Monday. It's getting worse.", "Desde segunda. Está piorando."],
 ["Do you have a fever?", "Você tem febre?", "Yes, my temperature was 38 degrees last night.", "Sim, minha temperatura estava 38 graus ontem à noite."],
 ["Are you allergic to any medication?", "Você tem alergia a algum remédio?", "Yes, I'm allergic to penicillin.", "Sim, tenho alergia a penicilina."],
 ["Take this medicine twice a day, after meals.", "Tome este remédio duas vezes ao dia, após as refeições.", "Okay. For how many days should I take it?", "Certo. Por quantos dias devo tomar?"],
 ["For seven days. Drink a lot of water.", "Por sete dias. Beba bastante água.", "Understood. Do I need to come back?", "Entendi. Preciso voltar?"],
 ["Come back next week if you don't feel better.", "Volte na semana que vem se não melhorar.", "Thank you, doctor. Can I get a medical certificate for work?", "Obrigado, doutor. Posso receber um atestado para o trabalho?"],
 ["Sure. Here is your certificate.", "Claro. Aqui está seu atestado.", "Thank you. I hope to feel better soon.", "Obrigado. Espero melhorar logo."]
]},
{ nome: "Compras", desc: "Tamanhos, preços e pagamento em uma loja.", p: [
 ["Hi! Are you looking for something special?", "Oi! Está procurando algo especial?", "I'm just looking, thanks. I'll ask if I need help.", "Só estou olhando, obrigado. Eu peço se precisar de ajuda."],
 ["Sure. Let me know if you need anything.", "Claro. Me avise se precisar de algo.", "Yes, do you have this shirt in a medium?", "Sim, vocês têm esta camisa no tamanho M?"],
 ["Let me check. Yes, we have it in blue and black.", "Deixe-me ver. Sim, temos em azul e preto.", "I'll take the blue one. Where can I try it on?", "Vou levar a azul. Onde posso experimentar?"],
 ["The fitting rooms are at the back.", "Os provadores ficam nos fundos.", "It's a little tight. Do you have a bigger size?", "Está um pouco apertada. Tem um tamanho maior?"],
 ["Here is a large. How does it fit?", "Aqui está uma G. Como ficou?", "It fits perfectly. How much is it?", "Ficou perfeita. Quanto custa?"],
 ["It's fifty dollars, but it's on sale today.", "Custa cinquenta dólares, mas está em promoção hoje.", "Great. Can I pay by card?", "Ótimo. Posso pagar com cartão?"],
 ["Yes. Would you like a bag?", "Sim. Quer uma sacola?", "No, thanks. I have my own bag.", "Não, obrigado. Tenho minha própria sacola."],
 ["Here is your receipt. Keep it if you need to exchange it.", "Aqui está seu recibo. Guarde se precisar trocar.", "Thank you. I'll keep it. Goodbye!", "Obrigado. Vou guardar. Tchau!"]
]},
{ nome: "Pedindo direções", desc: "Perguntar o caminho na rua.", p: [
 ["You look lost. Do you need help?", "Você parece perdido. Precisa de ajuda?", "Yes, please. How do I get to the train station?", "Sim, por favor. Como chego à estação de trem?"],
 ["Go straight for two blocks.", "Siga em frente por dois quarteirões.", "Two blocks. And then?", "Dois quarteirões. E depois?"],
 ["Then turn left at the traffic light.", "Depois vire à esquerda no semáforo.", "Turn left at the light. Is it far from there?", "Virar à esquerda no semáforo. É longe de lá?"],
 ["No, it's about five minutes on foot.", "Não, são uns cinco minutos a pé.", "Perfect. Is there a bank near here?", "Perfeito. Tem algum banco por aqui perto?"],
 ["Yes, there is one next to the pharmacy.", "Sim, tem um ao lado da farmácia.", "Great. Is it open on Saturdays?", "Ótimo. Abre aos sábados?"],
 ["I think it closes at noon on Saturdays.", "Acho que fecha ao meio-dia aos sábados.", "Okay, then I'll go today. Where can I buy a ticket?", "Certo, então irei hoje. Onde posso comprar uma passagem?"],
 ["At the machine inside the station.", "Na máquina dentro da estação.", "Thank you so much. You've been very kind.", "Muito obrigado. Você foi muito gentil."],
 ["No problem. Enjoy your trip!", "Sem problema. Boa viagem!", "Thanks! Have a great day.", "Obrigado! Tenha um ótimo dia."]
]},
{ nome: "Entrevista de emprego", desc: "Falar de experiência, pontos fortes e salário.", p: [
 ["Please, have a seat. Tell me about yourself.", "Por favor, sente-se. Fale sobre você.", "I'm a maintenance technician with six years of experience.", "Sou técnico de manutenção com seis anos de experiência."],
 ["Why do you want to work here?", "Por que quer trabalhar aqui?", "I admire your company and I want to grow my career.", "Admiro sua empresa e quero crescer na carreira."],
 ["What are your strengths?", "Quais são seus pontos fortes?", "I'm organized, and I solve problems quickly.", "Sou organizado e resolvo problemas rapidamente."],
 ["And your weaknesses?", "E seus pontos fracos?", "Sometimes I take too long on details, but I'm improving.", "Às vezes demoro demais nos detalhes, mas estou melhorando."],
 ["Can you work in shifts?", "Você consegue trabalhar em turnos?", "Yes, I can work any shift, including weekends.", "Sim, posso trabalhar em qualquer turno, inclusive fins de semana."],
 ["Do you use English at work?", "Você usa inglês no trabalho?", "Yes, I use it every day to read manuals and write reports.", "Sim, uso todo dia para ler manuais e escrever relatórios."],
 ["What salary do you expect?", "Que salário você espera?", "I'd like to discuss it after learning more about the role.", "Gostaria de conversar sobre isso depois de saber mais sobre a vaga."],
 ["Do you have any questions for us?", "Você tem alguma pergunta para nós?", "Yes. What does a typical day look like in this position?", "Sim. Como é um dia típico nesta posição?"]
]},
{ nome: "Fábrica: máquina parada", desc: "Diagnosticar uma falha e reportar o reparo.", p: [
 ["The machine stopped. What happened?", "A máquina parou. O que aconteceu?", "I don't know yet. I'll check the control panel.", "Ainda não sei. Vou verificar o painel de controle."],
 ["Is there any error message?", "Há alguma mensagem de erro?", "Yes, it shows an overheating alarm.", "Sim, aparece um alarme de superaquecimento."],
 ["Did you check the cooling system?", "Você verificou o sistema de refrigeração?", "Yes, the fan is not working.", "Sim, o ventilador não está funcionando."],
 ["Do we have a spare fan?", "Temos um ventilador reserva?", "Yes, there is one in the warehouse.", "Sim, tem um no almoxarifado."],
 ["How long will the repair take?", "Quanto tempo vai levar o reparo?", "About two hours, if I get help.", "Cerca de duas horas, se eu tiver ajuda."],
 ["Is it safe to restart the line?", "É seguro reiniciar a linha?", "Not yet. First, I need to lock out the power.", "Ainda não. Primeiro preciso bloquear a energia."],
 ["Please write a report about the failure.", "Por favor, escreva um relatório sobre a falha.", "Sure. I'll send it to you by the end of the shift.", "Claro. Envio até o fim do turno."],
 ["Good job. The line is running again.", "Bom trabalho. A linha voltou a funcionar.", "Thanks. I'll monitor the temperature for the next hour.", "Obrigado. Vou monitorar a temperatura na próxima hora."]
]},
{ nome: "Ligando para fornecedor", desc: "Fazer um pedido, perguntar preço e prazo.", p: [
 ["Hello, this is Parts Supply. How can I help you?", "Olá, aqui é a Parts Supply. Como posso ajudar?", "Hello, I'd like to order twenty bearings, please.", "Olá, gostaria de pedir vinte rolamentos, por favor."],
 ["Which model do you need?", "Qual modelo você precisa?", "Model six-two-zero-five, please.", "Modelo seis-dois-zero-cinco, por favor."],
 ["We have it in stock. Anything else?", "Temos em estoque. Mais alguma coisa?", "Yes. What is the price per unit?", "Sim. Qual é o preço por unidade?"],
 ["It's twelve dollars each.", "São doze dólares cada.", "Is there a discount for larger orders?", "Há desconto para pedidos maiores?"],
 ["Yes, ten percent over fifty units.", "Sim, dez por cento acima de cinquenta unidades.", "Then I'll order fifty. When can you deliver?", "Então pedirei cinquenta. Quando podem entregar?"],
 ["We can deliver on Thursday.", "Podemos entregar na quinta.", "I need it by Wednesday. Is that possible?", "Preciso até quarta. É possível?"],
 ["Let me check. Yes, with express shipping.", "Deixe-me ver. Sim, com frete expresso.", "Great. Please send me the invoice by email.", "Ótimo. Por favor, envie a nota fiscal por e-mail."],
 ["Could you spell your email address?", "Pode soletrar seu endereço de e-mail?", "Sure. It's john, dot, silva, at company dot com.", "Claro. É john, ponto, silva, arroba company ponto com."]
]},
{ nome: "Ao telefone no trabalho", desc: "Deixar recado e pedir para repetir.", p: [
 ["Good morning, Alpha Industries.", "Bom dia, Alpha Industries.", "Good morning. May I speak to Mr. Brown, please?", "Bom dia. Posso falar com o Sr. Brown, por favor?"],
 ["Who is calling, please?", "Quem está falando, por favor?", "This is Carlos from the maintenance department.", "É o Carlos, do departamento de manutenção."],
 ["I'm sorry, he's in a meeting right now.", "Sinto muito, ele está em reunião agora.", "Could I leave a message?", "Posso deixar um recado?"],
 ["Of course. What is the message?", "Claro. Qual é o recado?", "Please ask him to call me back as soon as possible.", "Por favor, peça que ele me ligue assim que possível."],
 ["What is your phone number?", "Qual é o seu telefone?", "It's five five, nine nine nine, one two three four.", "É cinco cinco, nove nove nove, um dois três quatro."],
 ["Could you repeat that more slowly?", "Pode repetir mais devagar?", "Sure. Five five, nine nine nine, one two three four.", "Claro. Cinco cinco, nove nove nove, um dois três quatro."],
 ["Got it. I'll give him the message.", "Entendi. Vou passar o recado a ele.", "Thank you. When will he be back?", "Obrigado. Quando ele volta?"],
 ["He'll be back after lunch.", "Ele volta depois do almoço.", "Okay, I'll call again at two. Thank you for your help.", "Certo, ligo de novo às duas. Obrigado pela ajuda."]
]}
];
