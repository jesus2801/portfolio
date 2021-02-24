import express, {Application, Request, Response, urlencoded, json} from 'express';
import {createConnection} from 'typeorm';
import exHbs from 'express-handlebars';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import contactCtrl from './routes/contact.routes';
import indexCtrl from './routes/index.routes';

export class App {
  private app: Application;
  constructor(private port?: number | string) {
    this.app = express();
    createConnection();
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
    this.app.use(
      helmet.contentSecurityPolicy({
        directives: {
          'default-src': ["'self'", 'https://fonts.googleapis.com'],
          'base-uri': ["'self'"],
          'block-all-mixed-content': [],
          'font-src': ["'self'", 'https://fonts.gstatic.com'],
          'img-src': ["'self'", 'data:'],
          'object-src': ["'self'"],
          'script-src': ["'self'"],
          'style-src': ["'self'", 'https:', "'unsafe-inline'"],
          'upgrade-insecure-requests': [],
        },
      })
    );
    this.app.use(helmet.dnsPrefetchControl());
    this.app.use(helmet.expectCt());
    this.app.use(helmet.frameguard());
    this.app.use(helmet.hidePoweredBy());
    this.app.use(helmet.hsts());
    this.app.use(helmet.ieNoOpen());
    this.app.use(helmet.noSniff());
    this.app.use(helmet.permittedCrossDomainPolicies());
    this.app.use(helmet.referrerPolicy());
    this.app.use(helmet.xssFilter());
    this.app.use(urlencoded({extended: false}));
    this.app.use(json());
    this.app.use(morgan('dev'));
  }

  routes() {
    this.app.use(indexCtrl);
    this.app.use('/contact', contactCtrl);
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
