import { URL } from 'url'; // in Browser, the URL in native accessible on window

// Will contain trailing slash
export   const  __dirname:String = new URL('.', import.meta.url).pathname;
export const __filename:String = new URL('', import.meta.url).pathname;

