
var age  = prompt("Введите ваш возраст: ");
age = parseInt(age);
if(age <=13){
    console.log("Вам запрещенно играть в эту игру, так что на ваш страх и риск");
}
else{
    console.log("Вы вполне можете играть в эту игру");
}
console.log("Приветсвую вас в игре под названием сказка");
console.log("Ваша задача дойти целым и невридимым, вы должны пройти испытания, иначе GAME OVER");
var way = prompt("Приступим, \"Направо\" пойдешь много всего найдешь, \"Налево\" пойдешь хрен знает что найдешь, выбере ваш путь ...");
if(way == "Направо"){
    console.log("Вы попадаете в лес, там есть тропа и есть обходная тропа, как поступишь")
}
else if(way == "Налево"){
    console.log("Вы попадаете в рощу, там есть тропа и есть обходная тропа, как поступишь")
}
else {
    console.log("Вы никуда не попадаете - GAME OVER");
}