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
    '/css/imagens/portaChave.jpeg'
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
            } else if (relativeX >= 0.2 && relativeX <= 0.6 && relativeY >= 0.2 && relativeY <= 0.5) {
                trocaImagem(vetRooms[8]);
                cenaAtual = "mesaDiario";
            } else if (relativeX >= 0.55 && relativeX <= 0.42 && relativeY >= 0.1 && relativeY <= 0.3) {
                trocaImagem(vetRooms[9]);
                cenaAtual = "mesaScout";
            } else if (relativeX >= 0.8 && relativeX <= 1 && relativeY >= 0.1 && relativeY <= 0.3) {
                trocaImagem(vetRooms[10]);
                cenaAtual = "mesaFotos";
            }
            break;
        case "resolucao":
            alert("Bom, de acordo com esse diagrama de punnett eu consegui as probabilidades 25%, 50% e 25%. Porém como o alelo B é dominante então as probabilidades se tornam 42% e 25%.\nMinha senha então é 4225!");
            trocaImagem(vetRooms[0]);
            cenaAtual = "cenarioPrincipal";
            break;
        case "quadro":
            if (relativeX >= 0.42 && relativeX <= 1 && relativeY >= 0.8 && relativeY <= 1) {
                trocaImagem(vetRooms[0]);
                cenaAtual = "cenarioPrincipal";
                if (pistaSenha.includes("diario" && "scout" && "fotos" && "quadro")) {
                    trocaImagem(vetRooms[11]);
                    cenaAtual = "resolucao";
                    alert("Já sei tudo o que preciso para descobrir a senha!");
                    senha = true;
                }
            } else if (relativeX >= 0.2 && relativeX <= 0.8 && relativeY >= 0.2 && relativeY <= 0.5) {
                if (!pistaSenha.includes("quadro")) {
                    alert("Isso vai ser útil!");
                    pistaSenha.push("quadro");
                }
                trocaImagem(vetRooms[4]);
                cenaAtual = "quadro2";
            } else if (relativeX >= 0.42 && relativeX <= 1 && relativeY >= 0.2 && relativeY <= 0.5) {
                if (!pistaSenha.includes("quadro")) {
                    alert("Isso vai ser útil!");
                    pistaSenha.push("quadro");
                }
                trocaImagem(vetRooms[6]);
                cenaAtual = "quadro3";
            }
            break;
        case "armario":
            if (relativeX >= 0.42 && relativeX <= 1 && relativeY >= 0.8 && relativeY <= 1) {
                trocaImagem(vetRooms[0]);
                cenaAtual = "cenarioPrincipal";
            } else if (relativeX >= 0.5 && relativeX <= 0.8 && relativeY >= 0.2 && relativeY <= 0.4) {
                trocaImagem(vetRooms[5]);
                cenaAtual = "armario2";
            } else if (relativeX >= 0.9 && relativeX <= 1 && relativeY >= 0.1 && relativeY <= 0.5) {
                trocaImagem(vetRooms[7]);
                cenaAtual = "porta";
            }
            break;
        case "armario2":
            if (relativeX >= 0.42 && relativeX <= 1 && relativeY >= 0.8 && relativeY <= 1) {
                trocaImagem(vetRooms[3]);
                cenaAtual = "armario";
            } else if (relativeX >= 0.4 && relativeX <= 0.8 && relativeY >= 0.1 && relativeY <= 0.4 && senha === true) {
                trocaImagem(vetRooms[12]);
                cenaAtual = "armarioAberto";
            } else if (relativeX >= 0.4 && relativeX <= 0.8 && relativeY >= 0.1 && relativeY <= 0.4) {
                alert("Preciso descobrir a senha...");
            }
            break;
        case "porta":
            if (relativeX >= 0.42 && relativeX <= 1 && relativeY >= 0.8 && relativeY <= 1) {
                trocaImagem(vetRooms[3]);
                cenaAtual = "armario";
            }
            break;
        case "mesaDiario":
            if (relativeX >= 0.42 && relativeX <= 1 && relativeY >= 0.8 && relativeY <= 1) {
                trocaImagem(vetRooms[1]);
                cenaAtual = "mesa";
            } else if (relativeX >= 0.3 && relativeX <= 1 && relativeY >= 0.1 && relativeY <= 0.5) {
                if (!pistaSenha.includes("diario")) {
                    alert("Precisarei fazer um cruzamento genético dos pais desse filhote, as probabilidades são a senha para o cofre!");
                    pistaSenha.push("diario");
                } else {
                    alert("Já descobri o que precisava saber por aqui");
                }
            }
            break;
        case "mesaScout":
            if (relativeX >= 0.42 && relativeX <= 1 && relativeY >= 0.8 && relativeY <= 1) {
                trocaImagem(vetRooms[1]);
                cenaAtual = "mesa";
            } else if (relativeX >= 0.4 && relativeX <= 0.8 && relativeY >= 0.1 && relativeY <= 0.5) {
                if (!pistaSenha.includes("scout")) {
                    alert("Hm... Esse deve ser o filhote favorito dela");
                    pistaSenha.push("scout");
                } else {
                    alert("Já descobri o que precisava saber por aqui");
                }
            }
            break;
        case "mesaFotos":
            if (relativeX >= 0.42 && relativeX <= 1 && relativeY >= 0.8 && relativeY <= 1) {
                trocaImagem(vetRooms[1]);
                cenaAtual = "mesa";
            } else if (relativeX >= 0.3 && relativeX <= 1 && relativeY >= 0.2 && relativeY <= 0.5) {
                if (!pistaSenha.includes("fotos")) {
                    alert("Parece que os pais dela possuíam ambos o mesmo genótipo \nA relação vai ficar Bb x Bb...");
                    pistaSenha.push("fotos");
                } else {
                    alert("Já descobri o que precisava saber por aqui");
                }
            }
            break;
        case "armarioAberto":
            if (relativeX >= 0.42 && relativeX <= 1 && relativeY >= 0.8 && relativeY <= 1) {
                trocaImagem(vetRooms[5]);
                cenaAtual = "armario2";
            } else if (relativeX >= 0.8 && relativeX <= 1 && relativeY >= 0.3 && relativeY <= 0.5) {
                trocaImagem(vetRooms[13]);
                cenaAtual = "portaChave";
            }
            break;
        default:
            break;
    }
}
        // Continue ajustando para as outras cenas da mesma forma

// function getXYOnMouseClick(e) {
//     switch (cenaAtual) {
//         case "cenarioPrincipal":
//             if (e.clientX >= 370 && e.clientX <= 620 &&
//                 e.clientY >= 400 && e.clientY <= 530) {
//                 trocaImagem(vetRooms[1]);
//                 cenaAtual = "mesa";
//             } else if (e.clientX >= 200 && e.clientX <= 400 &&
//                 e.clientY >= 100 && e.clientY <= 320) {
//                 trocaImagem(vetRooms[2]);
//                 cenaAtual = "quadro";
//             } else if (e.clientX >= 410 && e.clientX <= 500 &&
//                 e.clientY >= 210 && e.clientY <= 370) {
//                 trocaImagem(vetRooms[3]);
//                 cenaAtual = "armario";
//             }
//             break;
//         case "mesa":
//             if (e.clientX >= 576 && e.clientX <= 720 &&
//                 e.clientY >= 512 && e.clientY <= 564) {
//                 trocaImagem(vetRooms[0]);
//                 cenaAtual = "cenarioPrincipal";
//                 if (pistaSenha.includes("diario" && "scout" && "fotos" && "quadro")) {
//                     trocaImagem(vetRooms[11])
//                     cenaAtual = "resolucao"
//                     alert("Já sei tudo o que preciso para descobrir a senha!");
//                     senha = true;
//                 }
//             } else if (e.clientX >= 264 && e.clientX <= 464 &&
//                 e.clientY >= 130 && e.clientY <= 350) {
//                 trocaImagem(vetRooms[8]);
//                 cenaAtual = "mesaDiario";
//             } else if (e.clientX >= 555 && e.clientX <= 764 &&
//                 e.clientY >= 105 && e.clientY <= 290) {
//                 trocaImagem(vetRooms[9]);
//                 cenaAtual = "mesaScout";
//             } else if (e.clientX >= 780 && e.clientX <= 1060 &&
//                 e.clientY >= 100 && e.clientY <= 285) {
//                 trocaImagem(vetRooms[10]);
//                 cenaAtual = "mesaFotos";
//             }
//             break;
//         case "resolucao":
//             alert("Bom, de acordo com esse diagrama de punnet eu consegui as probabilidades 25%, 50% e 25%. Porém como o alelo B é dominante então as probabilidades se tornam 42% e 25%.\nMinha senha então é 4225!");
//             trocaImagem(vetRooms[0]);
//             cenaAtual = "cenarioPrincipal";
//             break;
//         case "quadro":
//             if (e.clientX >= 576 && e.clientX <= 720 &&
//                 e.clientY >= 512 && e.clientY <= 564) {
//                 trocaImagem(vetRooms[0]);
//                 cenaAtual = "cenarioPrincipal";
//                 if (pistaSenha.includes("diario" && "scout" && "fotos" && "quadro")) {
//                     trocaImagem(vetRooms[11])
//                     cenaAtual = "resolucao"
//                     alert("Já sei tudo o que preciso para descobrir a senha!");
//                     senha = true;
//                 }
//             } else if (e.clientX >= 269 && e.clientX <= 780 &&
//                 e.clientY >= 180 && e.clientY <= 496) {
//                 if (pistaSenha.includes("quadro")) {
//                 } else {
//                     alert("Isso vai ser útil!");
//                     pistaSenha.push("quadro");
//                 }
//                 trocaImagem(vetRooms[4]);
//                 cenaAtual = "quadro2";
//             } else if (e.clientX >= 783 && e.clientX <= 1027 &&
//                 e.clientY >= 188 && e.clientY <= 492) {
//                 if (pistaSenha.includes("quadro")) {
//                 } else {
//                     alert("Isso vai ser útil!");
//                     pistaSenha.push("quadro");
//                 }
//                 trocaImagem(vetRooms[6]);
//                 cenaAtual = "quadro3";
//             }
//             break;
//         case "armario":
//             if (e.clientX >= 576 && e.clientX <= 720 &&
//                 e.clientY >= 512 && e.clientY <= 564) {
//                 trocaImagem(vetRooms[0]);
//                 cenaAtual = "cenarioPrincipal";
//             } else if (e.clientX >= 494 && e.clientX <= 706 &&
//                 e.clientY >= 172 && e.clientY <= 298) {
//                 trocaImagem(vetRooms[5]);
//                 cenaAtual = "armario2";
//             } else if (e.clientX >= 978 && e.clientX <= 1101 &&
//                 e.clientY >= 69 && e.clientY <= 530) {
//                 trocaImagem(vetRooms[7]);
//                 cenaAtual = "porta";
//             }
//             break;
//         case "quadro2":
//             if (e.clientX >= 537 && e.clientX <= 429 &&
//                 e.clientY >= 487 && e.clientY <= 566) {
//                 trocaImagem(vetRooms[2]);
//                 cenaAtual = "quadro";
//             }
//         case "quadro3":
//             if (e.clientX >= 537 && e.clientX <= 429 &&
//                 e.clientY >= 487 && e.clientY <= 566) {
//                 trocaImagem(vetRooms[2]);
//                 cenaAtual = "quadro";
//             }
//             break;
//         case "armario2":
//             if (e.clientX >= 537 && e.clientX <= 429 &&
//                 e.clientY >= 487 && e.clientY <= 566) {
//                 trocaImagem(vetRooms[3]);
//                 cenaAtual = "armario";
//             } else if (e.clientX >= 401 && e.clientX <= 807 &&
//                 e.clientY >= 124 && e.clientY <= 352 && senha == true) {
//                 trocaImagem(vetRooms[12]);
//                 cenaAtual = "armarioAberto";
//             } else if (e.clientX >= 401 && e.clientX <= 807 &&
//                 e.clientY >= 124 && e.clientY <= 352) {
//                 alert("Preciso descobrir a senha...");
//             }
//             break;
//         case "porta":
//             if (e.clientX >= 537 && e.clientX <= 429 &&
//                 e.clientY >= 487 && e.clientY <= 566) {
//                 trocaImagem(vetRooms[3]);
//                 cenaAtual = "armario";
//             }
//             break;
//         case "mesaDiario":
//             if (e.clientX >= 537 && e.clientX <= 429 &&
//                 e.clientY >= 487 && e.clientY <= 566) {
//                 trocaImagem(vetRooms[1]);
//                 cenaAtual = "mesa";
//             } else if (e.clientX >= 370 && e.clientX <= 910 &&
//                 e.clientY >= 84 && e.clientY <= 510) {
//                 if (pistaSenha.includes("diario")) {
//                     alert("Já descobri o que precisava saber por aqui");
//                 } else {
//                     alert("Precisarei fazer um cruzamento genético dos pais desse filhote, as probabilidades são a senha para o cofre!");
//                     pistaSenha.push("diario");
//                 }
//             }
//             break;
//         case "mesaScout":
//             if (e.clientX >= 537 && e.clientX <= 429 &&
//                 e.clientY >= 487 && e.clientY <= 566) {
//                 trocaImagem(vetRooms[1]);
//                 cenaAtual = "mesa";
//             } else if (e.clientX >= 477 && e.clientX <= 824 &&
//                 e.clientY >= 107 && e.clientY <= 479) {
//                 if (pistaSenha.includes("scout")) {
//                     alert("Já descobri o que precisava saber por aqui");
//                 } else {
//                     alert("Hm... Esse deve ser o filhote favorito dela");
//                     pistaSenha.push("scout");
//                 }
//             }
//             break;
//         case "mesaFotos":
//             if (e.clientX >= 537 && e.clientX <= 429 &&
//                 e.clientY >= 487 && e.clientY <= 566) {
//                 trocaImagem(vetRooms[1]);
//                 cenaAtual = "mesa";
//             } else if (e.clientX >= 371 && e.clientX <= 973 &&
//                 e.clientY >= 146 && e.clientY <= 503) {
//                 if (pistaSenha.includes("fotos")) {
//                     alert("Já descobri o que precisava saber por aqui");
//                 } else {
//                     alert("Parece que os pais dela possuiam ambos o mesmo genótipo \nA relação vai ficar Bb x Bb...");
//                     pistaSenha.push("fotos");
//                 }
//             }
//             break;
//         case "armarioAberto":
//             if (e.clientX >= 537 && e.clientX <= 429 &&
//                 e.clientY >= 487 && e.clientY <= 566) {
//                 trocaImagem(vetRooms[5]);
//                 cenaAtual = "armario2";
//             } else if (e.clientX >= 822 && e.clientX <= 859 &&
//                 e.clientY >= 319 && e.clientY <= 392) {
//                 trocaImagem(vetRooms[13]);
//                 cenaAtual = "portaChave";
//             } else if (e.clientX >= 876 && e.clientX <= 909 &&
//                 e.clientY >= 322 && e.clientY <= 387) {
//                 trocaImagem(vetRooms[13]);
//                 cenaAtual = "portaChave";
//             } else if (e.clientX >= 915 && e.clientX <= 948 &&
//                 e.clientY >= 325 && e.clientY <= 390) {
//                 trocaImagem(vetRooms[13]);
//                 cenaAtual = "portaChave";
//             } else if (e.clientX >= 957 && e.clientX <= 987 &&
//                 e.clientY >= 326 && e.clientY <= 393) {
//                 trocaImagem(vetRooms[13]);
//                 cenaAtual = "portaChave";
//             }
//         default:
//             break;
//     }
//     // se precisar; console.log(`Key: ${e.key} ${e.screenX} ${e.screenY}`);
//     console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
// }