import { appendFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { checkSystemHealth, handleReadError, reportToMainServer } from '../utils/helpers.js';


export async function reportsRoutes (fastify, options) {
  fastify.post('/audit', async (request, reply) => {
    let logId = 0;
    const body = request.body;

    const logEntry = {
      timestamp: new Date().toISOString(),
      id: logId++,
      data: body,
    }

    const systemHealthy = checkSystemHealth();
    console.log(systemHealthy);
    if (systemHealthy) {
      await reportToMainServer();
      return;
    }

    try {
      await appendFile(path.join('audit.log'), `${JSON.stringify(logEntry)}\n`);
      reply.send(logEntry);
    } catch (err) {
      reply.code(500).send({ error: 'Failed to write the log entry to the file system' });
    }
  })

  fastify.get('/audit/:id', async (request, reply) => {
    const { id } = request.params;

    try {
      const data = readFile('audit.log', 'utf8');
      const lines = data.split('\n');
      const foundEntry = lines.find(line => {
        try {
          const entry = JSON.parse(line);
          return entry.id == id;
        } catch (err) {
          return false; // Ignoriert Fehler beim Parsen (z.B. leere Zeilen)
        }
      });
      if (foundEntry) {
        reply.send(JSON.parse(foundEntry));
      } else {
        reply.code(404).send({ error: 'Log-Eintrag nicht gefunden.' });
      }
    } catch (err) {
      reply.code(200).send({id: id, data: handleReadError()});
    }
  })
}