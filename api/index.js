//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
require("dotenv").config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const axios = require("axios");
const { Genre } = require("./src/db");
const { GENRE_URL, API_KEY } = process.env;
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, async () => {
    console.log("conexión con la base de datos correcta");
    console.log("%s listening at 3001"); // eslint-disable-line no-console
    await axios
      .get(`${GENRE_URL}${API_KEY}`)
      .then((r) => {
        const result = r.data.results;
        //console.log(result)
        if(result.length > 0){
          result.map(r => {
            Genre.findOrCreate({
              where: {
              id: r.id,
              name: r.name
            }})
          })
        }
      })
      .catch((err) => console.error(err));
  });
});
