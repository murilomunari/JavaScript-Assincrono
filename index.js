// JavaScript Assincrono

function buscaDados(callback) {
  setTimeout(() => {
    callback("Dados encontrados");
  }, 2000);
}

buscaDados((dados) => {
  console.log(dados);
});

function buscarUsuario(callback) {
  setTimeout(() => {
    callback({ id: 1, nome: "Murilo" });
  }, 1000);
}

function buscarPedidos(usuario, callback) {
  setTimeout(() => {
    callback(["Pedido 1", "Pedido 2"]);
  }, 1000);
}

buscarUsuario((usuario) => {
  buscarPedidos(usuario, (pedidos) => {
    console.log(pedidos);
  });
});

/*
Práticas para escrever Callbacks eficientes
Para evitar o Callback Hell:

Nomeie as Funções: Em vez de anônimas, use funções nomeadas. Isso ajuda na leitura e na manutenção do código.
Modularize: Separe as funções em módulos ou arquivos. Fica mais organizado e legível.
Use Promises (spoiler do próximo tópico 😉): Promises são uma forma mais elegante de lidar com assincronismo, evitando o Callback Hell.
Callbacks são a base do assincronismo no JavaScript, você provavelmente já viu callbacks, e se não viu com toda certeza verá, principalmente em bibliotecas como express. Mas tem que saber usar pra não virar bagunça!
*/
