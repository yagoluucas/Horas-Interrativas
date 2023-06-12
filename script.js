let hora = new Date()
        let minuto_atual = hora.getMinutes()
        let hora_atual = hora.getHours()
        let hora_comparacao = parseFloat(hora.getHours())
        let containerInformacao = document.getElementById('container_informacao')
        let containerHorario = document.getElementById('container_horario')
        let horario = document.getElementById('horario')
        let comprimento = document.getElementById('comprimento')
        let img = document.getElementById('img_comprimento')
        let paragrafo = document.getElementById('p_comprimento')
        let corpo = document.getElementsByTagName('body')[0]
        let erro = document.getElementById('container_erro')
        let pMensagem = document.getElementById('p_mensagem')
        let hErro = document.getElementsByTagName('h1')[2]

        function exibir() {    
        let horario_atual = parseFloat(horario.value.trim())
        containerInformacao.style.display = 'none'
        containerHorario.style.display = 'block'
        paragrafo.innerHTML = `Seu horario atual é : <strong>${hora_atual}</strong> horas e <strong>${minuto_atual}</strong> minutos!`

        if (horario_atual > 23 || horario_atual === '') {
            containerHorario.style.display = 'none'
            paragrafo.innerHTML = '<strong>Recarregue a pagina para tentar novamente</strong>'
            erro.style.display = 'block'
        }
        
        else if (horario_atual != hora_comparacao) {
             containerHorario.style.display = 'none'
             paragrafo.innerHTML = '<strong>Recarregue a pagina para tentar novamente</strong>'
             erro.style.display = 'block'
             hErro.innerHTML = 'É necessario colocar o horario atual da sua região para continuar'
         }

        else {

        switch (horario_atual) {
            case 0 :
                comprimento.innerHTML = 'uma otima <strong>Madrugada</strong>'
                pMensagem.innerHTML = 'Aproveite a tranquilidade da noite para cuidar de si. Descanse e renove-se.'
                corpo.style.background = '#000 url(imagens/ceu-estrelado.webp)'
                break
            case 1:
                comprimento.innerHTML = 'uma otima <strong>Madrugada</strong>'
                pMensagem.innerHTML = 'Sua coragem é a luz que ilumina seu caminho. Confie nela.'
                corpo.style.background = '#000 url(imagens/ceu-estrelado.webp)'
                break
            
            case 2:
                comprimento.innerHTML = 'uma otima <strong>Madrugada</strong>'
                pMensagem.innerHTML = 'Sua coragem é a luz que ilumina seu caminho. Confie nela.'
                corpo.style.background = '#000 url(imagens/ceu-estrelado.webp)'
                break

            case 3:
                comprimento.innerHTML = 'uma otima <strong>Madrugada</strong>'
                pMensagem.innerHTML = 'A escuridão não é obstáculo para sua luz interior. Brilhe!'
                corpo.style.background = '#000 url(imagens/ceu-estrelado.webp)'
                break

            case 4:
                comprimento.innerHTML = 'uma otima <strong>Madrugada</strong>'
                pMensagem.innerHTML = 'Permita-se um momento de pausa e ouça a voz da sua intuição.'
                corpo.style.background = '#000 url(imagens/ceu-estrelado.webp)'
                break

            case 5:  
                comprimento.innerHTML = 'uma otima <strong>Madrugada</strong>'
                pMensagem.innerHTML = 'O amanhecer está chegando. Mantenha a esperança e a determinação!'
                corpo.style.background = '#000 url(imagens/ceu-estrelado.webp)'
                break

            case 6:
                comprimento.innerHTML = 'um otimo <strong>Dia</strong>'
                pMensagem.innerHTML = 'Novo dia, novas oportunidades. Aproveite ao máximo!'
                corpo.style.background = '#87CEEB url(imagens/sol.png) no-repeat top right'
                break
            
            case 7:
                comprimento.innerHTML = 'uma otima <strong>Dia</strong>'
                pMensagem.innerHTML = 'Você está pronto para brilhar hoje. Vá em frente!'
                corpo.style.background = '#87CEEB url(imagens/sol.png) no-repeat top right'
                break

            case 8:
                comprimento.innerHTML = 'uma otima <strong>Dia</strong>'
                pMensagem.innerHTML = 'Positividade e entusiasmo conduzem ao sucesso.'
                corpo.style.background = '#87CEEB url(imagens/sol.png) no-repeat top center'
                break

            case 9:
                comprimento.innerHTML = 'uma otima <strong>Dia</strong>'
                pMensagem.innerHTML = 'Pequenas conquistas, grandes passos para o sucesso.'
                corpo.style.background = '#87CEEB url(imagens/sol.png) no-repeat top center'
                break

            case 10:
                comprimento.innerHTML = 'uma otima <strong>Dia</strong>'
                pMensagem.innerHTML = 'Foco nos objetivos, ignore as distrações.'
                corpo.style.background = '#87CEEB url(imagens/sol.png) no-repeat top left'
                break

            case 11:
                comprimento.innerHTML = 'uma otima <strong>Dia</strong>'
                pMensagem.innerHTML = 'Recarregue e inspire-se para o que está por vir.'
                corpo.style.background = '#87CEEB url(imagens/sol.png) no-repeat top left'
                break
            
            case 12:
                comprimento.innerHTML = 'uma otima <strong>Tarde</strong>'
                pMensagem.innerHTML = 'Alimente corpo e mente. Esteja pronto para a tarde!'
                corpo.style.background = '#FF8C00 url(imagens/sol-e-nuvem.png) no-repeat top right'
                break

            case 13:
                comprimento.innerHTML = 'uma otima <strong>Tarde</strong>'
                pMensagem.innerHTML = 'Você tem o poder de fazer a diferença.'
                corpo.style.background = '#FF8C00 url(imagens/sol-e-nuvem.png) no-repeat top right'
                break

            case 14:
                comprimento.innerHTML = 'uma otima <strong>Tarde</strong>'
                pMensagem.innerHTML = 'Persista. Seu esforço valerá a pena!'
                corpo.style.background = '#FF8C00 url(imagens/sol-e-nuvem.png) no-repeat top center'
                break

            case 15:
                comprimento.innerHTML = 'uma otima <strong>Tarde</strong>'
                pMensagem.innerHTML = 'Progresso lento ainda é progresso. Continue avançando!'
                corpo.style.background = '#FF8C00 url(imagens/sol-e-nuvem.png) no-repeat top center'
                break
                
            case 16:
                comprimento.innerHTML = 'uma otima <strong>Tarde</strong>'
                pMensagem.innerHTML = 'Encontre inspiração nas pequenas vitórias. Siga em frente!'
                corpo.style.background = '#FF8C00 url(imagens/sol-e-nuvem.png) no-repeat top left'
                break
            
            case 17:
                comprimento.innerHTML = 'uma otima <strong>Tarde</strong>'
                pMensagem.innerHTML = 'Firmeza e determinação até o fim. Você consegue!'
                corpo.style.background = '#FF8C00 url(imagens/sol-e-nuvem.png) no-repeat top left'
                break

            case 18:
                comprimento.innerHTML = 'uma otima <strong>Noite</strong>'
                pMensagem.innerHTML = 'Celebre suas conquistas do dia. Você fez o melhor!'
                corpo.style.background = '#000080 url(imagens/ceu-estrelado.webp)'
                break

            case 19:
                comprimento.innerHTML = 'uma otima <strong>Noite</strong>'
                pMensagem.innerHTML = 'A noite é jovem. Inspire-se e faça acontecer!'
                corpo.style.background = '#000080 url(imagens/ceu-estrelado.webp)'
                break

            case 20:
                comprimento.innerHTML = 'uma otima <strong>Noite</strong>'
                pMensagem.innerHTML = 'Aproveite a serenidade da noite para encontrar paz interior.'
                corpo.style.background = '#000080 url(imagens/ceu-estrelado.webp)'
                break

            case 21:
                comprimento.innerHTML = 'uma otima <strong>Noite</strong>'
                pMensagem.innerHTML = 'Deixe seus pensamentos se acalmarem e encontre tranquilidade na noite.'
                corpo.style.background = '#000 url(imagens/ceu-estrelado.webp)'
                break
            
            case 22:
                comprimento.innerHTML = 'uma otima <strong>Noite</strong>'
                pMensagem.innerHTML = 'Acredite nas suas habilidades e confie no seu caminho.'
                corpo.style.background = '#000 url(imagens/ceu-estrelado.webp)'
                break

            case 23:
                comprimento.innerHTML = 'uma otima <strong>Noite</strong>'
                pMensagem.innerHTML = 'Seus sonhos têm um potencial incrível. Mantenha-se inspirado!'
                corpo.style.background = '#000 url(imagens/ceu-estrelado.webp)'
                break    
        }
    }    

    }