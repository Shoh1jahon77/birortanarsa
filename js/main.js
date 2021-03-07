var isIntro = `Ma'lumotlaringizni kiritvoring brat!`;
alert(isIntro);

var userName = prompt(`Ismingiz nima?`);
var userSurname = prompt(`Familiyangiz nima?`);
var userAge = prompt(`Necha yoshdasiz?`);
var userTelegramLink = prompt(`Telegram linkngiz nima?`);
var userPhoneNumber = prompt(`Telefon raqamingiz nechchi?`);

var isClosing = `Rahmat ${userName} ${userSurname}`
alert(isClosing)

var userInfo = (`Ism: ${userName}
Familiya: ${userSurname}
Yosh: ${userAge}
Telegram: ${userTelegramLink}
Raqam: ${userPhoneNumber}`)

var userData = document.querySelector('.basic__heading');
userData.textContent = userInfo;