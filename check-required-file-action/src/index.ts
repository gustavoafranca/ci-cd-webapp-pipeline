import * as core from '@actions/core';
import * as fs from 'fs';

async function run() {
  try {
    const filename = core.getInput('filename');

    if (!fs.existsSync(filename)) {
      core.setFailed(`Arquivo obrigatorio "${filename}" nao encontrado.`);
    }
  } catch (error: any) {
    core.setFailed(error.message);
  }
}

run();
