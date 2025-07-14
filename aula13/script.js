
        const nome = prompt('Digite Seu Nome Completo:');
        let quantidade = (nome.length);
        let letras = nome.split(''); 
        const primeiraLetra = nome[0];
        const ultimaLetra = nome[nome.length -1];
        const primeiroIndice = nome.indexOf(primeiraLetra);  
        const ultimoIndice = nome.lastIndexOf(ultimaLetra);
        const ultima3 = nome.slice(-3);
        const nomeMaisculo = nome.toUpperCase();
        const nomeMinusculo = nome.toLocaleLowerCase();
        const palavras = nome.split('');
        

        console.log(nome);
        console.log(nome.length);
        console.log(letras);
        console.log(primeiroIndice);
        console.log(ultimoIndice);
        console.log(ultima3);
        console.log(nomeMaisculo);
        console.log(nomeMinusculo);
        
        document.body.innerHTML += `Seu nome é: ${nome}<br />`;
        document.body.innerHTML += `Seu nome tem ${quantidade} letras <br />`;
        document.body.innerHTML += `A segunda letra do seu nome é: ${letras[1]} <br />`; //${nome.charArt(1), nome[1]}
        document.body.innerHTML += `O primeiro índice da letra ${primeiraLetra} do seu nome é ${primeiroIndice} <br />`; //${nome.indexOf('a')}
        document.body.innerHTML += `O último índice da letra ${ultimaLetra} do seu nome é ${ultimoIndice}<br /br />`;//${nome.lastIndexOf('a')}
        document.body.innerHTML += `As últimas 3 letras do seu nome são: ${ultima3} <br />`;
        document.body.innerHTML += `As palavras do seu nome são: ${palavras.join(',')}<br />`;
        document.body.innerHTML += `Seu nome com letras maiúsculas: ${nomeMaisculo} <br />`;
        document.body.innerHTML += `Seu nome com letras minúsculas: ${nomeMinusculo} <br />`;