$(document).ready(function(){

    const addEventBtn = $('.add__events__btn');
    $(addEventBtn).click(function(){
        
        const newItem = $('<div class="form__item"></div>');
        let lines = '<label class="form__item__label" for="event-name">Nome do evento: </label>';
        lines += '<input class="form__item__control" type="text" id="event-name">';
        lines += '<label class="form__item__label" for="event-chance">Chance dele acontecer: </label>';
        lines += '<input class="form__item__control" type="number" id="event-chance" min="1" step="10" max="100" value="1">';
        
        line = $(lines);
        line.appendTo(newItem);
        
        $(newItem).appendTo('.form__content');
    })
})