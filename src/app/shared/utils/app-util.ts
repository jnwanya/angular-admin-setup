export class AppUtil {
  public static generateRandomText(length: number): string {
     let text = '';
     const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     for (let i = 0; i < length; i++) {
       text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
     return text;
  }
  public static dateTimeReviver =  (key, value) => {

    const dateFormat = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
   // const reMsAjax = /^\/Date\((d|-|.*)\)[\/|\\]$/;

    /*if (typeof value === 'string') {
      let a = reISO.exec(value);
      if (a) {
        return new Date(value);
      }
      a = reMsAjax.exec(value);
      if (a) {
        const b = a[1].split(/[-+,.]/);
        return new Date(b[0] ? +b[0] : 0 - +b[1]);
      }
    }*/

   // const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
    if (typeof value === 'string' && dateFormat.test(value)) {
      return new Date(value);
    }
    return value;
  }
}
