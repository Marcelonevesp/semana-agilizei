#language: pt

Funcionalidade: Listagem

    Como usuário desejo acessar a listagem
    Para que possa visualizar meus dados de cadastro

Cenario: Listagem sem registros
    Dado que acesso não possui registro
    Quando acessar a listagem
    Entao devo visualizar a listagem vazia

Cenario: Listagem com apenas um registro
    Dado que acesso possui apenas registro
    Quando acessar a listagem
    Entao devo visualizar apenas um registro