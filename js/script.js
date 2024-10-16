const vetRooms = [
    '/css/imagens/cenarioPrincipal.jpeg',
    '/css/imagens/mesa.jpeg',
    '/css/imagens/quadro.jpeg',
    '/css/imagens/armario.jpeg',
    '/css/imagens/quadro2.jpeg',
    '/css/imagens/armario2.jpeg',
    '/css/imagens/quadro3.jpeg',
    '/css/imagens/porta.jpeg',
    '/css/imagens/mesaDiario.jpeg',
    '/css/imagens/mesaScout.jpeg',
    '/css/imagens/mesaFotos.jpeg',
    '/css/imagens/resolucao.jpeg',
    '/css/imagens/armarioAberto.jpeg',
    '/css/imagens/portaChave.jpeg',
    '/css/imagens/portaAberta.jpeg'
];
let cenaAtual = "cenarioPrincipal";
let pistaSenha = [];
let senha = false;

function trocaImagem(newImage) {
    const element = document.getElementById('imagemPrincipal');
    if (element) {
        element.src = newImage;
    }
}

document.addEventListener("click", getXYOnMouseClick);

function getXYOnMouseClick(e) {
    const element = document.getElementById('imagemPrincipal');
    const rect = element.getBoundingClientRect(); // Obtém as dimensões da imagem visível

    // Calcula as coordenadas relativas ao tamanho da imagem
    const relativeX = (e.clientX - rect.left) / rect.width;
    const relativeY = (e.clientY - rect.top) / rect.height;

    console.log(`Relative X: ${relativeX}, Relative Y: ${relativeY}`);

    switch (cenaAtual) {
        case "cenarioPrincipal":
            // Aqui você pode usar porcentagens relativas para determinar a área clicada
            if (relativeX >= 0.15 && relativeX <= 0.41 && relativeY >= 0.62 && relativeY <= 0.80) {
                trocaImagem(vetRooms[1]);
                cenaAtual = "mesa";
            } else if (relativeX >= 0.0016 && relativeX <= 0.22 && relativeY >= 0.068 && relativeY <= 0.47) {
                trocaImagem(vetRooms[2]);
                cenaAtual = "quadro";
            } else if (relativeX >= 0.23 && relativeX <= 0.34 && relativeY >= 0.27 && relativeY <= 0.59) {
                trocaImagem(vetRooms[3]);
                cenaAtual = "armario";
            }
            break;
        case "mesa":
            if (relativeX >= 0.42 && relativeX <= 0.57 && relativeY >= 0.86 && relativeY <= 0.97) {
                trocaImagem(vetRooms[0]);
                cenaAtual = "cenarioPrincipal";
                if (pistaSenha.includes("diario" && "scout" && "fotos" && "quadro")) {
                    trocaImagem(vetRooms[11]);
                    cenaAtual = "resolucao";
                    alert("Já sei tudo o que preciso para descobrir a senha!");
                    senha = true;
                }
            } else if (relativeX >= 0.074 && relativeX <= 0.28 && relativeY >= 0.11 && relativeY <= 0.55) {
                trocaImagem(vetRooms[8]);
                cenaAtual = "mesaDiario";
            } else if (relativeX >= 0.40 && relativeX <= 0.59 && relativeY >= 0.08 && relativeY <= 0.41) {
                trocaImagem(vetRooms[9]);
                cenaAtual = "mesaScout";
            } else if (relativeX >= 0.65 && relativeX <= 94 && relativeY >= 0.071 && relativeY <= 0.40) {
                trocaImagem(vetRooms[10]);
                cenaAtual = "mesaFotos";
            }
            break;
        case "resolucao":
            alert("Bom, de acordo com esse diagrama de punnett eu consegui as probabilidades 25%, 50% e 25%. Porém como o alelo B é dominante então as probabilidades se tornam 42% e 25%.\nMinha senha então é 4225, posso abrir o armário agora!");
            trocaImagem(vetRooms[0]);
            cenaAtual = "cenarioPrincipal";
            break;
        case "quadro":
            if (relativeX >= 0.42 && relativeX <= 0.57 && relativeY >= 0.86 && relativeY <= 0.97) {
                trocaImagem(vetRooms[0]);
                cenaAtual = "cenarioPrincipal";
                if (pistaSenha.includes("diario") && pistaSenha.includes("scout") && pistaSenha.includes("fotos") && pistaSenha.includes("quadro")) {
                    trocaImagem(vetRooms[11]);
                    cenaAtual = "resolucao";
                    alert("Já sei tudo o que preciso para descobrir a senha!");
                    senha = true;
                }
            } else if (relativeX >= 0.081 && relativeX <= 0.64 && relativeY >= 0.22 && relativeY <= 0.83) {
                if (!pistaSenha.includes("quadro")) {
                    alert("Isso vai ser útil!");
                    pistaSenha.push("quadro");
                }
                trocaImagem(vetRooms[4]);
                cenaAtual = "quadro2";
            } else if (relativeX >= 0.64 && relativeX <= 91 && relativeY >= 0.23 && relativeY <= 0.81) {
                if (!pistaSenha.includes("quadro")) {
                    alert("Isso vai ser útil!");
                    pistaSenha.push("quadro");
                }
                trocaImagem(vetRooms[6]);
                cenaAtual = "quadro3";
            }
            break;
        case "armario":
            if (relativeX >= 0.42 && relativeX <= 0.57 && relativeY >= 0.86 && relativeY <= 0.97) {
                trocaImagem(vetRooms[0]);
                cenaAtual = "cenarioPrincipal";
            } else if (relativeX >= 0.32 && relativeX <= 0.56 && relativeY >= 0.20 && relativeY <= 0.84) {
                trocaImagem(vetRooms[5]);
                cenaAtual = "armario2";
            } else if (relativeX >= 0.86 && relativeX <= 99 && relativeY >= 0.005 && relativeY <= 0.91) {
                trocaImagem(vetRooms[7]);
                cenaAtual = "porta";
            }
            break;
        case "quadro2":
            if (relativeX >= 0.42 && relativeX <= 0.57 && relativeY >= 0.86 && relativeY <= 0.97) {
                trocaImagem(vetRooms[2]);
                cenaAtual = "quadro";
            }
            break;
        case "quadro3":
            if (relativeX >= 0.42 && relativeX <= 0.57 && relativeY >= 0.86 && relativeY <= 0.97) {
                trocaImagem(vetRooms[2]);
                cenaAtual = "quadro";
            }
            break;
        case "armario2":
            if (relativeX >= 0.42 && relativeX <= 0.57 && relativeY >= 0.86 && relativeY <= 0.97) {
                trocaImagem(vetRooms[3]);
                cenaAtual = "armario";
            } else if (relativeX >= 0.22 && relativeX <= 0.65 && relativeY >= 0.11 && relativeY <= 0.51 && senha === true) {
                trocaImagem(vetRooms[12]);
                cenaAtual = "armarioAberto";
            } else if (relativeX >= 0.22 && relativeX <= 0.65 && relativeY >= 0.11 && relativeY <= 0.51) {
                alert("Preciso descobrir a senha...");
            }
            break;
        case "porta":
            if (relativeX >= 0.42 && relativeX <= 0.57 && relativeY >= 0.86 && relativeY <= 0.97) {
                trocaImagem(vetRooms[3]);
                cenaAtual = "armario";
            }
            break;
        case "mesaDiario":
            if (relativeX >= 0.42 && relativeX <= 0.57 && relativeY >= 0.86 && relativeY <= 0.97) {
                trocaImagem(vetRooms[1]);
                cenaAtual = "mesa";
            } else if (relativeX >= 0.17 && relativeX <= 0.82 && relativeY >= 0.017 && relativeY <= 0.86) {
                if (!pistaSenha.includes("diario")) {
                    alert("Precisarei fazer um cruzamento genético dos pais desse filhote, as probabilidades são a senha para o cofre!");
                    pistaSenha.push("diario");
                } else {
                    alert("Já descobri o que precisava saber por aqui");
                }
            }
            break;
        case "mesaScout":
            if (relativeX >= 0.42 && relativeX <= 0.57 && relativeY >= 0.86 && relativeY <= 0.97) {
                trocaImagem(vetRooms[1]);
                cenaAtual = "mesa";
            } else if (relativeX >= 0.27 && relativeX <= 0.71 && relativeY >= 0.030 && relativeY <= 0.83) {
                if (!pistaSenha.includes("scout")) {
                    alert("Hm... Esse deve ser o filhote favorito dela");
                    pistaSenha.push("scout");
                } else {
                    alert("Já descobri o que precisava saber por aqui");
                }
            }
            break;
        case "mesaFotos":
            if (relativeX >= 0.42 && relativeX <= 0.57 && relativeY >= 0.86 && relativeY <= 0.97) {
                trocaImagem(vetRooms[1]);
                cenaAtual = "mesa";
            } else if (relativeX >= 0.175 && relativeX <= 0.86 && relativeY >= 0.10 && relativeY <= 0.84) {
                if (!pistaSenha.includes("fotos")) {
                    alert("Parece que os pais dela possuíam ambos o mesmo genótipo \nA relação vai ficar Bb x Bb...");
                    pistaSenha.push("fotos");
                } else {
                    alert("Já descobri o que precisava saber por aqui");
                }
            }
            break;
        case "armarioAberto":
            if (relativeX >= 0.42 && relativeX <= 0.57 && relativeY >= 0.86 && relativeY <= 0.97) {
                trocaImagem(vetRooms[5]);
                cenaAtual = "armario2";
            } else if (relativeX >= 0.70 && relativeX <= 73 && relativeY >= 0.21 && relativeY <= 0.62) {
                trocaImagem(vetRooms[13]);
                cenaAtual = "portaChave";
            } else if (relativeX >= 0.75 && relativeX <= 78 && relativeY >= 0.23 && relativeY <= 0.62) {
                trocaImagem(vetRooms[13]);
                cenaAtual = "portaChave";
            } else if (relativeX >= 0.802 && relativeX <= 0.833 && relativeY >= 0.230 && relativeY <= 0.634) {
                trocaImagem(vetRooms[13]);
                cenaAtual = "portaChave";
            } else if (relativeX >= 0.84 && relativeX <= 0.87 && relativeY >= 0.230 && relativeY <= 0.634) {
                trocaImagem(vetRooms[13]);
                cenaAtual = "portaChave";
            }
            break;
        case "portaChave":
            if (relativeX >= 0.39 && relativeX <= 0.55 && relativeY >= 0.19 && relativeY <= 0.85) {
                trocaImagem(vetRooms[14]);
                cenaAtual = "portaAberta";
            }
            break;
        default:
            break;
    }
    console.log(pistaSenha);
    console.log(cenaAtual);
}