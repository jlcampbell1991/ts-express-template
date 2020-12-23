class Logger {
 private consumer: string;

 constructor(consumer: string) {
   this.consumer = consumer;
 }

 private getDate(): string {
   const date = new Date();
   return date.toLocaleString();
 }

 private formatMessage(level: string, msg: string): string {
   return `[${level}][${this.consumer} ${this.getDate()}] ${msg}`;
 }

 debug(msg: string): void { console.debug(this.formatMessage('DEBUG', msg)) }
 error(msg: string): void { console.error(this.formatMessage('ERROR', msg)) }
 info(msg: string): void  { console.log(this.formatMessage('INFO', msg))    }
}

export default Logger;
