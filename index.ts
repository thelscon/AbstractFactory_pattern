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


const enum EIngredients {
    Bacon = 'Бекон' ,
    Basil = 'Базилик' ,
    BeefMince = 'Говяжий фарш' ,
    BulgarianPepper = 'Болгарский перец' ,
    BologneseSauce = 'Соус болоньезе' ,
    Bouillon = 'Бульон' ,
    Butter = 'Сливочное масло' ,
    Camembert = 'Камамбер' ,
    CannedBeans = 'Консервированная фасоль' ,
    CannedTuna = 'Консервированный тунец' ,
    Caraway = 'Тмин' ,
    Carrot =  'Морковь'  ,
    Cheese = 'Сыр' ,
    CherryTomato = 'Помидор Черри' ,
    ChickenFillet = 'Куриное филе' ,
    ChickenLiver = 'Куриная печень' ,
    Chilli = 'Чили' ,
    Cognac = 'Коньяк' ,
    Dianthus = 'Гвоздика' ,
    DryWhiteWine = 'Белое сухое вино' ,
    Egg = 'Яйцо' ,
    FishSauce = 'Рыбный соус' ,
    Flour = 'Мука' ,
    Garlic = 'Чеснок' ,
    Gelatin=  'Желатин' ,
    Ginger = 'Имбирь' ,
    GrainyMustard = 'Зернистая горчица' ,
    GreenBeans = 'Стручковая фасоль' ,
    GreenOnions  = 'Зелёный лук' ,
    Ham = 'Ветчина' ,
    Ketchup = 'Кетчуп' ,
    Lard = 'Сало' ,
    LardWithMeatLayer = 'Сало с мясной прослойкой' ,
    LasagneLeaf = 'Лист лазаньи' ,
    Lettuce = 'Латук' ,
    Marjoram = 'Майоран' ,
    Milk = 'Молоко' ,
    MincedMeat = 'Фарш' ,
    NapaCabbage = 'Пекинская капуста' ,
    Noodles = 'Лапша' ,
    Nori = 'Лист нори' ,
    Nutmeg = 'Мускатный орех' ,
    Olive = 'Оливка' ,
    OliveOil = 'Оливковое масло' ,
    Onion = 'Лук' ,
    Oregano = 'Орегано' ,
    Parmesan = 'Пармезан' ,
    Parsley = 'Петрушка' ,
    Pepper = 'Перец' ,
    PickledPeppers = 'Маринованый перец' ,
    Pomegranate = 'Гранат' ,
    Pork = 'Свинина' ,
    PorkRibs = 'Свинеые рёбра' ,
    Potato = 'Картофель' ,
    PowderedSugar = 'Сахарная пудра' ,
    RamenNoodles = 'Лапша рамен' ,
    RedBeans = 'Красная фасоль' ,
    Rice = 'РиМорковьс' ,
    Ricotta = 'Рикотта' ,
    RiceFlour = 'Рисовая мука' ,
    RiceVinegar = 'Рисовый уксус' ,
    Tomato = 'Помидор' ,
    Paprika = 'Паприка' ,
    Salmon = 'Лосось' ,
    Salt = 'Соль' ,
    SeafoodCocktail = 'Морской коктейль' ,
    Sesame = 'Кунжут' ,
    SesameOil = 'Кунжутное масло' ,
    Shallot = 'Лук-шалот,' ,
    SourCream = 'Сметана' ,
    SoySauce = 'Соевый соус' ,
    Spaghetti = 'Спагетти' ,
    Spices = 'Специи' ,
    Spinach = 'Шпинат' ,
    Sugar = 'Сахар' ,
    TomatoPaste = 'Томатная паста' ,
    VegetableOil = 'Растительное масло' ,
    Walnut = 'Грецкий орех' ,
    Wasabi = 'Васаби' ,
    Water = 'Вода' ,
    WhiteBeans = 'Белая фасоль' ,
    WineVinegar = 'Винный уксус' ,
    Yolk = 'Желток' ,
}
const enum ECuisines {
    Italian = 'Italian cuisine' ,
    Japanese = 'Japanese cuisine' ,
    French = 'French cuisine'
}

// интерфейс блюда
interface IDish<C extends ECuisines> {
    readonly name : string
    readonly typeCuisines : C
    readonly composition : EIngredients[]

    price : number
}
// блюда итальянской кухни
class Ravioli implements IDish<ECuisines.Italian> {
    readonly name = 'Равиоли'
    readonly typeCuisines = ECuisines.Italian
    readonly composition  = [EIngredients.Flour , EIngredients.Egg , EIngredients.Ricotta , EIngredients.Spinach , EIngredients.Nutmeg , EIngredients.Butter , EIngredients.OliveOil]
    price = 25
}
class Carbonara implements IDish<ECuisines.Italian> {
    readonly name = 'Карбонара'
    readonly typeCuisines = ECuisines.Italian
    readonly composition = [EIngredients.Spaghetti , EIngredients.OliveOil , EIngredients.Garlic , EIngredients.Ham , EIngredients.Yolk , EIngredients.Parmesan , EIngredients.Spices]
    price = 35
}
class Bolognese implements IDish<ECuisines.Italian> {
    readonly name = 'Болоньезе'
    readonly typeCuisines = ECuisines.Italian
    readonly composition = [EIngredients.BeefMince , EIngredients.Onion , EIngredients.Garlic , EIngredients.OliveOil , EIngredients.Basil , EIngredients.Oregano , EIngredients.Parsley , EIngredients.TomatoPaste , EIngredients.Cheese , EIngredients.Bouillon , EIngredients.Ketchup , EIngredients.Tomato , EIngredients.Spices]
    price = 30
}
class Lasagna implements IDish<ECuisines.Italian> {
    readonly name = 'Лазанья'
    readonly typeCuisines = ECuisines.Italian
    readonly composition  = [EIngredients.LasagneLeaf , EIngredients.BologneseSauce , EIngredients.MincedMeat , EIngredients.Butter , EIngredients.Flour , EIngredients.OliveOil , EIngredients.Milk , EIngredients.Cheese]
    price = 20
}
class Porchetta implements IDish<ECuisines.Italian> {
    readonly name = 'Поркетта'
    readonly typeCuisines = ECuisines.Italian
    readonly composition = [EIngredients.LardWithMeatLayer , EIngredients.Olive , EIngredients.Walnut , EIngredients.PickledPeppers , EIngredients.Garlic , EIngredients.Oregano , EIngredients.GrainyMustard]
    price = 30
}
// блюда японской кухни
class SeafoodRisotto implements  IDish<ECuisines.Japanese> {
    readonly name = 'Рис с морепродуктами'
    readonly typeCuisines = ECuisines.Japanese
    readonly composition =  [EIngredients.Rice , EIngredients.SeafoodCocktail , EIngredients.Onion , EIngredients.BulgarianPepper , EIngredients.Carrot , EIngredients.Garlic , EIngredients.Tomato , EIngredients.Spices]
    price = 55
}
class SalmonMaki implements IDish<ECuisines.Japanese> {
    readonly name = 'Маки с лососем'
    readonly typeCuisines = ECuisines.Japanese
    readonly composition = [EIngredients.Nori , EIngredients.Salmon , EIngredients.Wasabi , EIngredients.Rice , EIngredients.Water ,  EIngredients.RiceVinegar , EIngredients.Salt , EIngredients.Sugar]
    price = 60
}
class Dango implements IDish<ECuisines.Japanese> {
    readonly name = 'Данго'
    readonly typeCuisines = ECuisines.Japanese
    readonly composition = [EIngredients.RiceFlour , EIngredients.Water]
    price = 25
}
class ChickenYakisoba implements IDish<ECuisines.Japanese> {
    readonly name = 'Якисоба с курицей'
    readonly typeCuisines = ECuisines.Japanese
    readonly composition = [EIngredients.ChickenFillet , EIngredients.Noodles , EIngredients.Carrot , EIngredients.Onion , EIngredients.NapaCabbage , EIngredients.Garlic , EIngredients.SoySauce , EIngredients.SesameOil]
    price = 70
}
class PorkRamen implements IDish<ECuisines.Japanese> {
    readonly name = 'Рамен со свининой'
    readonly typeCuisines = ECuisines.Japanese
    readonly composition = [EIngredients.RamenNoodles , EIngredients.Pork , EIngredients.Spinach , EIngredients.Egg , EIngredients.GreenBeans , EIngredients.Nori , EIngredients.Ginger  ,  EIngredients.Sesame , EIngredients.GreenOnions  ,  EIngredients.FishSauce , EIngredients.Bouillon , EIngredients.SoySauce]
    price = 80
}
// блюда французской кухни
class SaladeNicoise implements  IDish<ECuisines.French> {
    readonly name = 'Нисуаз'
    readonly typeCuisines = ECuisines.French
    readonly composition = [EIngredients.CannedBeans , EIngredients.CherryTomato ,  EIngredients.OliveOil , EIngredients.Garlic , EIngredients.Olive , EIngredients.Potato , EIngredients.Sugar , EIngredients.GrainyMustard , EIngredients.CannedTuna , EIngredients.Lettuce , EIngredients.GreenBeans , EIngredients.WineVinegar , EIngredients.Egg]
    price = 60
}
class Tartiflette implements IDish<ECuisines.French> {
    readonly name = 'Тартифлет'
    readonly typeCuisines = ECuisines.French
    readonly composition = [EIngredients.Potato , EIngredients.Bacon , EIngredients.Camembert , EIngredients.SourCream , EIngredients.Onion , EIngredients.DryWhiteWine , EIngredients.Butter , EIngredients.Salt , EIngredients.Pepper]
    price = 55
}
class CrepeSuzette implements IDish<ECuisines.French> {
    readonly name = 'Креп Сюзетт'
    readonly typeCuisines = ECuisines.French
    readonly composition = [EIngredients.Flour , EIngredients.Milk  ,  EIngredients.Egg , EIngredients.VegetableOil , EIngredients.PowderedSugar , EIngredients.Salt]
    price = 70
}
class Cassoulet implements IDish<ECuisines.French> {
    readonly name = 'Кассуле'
    readonly typeCuisines = ECuisines.French
    readonly composition = [EIngredients.PorkRibs , EIngredients.Lard , EIngredients.RedBeans , EIngredients.WhiteBeans , EIngredients.Onion , EIngredients.Paprika , EIngredients.Chilli]
    price = 90
}
class Pate implements IDish<ECuisines.French> {
    readonly name = 'Французский паштет'
    readonly typeCuisines = ECuisines.French
    readonly composition = [EIngredients.ChickenLiver , EIngredients.Lard , EIngredients.Carrot , EIngredients.Shallot , EIngredients.Butter , EIngredients.SourCream , EIngredients.Cognac , EIngredients.Pomegranate , EIngredients.Dianthus , EIngredients.Caraway , EIngredients.Marjoram , EIngredients.Gelatin , EIngredients.Sugar , EIngredients.Spices]
    price = 65
}
function isItalianDish (type : IDish<ECuisines>) : type is IDish<ECuisines.Italian> {
    return type.typeCuisines === ECuisines.Italian
}
function isJapaneseDish (type : IDish<ECuisines>) : type is IDish<ECuisines.Japanese> {
    return type.typeCuisines === ECuisines.Japanese
}
function isFrenchDish (type : IDish<ECuisines>) : type is IDish<ECuisines.French> {
    return type.typeCuisines === ECuisines.French
}

// перечень всех блюд
const listOfDishes = [new Ravioli , new Carbonara , new Bolognese , new Lasagna , new Porchetta , new SeafoodRisotto , new SalmonMaki , new Dango , new ChickenYakisoba , new PorkRamen , new SaladeNicoise , new Tartiflette , new CrepeSuzette , new Cassoulet , new Pate]

// интерфейс меню
interface IMenu<C extends ECuisines> {
    readonly cuisines : C ,
    readonly dishes : Readonly <IDish<C>[]>
}
class Menu<C extends ECuisines> implements IMenu<C> {
    constructor (
        readonly cuisines : C ,
        readonly dishes : Readonly <IDish<C>[]>
    ) {}
}

// абстрактная фабрика
interface ICuisineFactory<C extends ECuisines> {
    readonly createMenu : (dishes : IDish<C>[]) => IMenu<C>
}
class ItalianFactory implements ICuisineFactory<ECuisines.Italian> {
    #dishes : IDish<ECuisines.Italian>[] = []

    createMenu (dishes : IDish<ECuisines>[]) {
        dishes.forEach (item => {
            if (isItalianDish (item)) {
                this.#dishes.push (item)
            }
        })
        return new Menu (ECuisines.Italian , this.#dishes)
    }
}
class JapaneseFactory implements ICuisineFactory<ECuisines.Japanese>  {
    #dishes : IDish<ECuisines.Japanese>[] = []

    createMenu (dishes : IDish<ECuisines>[]) {
        dishes.forEach (item => {
            if (isJapaneseDish (item)) {
                this.#dishes.push (item)
            }
        })
        return new Menu (ECuisines.Japanese , this.#dishes)
    }
}
class FrenchFactory implements ICuisineFactory<ECuisines.French>  {
    #dishes : IDish<ECuisines.French>[] = []

    createMenu (dishes : IDish<ECuisines>[]) {
        dishes.forEach (item => {
            if (isFrenchDish (item)) {
                this.#dishes.push (item)
            }
        })
        return new Menu (ECuisines.French , this.#dishes)
    }
}

interface IRestaurant {
    seeMenu : IMenu<ECuisines>
}
class Restaurant implements IRestaurant {
    readonly #menu : IMenu<ECuisines>

    get seeMenu () : IMenu<ECuisines> {
        return this.#menu
    }

    constructor (cuisineFactory : ICuisineFactory<ECuisines>) {
        this.#menu = cuisineFactory.createMenu (listOfDishes)
    }
}

const order = new Restaurant (new ItalianFactory)
console.log (order.seeMenu)





