const saldo = 1250.75;

const historico = [
    {tipo: "Entrada", valor: 500},
    {tipo: "Saída", valor: 200},
    {tipo: "Entrada", valor: 950}
];

document.getElementById("saldo").innerText = saldo.toFixed(2);

const lista = document.getElementById("historico");

historico.forEach(item => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = `${item.tipo}: R$ ${item.valor.toFixed(2)}`;
    lista.appendChild(li);
});