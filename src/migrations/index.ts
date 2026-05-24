import * as migration_20260524_021013 from './20260524_021013';

export const migrations = [
  {
    up: migration_20260524_021013.up,
    down: migration_20260524_021013.down,
    name: '20260524_021013'
  },
];
