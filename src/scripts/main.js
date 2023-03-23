$(document).ready(function(){

    const addEventBtn = $('.add__events__btn');
    const form = $('form');

    $(addEventBtn).click(function(){
        
        const newItem = $('<div class="form__item"></div>');
        let lines = '<label class="form__item__label" for="event-name">Nome do evento: </label>';
        lines += '<input class="form__item__control" type="text" id="event-name">';
        lines += '<label class="form__item__label" for="event-chance">Chance dele acontecer: </label>';
        lines += '<input class="form__item__control" type="number" id="event-chance" min="1" max="100" value="1">';
        
        line = $(lines);
        line.appendTo(newItem);
        
        $(newItem).appendTo('.form__content');
    })

    $(form).on('submit', function(e){
        e.preventDefault();

        const result = $('.result__value');
        const errorMessage = $('.form__error');
        const eventNames = document.querySelectorAll('#event-name');
        const chances = document.querySelectorAll('#event-chance');
        let chancesSum = 0;

        for(let i = 0; i < chances.length; i++){
            chancesSum += parseInt(chances[i].value);
        }

        if(chancesSum != 100 && errorMessage[0].style.display != 'block'){
            errorMessage[0].style.display = 'block';
        }else if(chancesSum == 100){
            errorMessage[0].style.display = 'none';

            let diceNum = Math.random() * 100;
            diceNum = Math.ceil(diceNum);
            console.log('O dade foi: ' + diceNum);
            
            let internSum = 1;
            for(let i = 0; i < chances.length; i++){
                
                if(i == 0 && diceNum <= chances[i].value){
                    result[0].innerHTML = eventNames[i].value;
                    break;
                } else if(diceNum >= internSum && diceNum <= chances[i].value + internSum){
                    result[0].innerHTML = eventNames[i].value;
                }
                internSum += parseInt(chances[i].value);
                console.log(internSum)
            }
        }
    })
})