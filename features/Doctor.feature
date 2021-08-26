# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo curar os viajantes doentes
    Para seguir viagem

    Contexto:
    Dado um Doctor com o nome "Stephen Strange"

Cenário: Curou um viajante doente
Quando o Doctor curar um Traveler doente
Então O Traveler se torna saudável

Cenário: Tentou curar um viajante saudável
Quando o Doctor tentar curar um Traveler saudável
Então o Traveler permanece saudável