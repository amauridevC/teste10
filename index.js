
let resultado = ranked(34, 11)

function ranked(quantidadeDeVitoria, quantidadeDeDerrota){
    let calculo = quantidadeDeVitoria - quantidadeDeDerrota
    return calculo
}

let classificacao;

switch (true) {
    case resultado < 10:
      classificacao = "Ferro";
      break;
    case resultado >= 11 && resultado <= 20:
      classificacao = "Bronze";
      break;
    case resultado >= 21 && resultado <= 50:
      classificacao = "Prata";
      break;
    case vitorias >= 51 && vitorias <= 80:
      classificacao = "Ouro";
      break;
    case resultado >= 81 && resultado <= 90:
      classificacao = "Diamante";
      break;
    case resultado >= 91 && resultado <= 100:
      classificacao = "Lendário";
      break;
    default:
      classificacao = "Imortal";
      break;
  }

  console.log("O Herói tem de saldo de " + resultado, "está no nível de " + classificacao)















