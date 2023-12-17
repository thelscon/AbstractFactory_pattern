"use strict";
// Створіть програму для ресторану, який може обслуговувати різні типи кухонь (наприклад, італійську, японську, французьку). 
// Використайте паттерн Abstract Factory для створення меню та страв для кожної типової кухні.
//
// Задачі:
// Створення абстрактних класів та інтерфейсів:
// Створіть абстрактні класи та інтерфейси для страв та меню для ресторану.
//
// Реалізація конкретних продуктів:
// Створіть конкретні класи для кожного типу страв та меню (наприклад, ItalianDish, ItalianMenu).
//
// Створення абстрактної фабрики:
// Створіть інтерфейс абстрактної фабрики, який визначає методи для створення різних страв та меню.
//
// Реалізація конкретних фабрик:
// Створіть конкретні класи фабрик для кожного типу кухні (ItalianFactory, JapaneseFactory).
//
// Клієнтський код:
// Напишіть клієнтський код, який використовує абстрактну фабрику та створює страви та меню для певного типу кухні.
// блюда итальянской кухни
class Ravioli {
    name = 'Равиоли';
    typeCuisines = "Italian cuisine" /* ECuisines.Italian */;
    composition = ["\u041C\u0443\u043A\u0430" /* EIngredients.Flour */, "\u042F\u0439\u0446\u043E" /* EIngredients.Egg */, "\u0420\u0438\u043A\u043E\u0442\u0442\u0430" /* EIngredients.Ricotta */, "\u0428\u043F\u0438\u043D\u0430\u0442" /* EIngredients.Spinach */, "\u041C\u0443\u0441\u043A\u0430\u0442\u043D\u044B\u0439 \u043E\u0440\u0435\u0445" /* EIngredients.Nutmeg */, "\u0421\u043B\u0438\u0432\u043E\u0447\u043D\u043E\u0435 \u043C\u0430\u0441\u043B\u043E" /* EIngredients.Butter */, "\u041E\u043B\u0438\u0432\u043A\u043E\u0432\u043E\u0435 \u043C\u0430\u0441\u043B\u043E" /* EIngredients.OliveOil */];
    price = 25;
}
class Carbonara {
    name = 'Карбонара';
    typeCuisines = "Italian cuisine" /* ECuisines.Italian */;
    composition = ["\u0421\u043F\u0430\u0433\u0435\u0442\u0442\u0438" /* EIngredients.Spaghetti */, "\u041E\u043B\u0438\u0432\u043A\u043E\u0432\u043E\u0435 \u043C\u0430\u0441\u043B\u043E" /* EIngredients.OliveOil */, "\u0427\u0435\u0441\u043D\u043E\u043A" /* EIngredients.Garlic */, "\u0412\u0435\u0442\u0447\u0438\u043D\u0430" /* EIngredients.Ham */, "\u0416\u0435\u043B\u0442\u043E\u043A" /* EIngredients.Yolk */, "\u041F\u0430\u0440\u043C\u0435\u0437\u0430\u043D" /* EIngredients.Parmesan */, "\u0421\u043F\u0435\u0446\u0438\u0438" /* EIngredients.Spices */];
    price = 35;
}
class Bolognese {
    name = 'Болоньезе';
    typeCuisines = "Italian cuisine" /* ECuisines.Italian */;
    composition = ["\u0413\u043E\u0432\u044F\u0436\u0438\u0439 \u0444\u0430\u0440\u0448" /* EIngredients.BeefMince */, "\u041B\u0443\u043A" /* EIngredients.Onion */, "\u0427\u0435\u0441\u043D\u043E\u043A" /* EIngredients.Garlic */, "\u041E\u043B\u0438\u0432\u043A\u043E\u0432\u043E\u0435 \u043C\u0430\u0441\u043B\u043E" /* EIngredients.OliveOil */, "\u0411\u0430\u0437\u0438\u043B\u0438\u043A" /* EIngredients.Basil */, "\u041E\u0440\u0435\u0433\u0430\u043D\u043E" /* EIngredients.Oregano */, "\u041F\u0435\u0442\u0440\u0443\u0448\u043A\u0430" /* EIngredients.Parsley */, "\u0422\u043E\u043C\u0430\u0442\u043D\u0430\u044F \u043F\u0430\u0441\u0442\u0430" /* EIngredients.TomatoPaste */, "\u0421\u044B\u0440" /* EIngredients.Cheese */, "\u0411\u0443\u043B\u044C\u043E\u043D" /* EIngredients.Bouillon */, "\u041A\u0435\u0442\u0447\u0443\u043F" /* EIngredients.Ketchup */, "\u041F\u043E\u043C\u0438\u0434\u043E\u0440" /* EIngredients.Tomato */, "\u0421\u043F\u0435\u0446\u0438\u0438" /* EIngredients.Spices */];
    price = 30;
}
class Lasagna {
    name = 'Лазанья';
    typeCuisines = "Italian cuisine" /* ECuisines.Italian */;
    composition = ["\u041B\u0438\u0441\u0442 \u043B\u0430\u0437\u0430\u043D\u044C\u0438" /* EIngredients.LasagneLeaf */, "\u0421\u043E\u0443\u0441 \u0431\u043E\u043B\u043E\u043D\u044C\u0435\u0437\u0435" /* EIngredients.BologneseSauce */, "\u0424\u0430\u0440\u0448" /* EIngredients.MincedMeat */, "\u0421\u043B\u0438\u0432\u043E\u0447\u043D\u043E\u0435 \u043C\u0430\u0441\u043B\u043E" /* EIngredients.Butter */, "\u041C\u0443\u043A\u0430" /* EIngredients.Flour */, "\u041E\u043B\u0438\u0432\u043A\u043E\u0432\u043E\u0435 \u043C\u0430\u0441\u043B\u043E" /* EIngredients.OliveOil */, "\u041C\u043E\u043B\u043E\u043A\u043E" /* EIngredients.Milk */, "\u0421\u044B\u0440" /* EIngredients.Cheese */];
    price = 20;
}
class Porchetta {
    name = 'Поркетта';
    typeCuisines = "Italian cuisine" /* ECuisines.Italian */;
    composition = ["\u0421\u0430\u043B\u043E \u0441 \u043C\u044F\u0441\u043D\u043E\u0439 \u043F\u0440\u043E\u0441\u043B\u043E\u0439\u043A\u043E\u0439" /* EIngredients.LardWithMeatLayer */, "\u041E\u043B\u0438\u0432\u043A\u0430" /* EIngredients.Olive */, "\u0413\u0440\u0435\u0446\u043A\u0438\u0439 \u043E\u0440\u0435\u0445" /* EIngredients.Walnut */, "\u041C\u0430\u0440\u0438\u043D\u043E\u0432\u0430\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0446" /* EIngredients.PickledPeppers */, "\u0427\u0435\u0441\u043D\u043E\u043A" /* EIngredients.Garlic */, "\u041E\u0440\u0435\u0433\u0430\u043D\u043E" /* EIngredients.Oregano */, "\u0417\u0435\u0440\u043D\u0438\u0441\u0442\u0430\u044F \u0433\u043E\u0440\u0447\u0438\u0446\u0430" /* EIngredients.GrainyMustard */];
    price = 30;
}
// блюда японской кухни
class SeafoodRisotto {
    name = 'Рис с морепродуктами';
    typeCuisines = "Japanese cuisine" /* ECuisines.Japanese */;
    composition = ["\u0420\u0438\u041C\u043E\u0440\u043A\u043E\u0432\u044C\u0441" /* EIngredients.Rice */, "\u041C\u043E\u0440\u0441\u043A\u043E\u0439 \u043A\u043E\u043A\u0442\u0435\u0439\u043B\u044C" /* EIngredients.SeafoodCocktail */, "\u041B\u0443\u043A" /* EIngredients.Onion */, "\u0411\u043E\u043B\u0433\u0430\u0440\u0441\u043A\u0438\u0439 \u043F\u0435\u0440\u0435\u0446" /* EIngredients.BulgarianPepper */, "\u041C\u043E\u0440\u043A\u043E\u0432\u044C" /* EIngredients.Carrot */, "\u0427\u0435\u0441\u043D\u043E\u043A" /* EIngredients.Garlic */, "\u041F\u043E\u043C\u0438\u0434\u043E\u0440" /* EIngredients.Tomato */, "\u0421\u043F\u0435\u0446\u0438\u0438" /* EIngredients.Spices */];
    price = 55;
}
class SalmonMaki {
    name = 'Маки с лососем';
    typeCuisines = "Japanese cuisine" /* ECuisines.Japanese */;
    composition = ["\u041B\u0438\u0441\u0442 \u043D\u043E\u0440\u0438" /* EIngredients.Nori */, "\u041B\u043E\u0441\u043E\u0441\u044C" /* EIngredients.Salmon */, "\u0412\u0430\u0441\u0430\u0431\u0438" /* EIngredients.Wasabi */, "\u0420\u0438\u041C\u043E\u0440\u043A\u043E\u0432\u044C\u0441" /* EIngredients.Rice */, "\u0412\u043E\u0434\u0430" /* EIngredients.Water */, "\u0420\u0438\u0441\u043E\u0432\u044B\u0439 \u0443\u043A\u0441\u0443\u0441" /* EIngredients.RiceVinegar */, "\u0421\u043E\u043B\u044C" /* EIngredients.Salt */, "\u0421\u0430\u0445\u0430\u0440" /* EIngredients.Sugar */];
    price = 60;
}
class Dango {
    name = 'Данго';
    typeCuisines = "Japanese cuisine" /* ECuisines.Japanese */;
    composition = ["\u0420\u0438\u0441\u043E\u0432\u0430\u044F \u043C\u0443\u043A\u0430" /* EIngredients.RiceFlour */, "\u0412\u043E\u0434\u0430" /* EIngredients.Water */];
    price = 25;
}
class ChickenYakisoba {
    name = 'Якисоба с курицей';
    typeCuisines = "Japanese cuisine" /* ECuisines.Japanese */;
    composition = ["\u041A\u0443\u0440\u0438\u043D\u043E\u0435 \u0444\u0438\u043B\u0435" /* EIngredients.ChickenFillet */, "\u041B\u0430\u043F\u0448\u0430" /* EIngredients.Noodles */, "\u041C\u043E\u0440\u043A\u043E\u0432\u044C" /* EIngredients.Carrot */, "\u041B\u0443\u043A" /* EIngredients.Onion */, "\u041F\u0435\u043A\u0438\u043D\u0441\u043A\u0430\u044F \u043A\u0430\u043F\u0443\u0441\u0442\u0430" /* EIngredients.NapaCabbage */, "\u0427\u0435\u0441\u043D\u043E\u043A" /* EIngredients.Garlic */, "\u0421\u043E\u0435\u0432\u044B\u0439 \u0441\u043E\u0443\u0441" /* EIngredients.SoySauce */, "\u041A\u0443\u043D\u0436\u0443\u0442\u043D\u043E\u0435 \u043C\u0430\u0441\u043B\u043E" /* EIngredients.SesameOil */];
    price = 70;
}
class PorkRamen {
    name = 'Рамен со свининой';
    typeCuisines = "Japanese cuisine" /* ECuisines.Japanese */;
    composition = ["\u041B\u0430\u043F\u0448\u0430 \u0440\u0430\u043C\u0435\u043D" /* EIngredients.RamenNoodles */, "\u0421\u0432\u0438\u043D\u0438\u043D\u0430" /* EIngredients.Pork */, "\u0428\u043F\u0438\u043D\u0430\u0442" /* EIngredients.Spinach */, "\u042F\u0439\u0446\u043E" /* EIngredients.Egg */, "\u0421\u0442\u0440\u0443\u0447\u043A\u043E\u0432\u0430\u044F \u0444\u0430\u0441\u043E\u043B\u044C" /* EIngredients.GreenBeans */, "\u041B\u0438\u0441\u0442 \u043D\u043E\u0440\u0438" /* EIngredients.Nori */, "\u0418\u043C\u0431\u0438\u0440\u044C" /* EIngredients.Ginger */, "\u041A\u0443\u043D\u0436\u0443\u0442" /* EIngredients.Sesame */, "\u0417\u0435\u043B\u0451\u043D\u044B\u0439 \u043B\u0443\u043A" /* EIngredients.GreenOnions */, "\u0420\u044B\u0431\u043D\u044B\u0439 \u0441\u043E\u0443\u0441" /* EIngredients.FishSauce */, "\u0411\u0443\u043B\u044C\u043E\u043D" /* EIngredients.Bouillon */, "\u0421\u043E\u0435\u0432\u044B\u0439 \u0441\u043E\u0443\u0441" /* EIngredients.SoySauce */];
    price = 80;
}
// блюда французской кухни
class SaladeNicoise {
    name = 'Нисуаз';
    typeCuisines = "French cuisine" /* ECuisines.French */;
    composition = ["\u041A\u043E\u043D\u0441\u0435\u0440\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0444\u0430\u0441\u043E\u043B\u044C" /* EIngredients.CannedBeans */, "\u041F\u043E\u043C\u0438\u0434\u043E\u0440 \u0427\u0435\u0440\u0440\u0438" /* EIngredients.CherryTomato */, "\u041E\u043B\u0438\u0432\u043A\u043E\u0432\u043E\u0435 \u043C\u0430\u0441\u043B\u043E" /* EIngredients.OliveOil */, "\u0427\u0435\u0441\u043D\u043E\u043A" /* EIngredients.Garlic */, "\u041E\u043B\u0438\u0432\u043A\u0430" /* EIngredients.Olive */, "\u041A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044C" /* EIngredients.Potato */, "\u0421\u0430\u0445\u0430\u0440" /* EIngredients.Sugar */, "\u0417\u0435\u0440\u043D\u0438\u0441\u0442\u0430\u044F \u0433\u043E\u0440\u0447\u0438\u0446\u0430" /* EIngredients.GrainyMustard */, "\u041A\u043E\u043D\u0441\u0435\u0440\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0442\u0443\u043D\u0435\u0446" /* EIngredients.CannedTuna */, "\u041B\u0430\u0442\u0443\u043A" /* EIngredients.Lettuce */, "\u0421\u0442\u0440\u0443\u0447\u043A\u043E\u0432\u0430\u044F \u0444\u0430\u0441\u043E\u043B\u044C" /* EIngredients.GreenBeans */, "\u0412\u0438\u043D\u043D\u044B\u0439 \u0443\u043A\u0441\u0443\u0441" /* EIngredients.WineVinegar */, "\u042F\u0439\u0446\u043E" /* EIngredients.Egg */];
    price = 60;
}
class Tartiflette {
    name = 'Тартифлет';
    typeCuisines = "French cuisine" /* ECuisines.French */;
    composition = ["\u041A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044C" /* EIngredients.Potato */, "\u0411\u0435\u043A\u043E\u043D" /* EIngredients.Bacon */, "\u041A\u0430\u043C\u0430\u043C\u0431\u0435\u0440" /* EIngredients.Camembert */, "\u0421\u043C\u0435\u0442\u0430\u043D\u0430" /* EIngredients.SourCream */, "\u041B\u0443\u043A" /* EIngredients.Onion */, "\u0411\u0435\u043B\u043E\u0435 \u0441\u0443\u0445\u043E\u0435 \u0432\u0438\u043D\u043E" /* EIngredients.DryWhiteWine */, "\u0421\u043B\u0438\u0432\u043E\u0447\u043D\u043E\u0435 \u043C\u0430\u0441\u043B\u043E" /* EIngredients.Butter */, "\u0421\u043E\u043B\u044C" /* EIngredients.Salt */, "\u041F\u0435\u0440\u0435\u0446" /* EIngredients.Pepper */];
    price = 55;
}
class CrepeSuzette {
    name = 'Креп Сюзетт';
    typeCuisines = "French cuisine" /* ECuisines.French */;
    composition = ["\u041C\u0443\u043A\u0430" /* EIngredients.Flour */, "\u041C\u043E\u043B\u043E\u043A\u043E" /* EIngredients.Milk */, "\u042F\u0439\u0446\u043E" /* EIngredients.Egg */, "\u0420\u0430\u0441\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043C\u0430\u0441\u043B\u043E" /* EIngredients.VegetableOil */, "\u0421\u0430\u0445\u0430\u0440\u043D\u0430\u044F \u043F\u0443\u0434\u0440\u0430" /* EIngredients.PowderedSugar */, "\u0421\u043E\u043B\u044C" /* EIngredients.Salt */];
    price = 70;
}
class Cassoulet {
    name = 'Кассуле';
    typeCuisines = "French cuisine" /* ECuisines.French */;
    composition = ["\u0421\u0432\u0438\u043D\u0435\u044B\u0435 \u0440\u0451\u0431\u0440\u0430" /* EIngredients.PorkRibs */, "\u0421\u0430\u043B\u043E" /* EIngredients.Lard */, "\u041A\u0440\u0430\u0441\u043D\u0430\u044F \u0444\u0430\u0441\u043E\u043B\u044C" /* EIngredients.RedBeans */, "\u0411\u0435\u043B\u0430\u044F \u0444\u0430\u0441\u043E\u043B\u044C" /* EIngredients.WhiteBeans */, "\u041B\u0443\u043A" /* EIngredients.Onion */, "\u041F\u0430\u043F\u0440\u0438\u043A\u0430" /* EIngredients.Paprika */, "\u0427\u0438\u043B\u0438" /* EIngredients.Chilli */];
    price = 90;
}
class Pate {
    name = 'Французский паштет';
    typeCuisines = "French cuisine" /* ECuisines.French */;
    composition = ["\u041A\u0443\u0440\u0438\u043D\u0430\u044F \u043F\u0435\u0447\u0435\u043D\u044C" /* EIngredients.ChickenLiver */, "\u0421\u0430\u043B\u043E" /* EIngredients.Lard */, "\u041C\u043E\u0440\u043A\u043E\u0432\u044C" /* EIngredients.Carrot */, "\u041B\u0443\u043A-\u0448\u0430\u043B\u043E\u0442," /* EIngredients.Shallot */, "\u0421\u043B\u0438\u0432\u043E\u0447\u043D\u043E\u0435 \u043C\u0430\u0441\u043B\u043E" /* EIngredients.Butter */, "\u0421\u043C\u0435\u0442\u0430\u043D\u0430" /* EIngredients.SourCream */, "\u041A\u043E\u043D\u044C\u044F\u043A" /* EIngredients.Cognac */, "\u0413\u0440\u0430\u043D\u0430\u0442" /* EIngredients.Pomegranate */, "\u0413\u0432\u043E\u0437\u0434\u0438\u043A\u0430" /* EIngredients.Dianthus */, "\u0422\u043C\u0438\u043D" /* EIngredients.Caraway */, "\u041C\u0430\u0439\u043E\u0440\u0430\u043D" /* EIngredients.Marjoram */, "\u0416\u0435\u043B\u0430\u0442\u0438\u043D" /* EIngredients.Gelatin */, "\u0421\u0430\u0445\u0430\u0440" /* EIngredients.Sugar */, "\u0421\u043F\u0435\u0446\u0438\u0438" /* EIngredients.Spices */];
    price = 65;
}
function isItalianDish(type) {
    return type.typeCuisines === "Italian cuisine" /* ECuisines.Italian */;
}
function isJapaneseDish(type) {
    return type.typeCuisines === "Japanese cuisine" /* ECuisines.Japanese */;
}
function isFrenchDish(type) {
    return type.typeCuisines === "French cuisine" /* ECuisines.French */;
}
// перечень всех блюд
const listOfDishes = [new Ravioli, new Carbonara, new Bolognese, new Lasagna, new Porchetta, new SeafoodRisotto, new SalmonMaki, new Dango, new ChickenYakisoba, new PorkRamen, new SaladeNicoise, new Tartiflette, new CrepeSuzette, new Cassoulet, new Pate];
class Menu {
    cuisines;
    dishes;
    constructor(cuisines, dishes) {
        this.cuisines = cuisines;
        this.dishes = dishes;
    }
}
class ItalianFactory {
    #dishes = [];
    createMenu(dishes) {
        dishes.forEach(item => {
            if (isItalianDish(item)) {
                this.#dishes.push(item);
            }
        });
        return new Menu("Italian cuisine" /* ECuisines.Italian */, this.#dishes);
    }
}
class JapaneseFactory {
    #dishes = [];
    createMenu(dishes) {
        dishes.forEach(item => {
            if (isJapaneseDish(item)) {
                this.#dishes.push(item);
            }
        });
        return new Menu("Japanese cuisine" /* ECuisines.Japanese */, this.#dishes);
    }
}
class FrenchFactory {
    #dishes = [];
    createMenu(dishes) {
        dishes.forEach(item => {
            if (isFrenchDish(item)) {
                this.#dishes.push(item);
            }
        });
        return new Menu("French cuisine" /* ECuisines.French */, this.#dishes);
    }
}
class Restaurant {
    #menu;
    get seeMenu() {
        return this.#menu;
    }
    constructor(cuisineFactory) {
        this.#menu = cuisineFactory.createMenu(listOfDishes);
    }
}
const order = new Restaurant(new ItalianFactory);
console.log(order.seeMenu);
