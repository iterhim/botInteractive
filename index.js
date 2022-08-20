const {Bot, Keyboard, session, InputFile} = require("grammy");

const text = require('./text.js')
const bot = new Bot("5747076401:AAFfstJJcB_btlYqitWQ2J6U5ah1hKiPP4s");

function initial() {
    return {level: '0'};
}

bot.use(session({initial}));

bot.hears('asd', (ctx) => ctx.session.level++);
bot.command("start", async (ctx) => {
    const keyboard = new Keyboard()
        .text("Далее")
        .placeholder("Продолжить!")
        .resized()
        .oneTime();
    await ctx.reply(text['1'], {
        reply_markup: keyboard,
    });
});
bot.on('message', async (ctx) => {
    //
    let keyboard = ''

    if (ctx.session.level === '0') {
        if (ctx.message.text === 'Далее') {
            ctx.session.level = '1'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();

            await ctx.replyWithPhoto(new InputFile("./photos/1 1.png"), {
                reply_markup: keyboard,
                caption: text['2']
            });
        }
    } else if (ctx.session.level === '1') {

        if (ctx.message.text === '2️⃣') {

            ctx.session.level = '2.1'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/1 2.png"), {
                reply_markup: keyboard,
                caption: text['2,1']
            });
        } else if (ctx.message.text === '1️⃣') {

            ctx.session.level = '3'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/1 1.png"), {
                reply_markup: keyboard,
                caption: text['3']
            });

        }

    } else if (ctx.session.level === '2.1') {
        if (ctx.message.text === '1️⃣') {

            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/1 3.png"), {
                reply_markup: keyboard,
                caption: text['2,2']
            });
        }
        if (ctx.message.text === '2️⃣') {

            ctx.session.level = '3'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/1 1.png"), {
                reply_markup: keyboard,
                caption: text['3']
            });

        }

    } else if (ctx.session.level === '3') {
        //  if (ctx.session.level === '3') {
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '4'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣")

                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/2 1.png"), {
                reply_markup: keyboard,
                caption: text['4']
            });
        }
        if (ctx.message.text === '1️⃣') {

            ctx.session.level = '3.1'
            keyboard = new Keyboard()
                .text("/start")

                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/1 3.png"), {
                reply_markup: keyboard,
                caption: text['3,1']
            });

        }

    } else if (ctx.session.level === '4') {
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '5'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")

                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/2 1.png"), {
                reply_markup: keyboard,
                caption: text['5']
            });
        }
        if (ctx.message.text === '1️⃣') {

            ctx.session.level = '4.1'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣")

                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/2 2.png"), {
                reply_markup: keyboard,
                caption: text['4,1']
            });

        }

    } else if (ctx.session.level === '4.1') {
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")

                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/2 3.png"), {
                reply_markup: keyboard,
                caption: text['4,2']
            });
        }
        if (ctx.message.text === '1️⃣') {

            ctx.session.level = '5'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")

                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/2 1.png"), {
                reply_markup: keyboard,
                caption: text['5']
            });

        }

    } else if (ctx.session.level === '4.1') {
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")

                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.reply(text['4,2'], {
                reply_markup: keyboard,
            });
        }
        if (ctx.message.text === '1️⃣') {

            ctx.session.level = '5'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")

                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/2 1.png"), {
                reply_markup: keyboard,
                caption: text['5']
            });

        }

    } else if (ctx.session.level === '5') {

        if (ctx.message.text === '1️⃣') {

            ctx.session.level = '5.1'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")

                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/2 2.png"), {
                reply_markup: keyboard,
                caption: text['5,1']
            });

        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '6'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")


                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/3 1.png"), {
                reply_markup: keyboard,
                caption: text['6']
            });
        }
        if (ctx.message.text === '3️⃣') {

            ctx.session.level = '5.4'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")

                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/2 2.png"), {
                reply_markup: keyboard,
                caption: text['5,4']
            });
        }

    } else if (ctx.session.level === '5.1') {

        if (ctx.message.text === '1️⃣') {

            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")

                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/2 3.png"), {
                reply_markup: keyboard,
                caption: text['5,2']
            });

        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")


                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/2 3.png"), {
                reply_markup: keyboard,
                caption: text['5,3']
            });
        }
        if (ctx.message.text === '3️⃣') {

            ctx.session.level = '6'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")

                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/3 1.png"), {
                reply_markup: keyboard,
                caption: text['6']
            });

        }

    } else if (ctx.session.level === '5.4') {

        if (ctx.message.text === '1️⃣') {

            ctx.session.level = '6'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")

                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/3 1.png"), {
                reply_markup: keyboard,
                caption: text['6']
            });

        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")


                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/2 3.png"), {
                reply_markup: keyboard,
                caption: text['5,5']
            });
        }
        if (ctx.message.text === '3️⃣') {

            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")

                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/2 3.png"), {
                reply_markup: keyboard,
                caption: text['5,6']
            });

        }

    } else if (ctx.session.level === '6') {

        if (ctx.message.text === '1️⃣') {

            ctx.session.level = '6.1'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/3 2.png"), {
                reply_markup: keyboard,
                caption: text['6,1']
            });

        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '7'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/3 1.png"), {
                reply_markup: keyboard,
                caption: text['7']
            });
        }
        if (ctx.message.text === '3️⃣') {

            ctx.session.level = '6.4'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/3 2.png"), {
                reply_markup: keyboard,
                caption: text['6,4']
            });

        }

    } else if (ctx.session.level === '6.1') {

        if (ctx.message.text === '1️⃣') {

            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/3 3.png"), {
                reply_markup: keyboard,
                caption: text['6,2']
            });

        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/3 3.png"), {
                reply_markup: keyboard,
                caption: text['6,2']
            });
        }
        if (ctx.message.text === '3️⃣') {
            ctx.session.level = '7'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/3 1.png"), {
                reply_markup: keyboard,
                caption: text['7']
            });

        }

    } else if (ctx.session.level === '6.4') {

        if (ctx.message.text === '1️⃣') {

            ctx.session.level = '7'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/3 1.png"), {
                reply_markup: keyboard,
                caption: text['7']
            });

        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/3 3.png"), {
                reply_markup: keyboard,
                caption: text['6,5']
            });
        }
        if (ctx.message.text === '3️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/3 3.png"), {
                reply_markup: keyboard,
                caption: text['6,6']
            });

        }

    } else if (ctx.session.level === '7') {

        if (ctx.message.text === '1️⃣') {

            ctx.session.level = '7.1'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/3 2.png"), {
                reply_markup: keyboard,
                caption: text['7,1']
            });

        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '7.4'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/3 2.png"), {
                reply_markup: keyboard,
                caption: text['7,4']
            });
        }
        if (ctx.message.text === '3️⃣') {
            ctx.session.level = '8'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/4 1.png"), {
                reply_markup: keyboard,
                caption: text['8']
            });
        }

    } else if (ctx.session.level === '7.1') {

        if (ctx.message.text === '1️⃣') {

            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/3 3.png"), {
                reply_markup: keyboard,
                caption: text['7,2']
            });

        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '8'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/4 1.png"), {
                reply_markup: keyboard,
                caption: text['8']
            });
        }
        if (ctx.message.text === '3️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/3 3.png"), {
                reply_markup: keyboard,
                caption: text['7,3']
            });

        }

    } else if (ctx.session.level === '7.4') {

        if (ctx.message.text === '1️⃣') {

            ctx.session.level = '8'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/4 1.png"), {
                reply_markup: keyboard,
                caption: text['8']
            });

        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/3 3.png"), {
                reply_markup: keyboard,
                caption: text['7,5']
            });
        }
        if (ctx.message.text === '3️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/3 3.png"), {
                reply_markup: keyboard,
                caption: text['7,6']
            });

        }

    } else if (ctx.session.level === '8') {

        if (ctx.message.text === '1️⃣') {

            ctx.session.level = '8.1'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/4 2.png"), {
                reply_markup: keyboard,
                caption: text['8,1']
            });

        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '8.4'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/4 2.png"), {
                reply_markup: keyboard,
                caption: text['8,4']
            });
        }
        if (ctx.message.text === '3️⃣') {
            ctx.session.level = '9'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/4 1.png"), {
                reply_markup: keyboard,
                caption: text['9']
            });

        }

    } else if (ctx.session.level === '8.1') {

        if (ctx.message.text === '1️⃣') {

            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/4 3.png"), {
                reply_markup: keyboard,
                caption: text['8,2']
            });

        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '9'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/4 1.png"), {
                reply_markup: keyboard,
                caption: text['9']
            });
        }
        if (ctx.message.text === '3️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/4 3.png"), {
                reply_markup: keyboard,
                caption: text['8,3']
            });

        }

    } else if (ctx.session.level === '8.4') {

        if (ctx.message.text === '1️⃣') {

            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/4 3.png"), {
                reply_markup: keyboard,
                caption: text['8,5']
            });
        }
        if (ctx.message.text === '2️⃣') {

            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/4 3.png"), {
                reply_markup: keyboard,
                caption: text['8,6']
            });
        }
        if (ctx.message.text === '3️⃣') {
            ctx.session.level = '9'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/4 1.png"), {
                reply_markup: keyboard,
                caption: text['9']
            });

        }

    } else if (ctx.session.level === '9') {

        if (ctx.message.text === '1️⃣') {

            ctx.session.level = '9.1'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/4 2.png"), {
                reply_markup: keyboard,
                caption: text['9,1']
            });
        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '10'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣").text("4️⃣").text("5️⃣").text("6️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 1.png"), {
                reply_markup: keyboard,
                caption: text['10']
            });

        }
        if (ctx.message.text === '3️⃣') {

            ctx.session.level = '9.4'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/4 2.png"), {
                reply_markup: keyboard,
                caption: text['9,4']
            });

        }

    } else if (ctx.session.level === '9.1') {

        if (ctx.message.text === '1️⃣') {

            ctx.session.level = '10'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣").text("4️⃣").text("5️⃣").text("6️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 1.png"), {
                reply_markup: keyboard,
                caption: text['10']
            });
        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/4 3.png"), {
                reply_markup: keyboard,
                caption: text['9,2']
            });

        }
        if (ctx.message.text === '3️⃣') {

            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/4 3.png"), {
                reply_markup: keyboard,
                caption: text['9,3']
            });

        }

    } else if (ctx.session.level === '9.4') {

        if (ctx.message.text === '1️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/4 3.png"), {
                reply_markup: keyboard,
                caption: text['9,5']
            });
        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = ''
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/4 3.png"), {
                reply_markup: keyboard,
                caption: text['9,6']
            });
        }
        if (ctx.message.text === '3️⃣') {


            ctx.session.level = '10'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣").text("4️⃣").text("5️⃣").text("6️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 1.png"), {
                reply_markup: keyboard,
                caption: text['10']
            });
        }

    } else if (ctx.session.level === '10') {

        if (ctx.message.text === '1️⃣') {
            ctx.session.level = '11'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣").text("4️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 2.png"), {
                reply_markup: keyboard,
                caption: text['11']
            });

        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '12'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣").text("4️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 2.png"), {
                reply_markup: keyboard,
                caption: text['12']
            });


        }
        if (ctx.message.text === '3️⃣') {


            ctx.session.level = '13'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 1.png"), {
                reply_markup: keyboard,
                caption: text['13']
            });

        }
        if (ctx.message.text === '4️⃣') {


            ctx.session.level = '14'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 2.png"), {
                reply_markup: keyboard,
                caption: text['14']
            });

        }
        if (ctx.message.text === '5️⃣') {


            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 3.png"), {
                reply_markup: keyboard,
                caption: text['15']
            });

        }
        if (ctx.message.text === '6️⃣') {


            ctx.session.level = '16'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣").text("3️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 2.png"), {
                reply_markup: keyboard,
                caption: text['16']
            });
        }

    } else if (ctx.session.level === '11') {

        if (ctx.message.text === '1️⃣') {
            ctx.session.level = '11.1'
            keyboard = new Keyboard()
                .text("1️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 2.png"), {
                reply_markup: keyboard,
                caption: text['11,1']
            });

        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '11.2'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 2.png"), {
                reply_markup: keyboard,
                caption: text['11,2']
            });

        }
        if (ctx.message.text === '3️⃣') {


            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 3.png"), {
                reply_markup: keyboard,
                caption: text['11,3']
            });
        }
        if (ctx.message.text === '4️⃣') {


            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 3.png"), {
                reply_markup: keyboard,
                caption: text['11,4']
            });
        }


    } else if (ctx.session.level === '11.1') {

        if (ctx.message.text === '1️⃣') {
            ctx.session.level = ''
            keyboard = new Keyboard()
                .text("1️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/концовка эллианы.png"), {
                reply_markup: keyboard,
                caption: text['11,1,1']
            });

        }
    } else if (ctx.session.level === '11.2') {

        if (ctx.message.text === '1️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/концовка ллос.png"), {
                reply_markup: keyboard,
                caption: text['11,2,1']
            });


        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 3.png"), {
                reply_markup: keyboard,
                caption: text['11,2,2']
            });


        }
    } else if (ctx.session.level === '12') {

        if (ctx.message.text === '1️⃣') {
            ctx.session.level = '12.1'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 3.png"), {
                reply_markup: keyboard,
                caption: text['12,1']
            });

        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '12.2'
            keyboard = new Keyboard()
                .text("1️⃣").text("2️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 2.png"), {
                reply_markup: keyboard,
                caption: text['12,2']
            });

        }
        if (ctx.message.text === '3️⃣') {


            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 3.png"), {
                reply_markup: keyboard,
                caption: text['12,3']
            });
        }
        if (ctx.message.text === '4️⃣') {


            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/сумасшествие .png"), {
                reply_markup: keyboard,
                caption: text['12,4']
            });
        }


    } else if (ctx.session.level === '12.2') {

        if (ctx.message.text === '1️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/смерть ямины.png"), {
                reply_markup: keyboard,
                caption: text['12,1,1']
            });

        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 3.png"), {
                reply_markup: keyboard,
                caption: text['12,1,2']
            });
        }
    } else if (ctx.session.level === '13') {

        if (ctx.message.text === '1️⃣') {
            ctx.session.level = '9.1'
            keyboard = new Keyboard()
                .text("1️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 3.png"), {
                reply_markup: keyboard,
                caption: text['13,3']
            });

        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '9.1'
            keyboard = new Keyboard()
                .text("1️⃣")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 3.png"), {
                reply_markup: keyboard,
                caption: text['13,3']
            });

        }
        if (ctx.message.text === '3️⃣') {


            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 3.png"), {
                reply_markup: keyboard,
                caption: text['13,3']
            });
        }
    } else if (ctx.session.level === '16') {

        if (ctx.message.text === '1️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 3.png"), {
                reply_markup: keyboard,
                caption: text['16,1']
            });

        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 3.png"), {
                reply_markup: keyboard,
                caption: text['16,2']
            });

        }
        if (ctx.message.text === '3️⃣') {


            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/прощание.png"), {
                reply_markup: keyboard,
                caption: text['16,3']
            });
        }
    } else if (ctx.session.level === '14') {

        if (ctx.message.text === '1️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 3.png"), {
                reply_markup: keyboard,
                caption: text['14,1']
            });

        }
        if (ctx.message.text === '2️⃣') {
            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/падение.png"), {
                reply_markup: keyboard,
                caption: text['16,3']
            });

        }
        if (ctx.message.text === '3️⃣') {


            ctx.session.level = '0'
            keyboard = new Keyboard()
                .text("/start")
                .placeholder("Продолжить!")
                .resized()
                .oneTime();
            await ctx.replyWithPhoto(new InputFile("./photos/5 3.png"), {
                reply_markup: keyboard,
                caption: text['14,3']
            });
        }
    }
})

bot.on("message", (ctx) => ctx.reply("Got another message!"));

bot.start();
