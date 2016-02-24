/**
 * @flow
 */

'use strict';

import fs from 'fs-promise';
import path from 'path';

async function allFiles(dir: string): Promise<Array<string>> {
  let allPaths = [];
  const thisLevel = await fs.readdir(dir);
  for (const file of thisLevel) {
    const fullPath = path.join(dir, file);
    const stats = await fs.stat(fullPath);
    if (stats.isFile()) {
      allPaths.push(fullPath);
    } else if (stats.isDirectory()) {
      allPaths = allPaths.concat(await allFiles(fullPath));
    }
  }
}

export {allFiles};
