import { test } from './folder_a';

export async function handler(event: any): Promise<any> {
  console.log('handler'); // eslint-disable-line
  await test();
}
