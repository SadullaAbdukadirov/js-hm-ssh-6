let obj = {}

for(i = 1; i <= 10; i++) {
    let name = prompt('Введите ваше имя');
    let age = +prompt('Введите ваш возраст');
    obj[i] = {
        name: name,
        age: age
    }
    console.log(`Пользователь: ${i}`);
    console.log(`Ваше имя: ${obj[i]['name']}`);
    console.log(`Ваш возраст: ${obj[i]['age']}`);
}
console.log(obj);