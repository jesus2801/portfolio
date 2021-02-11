import express, {Application, Request, Response} from 'express';
const exHbs = require('express-handlebars');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');

export class App {
  private app: Application;
  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
    this.extra();
  }

  settings() {
    this.app.set(`port`, process.env.PORT || this.port || 3000);
    this.app.set(`views`, path.join(__dirname, `views`));
    this.app.set(`view engine`, `.hbs`);

    this.app.engine(
      `.hbs`,
      exHbs({
        defaultLayout: `main`,
        layoutsDir: path.join(this.app.get(`views`), `layouts`),
        partialsDir: path.join(this.app.get(`views`), `partials`),
        extname: `.hbs`,
        helpers: require(`./lib/handlebars`),
      })
    );
  }
  middlewares() {
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(express.json());
  }
  routes() {
    this.app.use(require(`./routes`));
    this.app.use(require(`./routes/contact`));
  }
  extra() {
    this.app.use(express.static(path.join(__dirname, `public`)));
    this.app.use(function (req: Request, res: Response) {
      res.status(404).send(`404 pagina no encontrada`);
    });
  }
  async listen() {
    const server = await this.app.listen(this.app.get(`port`));
    console.log(`server is running on port ${this.app.get('port')}`);
    return server;
  }
}
