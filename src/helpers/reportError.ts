export class AppError extends Error {
  context: Error;
  date: Date;
  constructor(context: Error, ...params: any) {
    super(...params);
    this.context = context;
    this.date = new Date();
  }
  report() {
    console.log('----------------------------------------------------');
    console.log(this.context);
    console.log(`fecha de error: `, this.date);
    console.log('----------------------------------------------------');
  }
}
