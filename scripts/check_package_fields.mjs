import { fileURLToPath } from 'url';
import path from 'path';
import assert from 'assert';
import fs from 'fs';

const modulePath = path.dirname(fileURLToPath(import.meta.url));
const packageJson = fs.readFileSync(path.join(modulePath, '..', 'package.json'));

function getErrorMessage(fieldName) {
  return `${fieldName} field has not bee filled out in package.json.`;
}

assert(packageJson.description, getErrorMessage('description'));
assert(packageJson.repository?.url, getErrorMessage('repository.url'));
assert(packageJson.bugs?.url, getErrorMessage('bugs.url'));
assert(packageJson.homepage, getErrorMessage('homepage'));
assert(packageJson.keywords?.length > 0, getErrorMessage('keywords'));