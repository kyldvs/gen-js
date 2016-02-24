'use strict';

import {allFiles} from './fileSearch';

console.log('Start');

(async () => {
  const filePromise = allFiles(process.argv[0]);
  console.log('=== File Promise ===');
  console.log(filePromise);
  const files = await filePromise;
  console.log('=== Files ===');
  console.log(files);
  console.log('=== ===')
})();

console.log('Done');
