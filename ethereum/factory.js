import web3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0xE499EcD8dFFe0088e8eeF7Da8682BA5E57650e62"

);

export default instance;
