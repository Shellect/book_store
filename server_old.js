// Подключение модулей
const express = require('express');
const bodyParser = require("body-parser");
const { body, validationResult } = require('express-validator');
const fs = require("fs");
const session = require('express-session');

function error_log(err) {
    let d = new Date();
    let logFile = fs.createWriteStream(__dirname + '/error_report.log', { flags: 'a' });
    logFile.write(d.toLocaleString() + ' ' + err.message + '\n');
    console.log(err);
}


const app = express();
app.set('view engine', 'pug');
app.use('/media', express.static('media'));
app.use(express.json());
app.use(session({
    secret: 'eptBATPhykOaN8LqWvl38KGdGa8ZRc60',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.get('/', (req, res) => {
        res.render("main");
});


/**
 * Добавление книги в корзину
 */
app.post('/buy', (req, res) => {
    req.session.books = req.body.book_id;
    res.sendStatus(200);
});

/**
 * Страница оформления заказа
 */
app.get('/order', (req, res) => {
    res.render("order", { page: "order" });
});

/**
 * Страница профиля пользователя
 */
app.get('/profile', (req, res) => {
    res.render("main");
});

/**
 * Страница авторизации
 */
app.get('/auth', (req, res) => {
    res.render("auth", { page: "auth", errors: [] });
});


/**
 * Страница корзины
 */
app.get('/cart', (req, res) => {
    res.render("main");
})

/**
 * Эндпойнт обработки формы авторизации
 */
app.post('/auth',
    bodyParser.urlencoded(),
    body('username').notEmpty(),
    body('password').notEmpty(),
    (req, res, next) => {
        const result = validationResult(req);
        // Если ошибок не найдено
        if (result.isEmpty()) {
            // Создаем новую сессию для предотвращения атак с перехватом куки
            req.session.regenerate(function (err) {
                // Если redis не доступен передаём управление обработчику ошибок
                if (err) next(err);

                // Записываем информацию о авторизации пользователя в сессии
                req.session.user = req.body.username;

                // Сохраняем новую сессию
                req.session.save(function (err) {
                    if (err) return next(err);
                    // Перенаправляем пользователя на главную страницу
                    res.redirect('/');
                });
            });
        } else {
            res.render('auth', { errors: result.array() })
        }
    }
);

app.listen(3000, () => {
    console.log(`Server started by address: http://bookshop.local:3000`);
});