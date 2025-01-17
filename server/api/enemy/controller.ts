import { enemyUseCase } from '$/useCase/enemyUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ query }) => ({
    status: 200,
    body: await enemyUseCase.findInDisplay(query.display),
  }),
  delete: async ({ body }) => ({
    status: 200,
    body: await enemyUseCase.kill(body.enemyId, body.userId),
  }),
  post: async () => ({
    status: 200,
    body: await enemyUseCase.create(),
  }),
}));
