var app = new Vue({
    el: "#app",
    data: {
        title: "Contas a pagar",
        menus: [
            {id:"0", name:"Listar Contas"},
            {id:"1", name:"Adicionar Conta"}
        ],
        bills: [
            {date_due: "10/08/2019", name: "Conta de Luz", value:"145.00", done:"1"},
            {date_due: "10/08/2019", name: "Condominio", value:"230.00", done:"0"},
            {date_due: "10/08/2019", name: "Cartão de Crédito", value:"400.00", done:"0"},
            {date_due: "10/08/2019", name: "Internet", value:"105.00", done:"0"},
            {date_due: "10/08/2019", name: "Gasolina", value:"600.00", done:"0"}
        ],
    },
});