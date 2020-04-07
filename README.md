# Credit Cart Checkout

#### História de usuário:
- Eu como cliente,
- Quero usar meu cartão de crédito para realizar o pagamento
- Para conseguir realizar a compra

#### Cenário Feliz
- Dado que o usuário esteja na tela de pagamento,
- Quando ele preencher todos os campos do formulario com valores válidos
- O botão "continuar" deve ser habilitado

Para ver os cenários com mais detalhes, execute os testes de usuáro.

#### Executar testes de usuário automatizados
```
npm run e2e
```

![preview](credit-cart-checkout.png)

#### Iniciar servidor de desenvolvimento
```
npm run start
```

#### Gerar build para produção
```
npm run build
```

#### Executar Back-End fake
```
npm run upfake
```

## Estrutura do projeto
Esta aplicação trata-se de um agregado de componentes:
- Um lista de etapas (StepList)
- Simulador visual do cartão (CreditCardFigure)
- Formulário de pagamento (PayForm)

