$(document).ready(function () {
    var currentFloor = 2; // переменная , где  хранится текущий этаж
    var floorPath = $(".home-image path"); // Каждый отдельный этаж в SVG
    var counterUp = $(".counter-up"); //Кнопка увеличения этажа
    var counterDown = $(".counter-down");//Кнопка уменьшения этажа
    var modal = $(".modal");
    var modalCloseButton = $('.modal-close-button')
    var viewFlatsButton = $(".view-flats")
    
    
    // Функция при наведении мышью на этаж
    floorPath.on("mouseover", function(){
        floorPath.removeClass("current-floor"); //Удаляем активный класс
        currentFloor = $(this).attr("data-floor"); //Получаем значение текущего этажа
        $(".floor-counter").text(currentFloor);//Этажа в счетчик справа
    });

    floorPath.on("click", toggleModal); // При клике на этаж вывать окно
    modalCloseButton.on("click", toggleModal);// При клике на кнопку закрыть окно
    viewFlatsButton.on("click", toggleModal )
    

    counterUp.on("click", function () { // Отслеживаем клик по кнопке вверх
        if(currentFloor < 18) { //Проверяем значение этажа
            currentFloor++; // Прибавляем один этаж
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits:2,
            useGrouping: false }); // Форматируем переменную ,что было 03
            $(".floor-counter").text(usCurrentFloor);//Этажа в счетчик справа
            floorPath.removeClass("current-floor");//Удаляем активный класс 
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // Подсвечиваем текущий этаж
        }
        
    });

    counterDown.on("click", function(){ // Отслеживаем клик по кнопке вниз
        if(currentFloor > 2){ //Проверяем значение этажа
            currentFloor--;// Отнимаем один этаж
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits:2,
            useGrouping: false }); // Форматируем переменную ,что было 03
            $(".floor-counter").text(usCurrentFloor); //Этажа в счетчик справа
            floorPath.removeClass("current-floor");//Удаляем активный класс 
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // Подсвечиваем текущий этаж
        }
    });
    function toggleModal(){ // Функция закрыть-открыть окно
        modal.toggleClass ("is-open")
    }
});