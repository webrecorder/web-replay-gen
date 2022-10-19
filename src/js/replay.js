/** Replay config */
import config from '../wrg-runtime-config.json';

class ReplayOptions {
  constructor({ embed, replayBase }) {
    this.embed = embed || 'embed';
    this.replayBase = replayBase || './replay/';
  }
}

export default new ReplayOptions(config.replay);
